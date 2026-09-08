const canvas = document.getElementById('editorCanvas');
const ctx = canvas.getContext('2d');
const outputCode = document.getElementById('outputCode');

// --- Starting data (mirrors what ships in map.js) ----------------------
const DEFAULT_MAP = {
    startScene: "factory",
    startSpawn: { x: 400, y: 500 },
    itemTypes: {
        box: { name: "Box", color: "#8B4513", shape: "square" },
        cheese: { name: "Cheese", color: "#f1c40f", shape: "triangle" }
    },
    scenes: {
        factory: {
            width: 800, height: 600, background: "#7494B0",
            zones: {
                counter: { x: 340, y: 20, width: 120, height: 80, solid: true, acceptItem: "cheese" },
                machine: { x: 600, y: 240, width: 120, height: 120, solid: true, inputItem: "box", outputItem: "cheese" },
                dock: { x: 30, y: 420, width: 150, height: 150, solid: false, spawnItem: "box" }
            },
            walls: [
                { x: 54.453125, y: 312, width: 357, height: 68, color: "#555555", solid: true },
                { x: 308.453125, y: 384, width: 107, height: 171, color: "#555555", solid: true }
            ],
            doors: [
                { x: 780, y: 260, width: 20, height: 80, target: "outside", spawnX: 100, spawnY: 600 }
            ],
            npcs: [
                { x: 500, y: 500, radius: 20, color: "#9b59b6", name: "Supervisor",
                  lines: ["Keep those boxes moving!", "The machine turns boxes into cheese - simple as that."] }
            ]
        },
        outside: {
            width: 1600, height: 1200, background: "#4a7c3f",
            zones: {},
            walls: [
                { x: 500, y: 300, width: 60, height: 60, color: "#555555", solid: true },
                { x: 900, y: 700, width: 80, height: 80, color: "#555555", solid: true },
                { x: 1200, y: 250, width: 50, height: 50, color: "#555555", solid: true },
                { x: 700, y: 900, width: 200, height: 40, color: "#555555", solid: true },
                { x: 100, y: 640, width: 250, height: 24, color: "#8e6b3f", solid: false }
            ],
            doors: [
                { x: 20, y: 560, width: 20, height: 80, target: "factory", spawnX: 750, spawnY: 300 }
            ],
            npcs: [
                { x: 300, y: 500, radius: 20, color: "#16a085", name: "Wanderer",
                  lines: ["Nice weather today.", "Watch out for the machine noise coming from that building."] }
            ]
        }
    }
};

// --- Editor state -------------------------------------------------------
let scenes = JSON.parse(JSON.stringify(DEFAULT_MAP.scenes));
let itemTypes = JSON.parse(JSON.stringify(DEFAULT_MAP.itemTypes));
let startScene = DEFAULT_MAP.startScene;
let startSpawn = { ...DEFAULT_MAP.startSpawn };
let currentSceneName = startScene;

let currentTool = 'wall';
let isDrawing = false;
let startX = 0, startY = 0, currentX = 0, currentY = 0;
let lastMouseX = 0, lastMouseY = 0;

let pendingDoor = null;   // {x,y,width,height} just drawn, waiting for a target scene
let pickingSpawn = null;  // { sourceScene, door:{x,y,width,height,target} } - next click sets the spawn point
let editingNpcIndex = null; // index into scene().npcs while the NPC panel is open, or null for a brand-new NPC

function scene() { return scenes[currentSceneName]; }

// --- UI helpers -----------------------------------------------------------
function populateSceneSelect() {
    const names = Object.keys(scenes);
    document.getElementById('sceneSelect').innerHTML =
        names.map(n => `<option value="${n}" ${n === currentSceneName ? 'selected' : ''}>${n}</option>`).join('');
    document.getElementById('startSceneSelect').innerHTML =
        names.map(n => `<option value="${n}" ${n === startScene ? 'selected' : ''}>${n}</option>`).join('');
}

function populateDoorTargetSelect() {
    const names = Object.keys(scenes).filter(n => n !== currentSceneName);
    document.getElementById('doorTarget').innerHTML =
        names.map(n => `<option value="${n}">${n}</option>`).join('');
}

function resizeCanvasToScene() {
    const s = scene();
    canvas.width = s.width;
    canvas.height = s.height;
    document.getElementById('sceneWidth').value = s.width;
    document.getElementById('sceneHeight').value = s.height;
    document.getElementById('sceneBg').value = s.background || '#7494B0';
}

function enableControls(enabled) {
    document.getElementById('sceneSelect').disabled = !enabled;
    document.getElementById('newSceneBtn').disabled = !enabled;
    document.getElementById('deleteSceneBtn').disabled = !enabled;
    document.querySelectorAll('.tool-btn').forEach(b => b.disabled = !enabled);
}

function renderDoorList() {
    const container = document.getElementById('doorList');
    const s = scene();
    if (!s.doors.length) {
        container.innerHTML = '<p class="hint">No doors in this scene yet.</p>';
        return;
    }
    container.innerHTML = '';
    s.doors.forEach((d, i) => {
        const row = document.createElement('div');
        row.className = 'door-item';
        row.innerHTML = `<span>&rarr; ${d.target} (spawn ${Math.round(d.spawnX)}, ${Math.round(d.spawnY)})</span><button>&times;</button>`;
        row.querySelector('button').addEventListener('click', () => {
            s.doors.splice(i, 1);
            renderDoorList();
            drawAll();
            updateOutput();
        });
        container.appendChild(row);
    });
}

function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

// --- Item type management ----------------------------------------------------
function itemOptionsHtml(selected) {
    return Object.keys(itemTypes).map(id =>
        `<option value="${id}" ${id === selected ? 'selected' : ''}>${itemTypes[id].name}</option>`
    ).join('');
}

function renderItemTypeList() {
    const container = document.getElementById('itemTypeList');
    container.innerHTML = '';
    for (const id in itemTypes) {
        const t = itemTypes[id];
        const row = document.createElement('div');
        row.className = 'itemtype-row';
        row.innerHTML = `
            <input type="text" value="${t.name}" data-field="name">
            <input type="color" value="${t.color}" data-field="color">
            <select data-field="shape">
                <option value="square" ${t.shape === 'square' ? 'selected' : ''}>Square</option>
                <option value="circle" ${t.shape === 'circle' ? 'selected' : ''}>Circle</option>
                <option value="triangle" ${t.shape === 'triangle' ? 'selected' : ''}>Triangle</option>
            </select>
            <button title="Delete">&times;</button>
        `;
        row.querySelector('[data-field="name"]').addEventListener('input', (e) => {
            itemTypes[id].name = e.target.value;
            renderZoneItemSettings();
            updateOutput();
        });
        row.querySelector('[data-field="color"]').addEventListener('input', (e) => {
            itemTypes[id].color = e.target.value;
            updateOutput();
        });
        row.querySelector('[data-field="shape"]').addEventListener('change', (e) => {
            itemTypes[id].shape = e.target.value;
            updateOutput();
        });
        row.querySelector('button').addEventListener('click', () => {
            delete itemTypes[id];
            renderItemTypeList();
            renderZoneItemSettings();
            updateOutput();
        });
        container.appendChild(row);
    }
}

document.getElementById('addItemTypeBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('newItemName');
    const name = nameInput.value.trim();
    if (!name) { alert('Give the new item a name first.'); return; }
    let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'item';
    let unique = id, n = 1;
    while (itemTypes[unique]) { unique = id + '_' + (++n); }
    itemTypes[unique] = {
        name,
        color: document.getElementById('newItemColor').value,
        shape: document.getElementById('newItemShape').value
    };
    nameInput.value = '';
    renderItemTypeList();
    renderZoneItemSettings();
    updateOutput();
});

// --- Zone item settings (what the Dock spawns, what the Machine converts, what the Counter wants) ---
function renderZoneItemSettings() {
    const s = scene();
    const container = document.getElementById('zoneItemSettings');
    let html = '';

    if (s.zones.dock) {
        html += `<div class="row"><label style="width:auto;">Dock spawns</label>
            <select id="dockSpawnItem" style="flex:1;">${itemOptionsHtml(s.zones.dock.spawnItem || 'box')}</select></div>`;
    }
    if (s.zones.machine) {
        html += `<div class="row"><label style="width:auto;">Machine in</label>
            <select id="machineInputItem" style="flex:1;">${itemOptionsHtml(s.zones.machine.inputItem || 'box')}</select></div>`;
        html += `<div class="row"><label style="width:auto;">Machine out</label>
            <select id="machineOutputItem" style="flex:1;">${itemOptionsHtml(s.zones.machine.outputItem || 'cheese')}</select></div>`;
    }
    if (s.zones.counter) {
        html += `<div class="row"><label style="width:auto;">Counter wants</label>
            <select id="counterAcceptItem" style="flex:1;">${itemOptionsHtml(s.zones.counter.acceptItem || 'cheese')}</select></div>`;
    }
    if (!html) html = '<p class="hint">Place a Dock, Machine, or Counter zone in this scene to configure what items they use.</p>';
    container.innerHTML = html;

    if (s.zones.dock) {
        document.getElementById('dockSpawnItem').addEventListener('change', (e) => {
            s.zones.dock.spawnItem = e.target.value;
            updateOutput();
        });
    }
    if (s.zones.machine) {
        document.getElementById('machineInputItem').addEventListener('change', (e) => {
            s.zones.machine.inputItem = e.target.value;
            updateOutput();
        });
        document.getElementById('machineOutputItem').addEventListener('change', (e) => {
            s.zones.machine.outputItem = e.target.value;
            updateOutput();
        });
    }
    if (s.zones.counter) {
        document.getElementById('counterAcceptItem').addEventListener('change', (e) => {
            s.zones.counter.acceptItem = e.target.value;
            updateOutput();
        });
    }
}

// --- NPCs -----------------------------------------------------------------
function findNpcAt(x, y) {
    const npcs = scene().npcs || [];
    for (let i = 0; i < npcs.length; i++) {
        if (Math.hypot(npcs[i].x - x, npcs[i].y - y) <= (npcs[i].radius || 20)) return i;
    }
    return -1;
}

function renderNpcList() {
    const container = document.getElementById('npcList');
    const npcs = scene().npcs || [];
    if (!npcs.length) {
        container.innerHTML = '<p class="hint">No NPCs in this scene yet.</p>';
        return;
    }
    container.innerHTML = '';
    npcs.forEach((n, i) => {
        const row = document.createElement('div');
        row.className = 'npc-item';
        row.innerHTML = `<span>${n.name} (${n.lines.length} line${n.lines.length === 1 ? '' : 's'})</span><button>&times;</button>`;
        row.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            openNpcEditor(i);
        });
        row.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            npcs.splice(i, 1);
            renderNpcList();
            drawAll();
            updateOutput();
        });
        container.appendChild(row);
    });
}

function openNpcEditor(index, x, y) {
    editingNpcIndex = index;
    const panel = document.getElementById('npcPanel');
    panel.classList.add('open');
    if (index !== null && index !== undefined) {
        const n = scene().npcs[index];
        document.getElementById('npcName').value = n.name;
        document.getElementById('npcColor').value = n.color;
        document.getElementById('npcLines').value = (n.lines || []).join('\n');
        document.getElementById('npcX').value = Math.round(n.x);
        document.getElementById('npcY').value = Math.round(n.y);
        document.getElementById('npcDeleteBtn').style.display = 'inline-block';
    } else {
        document.getElementById('npcName').value = 'Villager';
        document.getElementById('npcColor').value = '#9b59b6';
        document.getElementById('npcLines').value = 'Hello there!';
        document.getElementById('npcX').value = Math.round(x);
        document.getElementById('npcY').value = Math.round(y);
        document.getElementById('npcDeleteBtn').style.display = 'none';
    }
}

function closeNpcPanel() {
    editingNpcIndex = null;
    document.getElementById('npcPanel').classList.remove('open');
}

document.getElementById('npcSaveBtn').addEventListener('click', () => {
    const name = document.getElementById('npcName').value.trim() || 'NPC';
    const color = document.getElementById('npcColor').value;
    const lines = document.getElementById('npcLines').value.split('\n').map(l => l.trim()).filter(l => l.length);
    const x = parseFloat(document.getElementById('npcX').value) || 0;
    const y = parseFloat(document.getElementById('npcY').value) || 0;
    if (!lines.length) lines.push('...');
    const npc = { x, y, radius: 20, color, name, lines };

    const s = scene();
    s.npcs = s.npcs || [];
    if (editingNpcIndex !== null) s.npcs[editingNpcIndex] = npc;
    else s.npcs.push(npc);

    closeNpcPanel();
    renderNpcList();
    drawAll();
    updateOutput();
});

document.getElementById('npcCancelBtn').addEventListener('click', () => {
    closeNpcPanel();
    drawAll();
});

document.getElementById('npcDeleteBtn').addEventListener('click', () => {
    if (editingNpcIndex !== null) {
        scene().npcs.splice(editingNpcIndex, 1);
    }
    closeNpcPanel();
    renderNpcList();
    drawAll();
    updateOutput();
});

// --- Tool buttons ---------------------------------------------------------
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (pickingSpawn) return;
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentTool = e.target.getAttribute('data-tool');
    });
});

document.getElementById('undoBtn').addEventListener('click', () => {
    scene().walls.pop();
    updateOutput();
    drawAll();
});

document.getElementById('clearBtn').addEventListener('click', () => {
    const s = scene();
    s.walls = [];
    s.doors = [];
    s.zones = {};
    s.npcs = [];
    updateOutput();
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
});

// --- Scene management -------------------------------------------------------
document.getElementById('sceneSelect').addEventListener('change', (e) => {
    currentSceneName = e.target.value;
    resizeCanvasToScene();
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
});

document.getElementById('newSceneBtn').addEventListener('click', () => {
    let name = prompt('New scene name (e.g. "backroom", "outside"):');
    if (!name) return;
    name = name.trim();
    if (!name || scenes[name]) { alert('Enter a unique, non-empty scene name.'); return; }
    const w = parseInt(prompt('Scene width (in pixels):', '800'), 10) || 800;
    const h = parseInt(prompt('Scene height (in pixels):', '600'), 10) || 600;
    scenes[name] = { width: w, height: h, background: '#7494B0', zones: {}, walls: [], doors: [], npcs: [] };
    currentSceneName = name;
    populateSceneSelect();
    resizeCanvasToScene();
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
    updateOutput();
});

document.getElementById('deleteSceneBtn').addEventListener('click', () => {
    const names = Object.keys(scenes);
    if (names.length <= 1) { alert("Can't delete the only scene."); return; }
    if (!confirm(`Delete scene "${currentSceneName}"? Doors pointing to it will also be removed.`)) return;
    const removed = currentSceneName;
    delete scenes[removed];
    for (const key in scenes) {
        scenes[key].doors = scenes[key].doors.filter(d => d.target !== removed);
    }
    if (startScene === removed) {
        startScene = Object.keys(scenes)[0];
        startSpawn = { x: 100, y: 100 };
        document.getElementById('startX').value = startSpawn.x;
        document.getElementById('startY').value = startSpawn.y;
    }
    currentSceneName = Object.keys(scenes)[0];
    populateSceneSelect();
    resizeCanvasToScene();
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
    updateOutput();
});

document.getElementById('applySceneBtn').addEventListener('click', () => {
    const s = scene();
    s.width = Math.max(200, parseInt(document.getElementById('sceneWidth').value, 10) || s.width);
    s.height = Math.max(200, parseInt(document.getElementById('sceneHeight').value, 10) || s.height);
    s.background = document.getElementById('sceneBg').value;
    resizeCanvasToScene();
    drawAll();
    updateOutput();
});

document.getElementById('startSceneSelect').addEventListener('change', (e) => {
    startScene = e.target.value;
    updateOutput();
});
document.getElementById('startX').addEventListener('input', (e) => {
    startSpawn.x = parseInt(e.target.value, 10) || 0;
    updateOutput();
});
document.getElementById('startY').addEventListener('input', (e) => {
    startSpawn.y = parseInt(e.target.value, 10) || 0;
    updateOutput();
});

// --- Door linking panel -----------------------------------------------------
document.getElementById('pickSpawnBtn').addEventListener('click', () => {
    const target = document.getElementById('doorTarget').value;
    if (!target) { alert('No other scene to link to yet - create one first.'); return; }
    pickingSpawn = { sourceScene: currentSceneName, door: { ...pendingDoor, target } };
    pendingDoor = null;
    document.getElementById('doorPanel').classList.remove('open');
    enableControls(false);
    currentSceneName = target;
    populateSceneSelect();
    resizeCanvasToScene();
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
    document.getElementById('pickBanner').classList.add('show');
});

document.getElementById('cancelDoorBtn').addEventListener('click', () => {
    pendingDoor = null;
    document.getElementById('doorPanel').classList.remove('open');
    drawAll();
});

function finalizeDoorSpawn(x, y) {
    const source = pickingSpawn.sourceScene;
    const door = { ...pickingSpawn.door, spawnX: Math.round(x), spawnY: Math.round(y) };
    scenes[source].doors.push(door);
    pickingSpawn = null;
    document.getElementById('pickBanner').classList.remove('show');
    currentSceneName = source;
    populateSceneSelect();
    resizeCanvasToScene();
    enableControls(true);
    drawAll();
    renderDoorList();
    renderZoneItemSettings();
    renderNpcList();
    updateOutput();
}

// --- Mouse drawing logic ------------------------------------------------
canvas.addEventListener('mousedown', (e) => {
    const { x, y } = getCanvasPos(e);
    if (pickingSpawn) {
        finalizeDoorSpawn(x, y);
        return;
    }
    if (pendingDoor) return; // resolve or cancel the pending door first
    if (currentTool === 'npc') {
        const idx = findNpcAt(x, y);
        if (idx !== -1) openNpcEditor(idx);
        else openNpcEditor(null, x, y);
        return;
    }
    isDrawing = true;
    startX = x; startY = y; currentX = x; currentY = y;
});

canvas.addEventListener('mousemove', (e) => {
    const { x, y } = getCanvasPos(e);
    lastMouseX = x; lastMouseY = y;
    if (pickingSpawn) {
        drawAll();
        drawSpawnPreview(x, y);
        return;
    }
    if (!isDrawing) return;
    currentX = x; currentY = y;
    drawAll();
    drawPreview();
});

canvas.addEventListener('mouseup', () => {
    if (pickingSpawn) return; // handled on mousedown
    if (!isDrawing) return;
    isDrawing = false;

    const x = Math.min(startX, currentX);
    const y = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    if (width < 10 || height < 10) {
        drawAll();
        return;
    }

    if (currentTool === 'wall' || currentTool === 'decor') {
        const color = document.getElementById('wallColor').value || '#555555';
        scene().walls.push({ x, y, width, height, color, solid: currentTool === 'wall' });
    } else if (currentTool === 'door') {
        pendingDoor = { x, y, width, height };
        populateDoorTargetSelect();
        document.getElementById('doorPanel').classList.add('open');
        drawAll();
        return; // wait for the target scene / spawn point before saving
    } else {
        const s = scene();
        const existing = s.zones[currentTool];
        const solid = currentTool !== 'dock';
        const zoneObj = { x, y, width, height, solid };
        if (currentTool === 'dock') zoneObj.spawnItem = (existing && existing.spawnItem) || 'box';
        if (currentTool === 'machine') {
            zoneObj.inputItem = (existing && existing.inputItem) || 'box';
            zoneObj.outputItem = (existing && existing.outputItem) || 'cheese';
        }
        if (currentTool === 'counter') zoneObj.acceptItem = (existing && existing.acceptItem) || 'cheese';
        s.zones[currentTool] = zoneObj;
        renderZoneItemSettings();
    }

    updateOutput();
    drawAll();
});

// --- Rendering --------------------------------------------------------------
function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    const r = (bigint >> 16) & 255, g = (bigint >> 8) & 255, b = bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
}

function drawRect(x, y, w, h, fillStyle, strokeStyle, label) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
    if (label) {
        ctx.fillStyle = strokeStyle;
        ctx.font = '14px sans-serif';
        ctx.fillText(label, x + 6, y + 18);
    }
}

function zoneStyleFor(name) {
    if (name === 'counter') return { fill: '#95a5a6', stroke: '#7f8c8d' };
    if (name === 'machine') return { fill: '#34495e', stroke: '#2c3e50' };
    if (name === 'dock') return { fill: 'rgba(0,0,0,0.1)', stroke: '#bdc3c7' };
    return { fill: 'rgba(241,196,15,0.15)', stroke: '#f1c40f' };
}

function drawAll() {
    const s = scene();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = s.background || '#7494B0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const w of s.walls) {
        if (w.solid === false) ctx.setLineDash([6, 4]);
        drawRect(w.x, w.y, w.width, w.height, w.color || '#555555', w.solid === false ? '#f1c40f' : '#333', '');
        ctx.setLineDash([]);
    }

    for (const name in s.zones) {
        const z = s.zones[name];
        const style = zoneStyleFor(name);
        drawRect(z.x, z.y, z.width, z.height, style.fill, style.stroke, name.toUpperCase());
    }

    for (const d of s.doors) {
        drawRect(d.x, d.y, d.width, d.height, 'rgba(230,126,34,0.35)', '#e67e22', 'DOOR \u2192 ' + d.target);
    }

    if (pendingDoor) {
        drawRect(pendingDoor.x, pendingDoor.y, pendingDoor.width, pendingDoor.height,
            'rgba(230,126,34,0.5)', '#e67e22', 'DOOR (pick target \u2192)');
    }

    for (const n of (s.npcs || [])) {
        ctx.fillStyle = n.color || '#9b59b6';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius || 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.name, n.x, n.y - (n.radius || 20) - 6);
        ctx.textAlign = 'left';
    }
}

function drawPreview() {
    const x = Math.min(startX, currentX);
    const y = Math.min(startY, currentY);
    const w = Math.abs(currentX - startX);
    const h = Math.abs(currentY - startY);

    ctx.save();
    ctx.setLineDash([5, 5]);
    if (currentTool === 'wall') drawRect(x, y, w, h, 'rgba(85, 85, 85, 0.5)', '#333');
    if (currentTool === 'decor') {
        const color = document.getElementById('wallColor').value || '#555555';
        drawRect(x, y, w, h, hexToRgba(color, 0.5), color);
    }
    if (currentTool === 'counter') drawRect(x, y, w, h, 'rgba(149, 165, 166, 0.5)', '#7f8c8d');
    if (currentTool === 'machine') drawRect(x, y, w, h, 'rgba(52, 73, 94, 0.5)', '#2c3e50');
    if (currentTool === 'dock') drawRect(x, y, w, h, 'rgba(189, 195, 199, 0.3)', '#bdc3c7');
    if (currentTool === 'door') drawRect(x, y, w, h, 'rgba(230, 126, 34, 0.4)', '#e67e22');
    ctx.restore();
}

function drawSpawnPreview(x, y) {
    ctx.save();
    ctx.strokeStyle = '#2ecc71';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 26, y); ctx.lineTo(x + 26, y); ctx.moveTo(x, y - 26); ctx.lineTo(x, y + 26); ctx.stroke();
    ctx.fillStyle = '#2ecc71';
    ctx.font = '12px sans-serif';
    ctx.fillText('SPAWN HERE', x + 24, y - 20);
    ctx.restore();
}

// Generate the code to be copied
function updateOutput() {
    const obj = { startScene, startSpawn, itemTypes, scenes };
    outputCode.value = "// map.js\nconst mapConfig = " + JSON.stringify(obj, null, 4) + ";\n";
}

document.getElementById('copyBtn').addEventListener('click', () => {
    const btn = document.getElementById('copyBtn');
    const original = btn.textContent;
    navigator.clipboard.writeText(outputCode.value).then(() => {
        btn.textContent = '\u2705 Copied!';
        setTimeout(() => btn.textContent = original, 1200);
    }).catch(() => {
        outputCode.select();
        document.execCommand('copy');
        btn.textContent = '\u2705 Copied!';
        setTimeout(() => btn.textContent = original, 1200);
    });
});

// --- Import a level ----------------------------------------------------------
document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { document.getElementById('importText').value = reader.result; };
    reader.readAsText(file);
});

document.getElementById('importBtn').addEventListener('click', () => {
    const raw = document.getElementById('importText').value;
    const start = raw.indexOf('{');
    const end = raw.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) {
        alert('Could not find a level object in the pasted/loaded text.');
        return;
    }
    let parsed;
    try {
        parsed = JSON.parse(raw.slice(start, end + 1));
    } catch (err) {
        alert('Failed to parse level code: ' + err.message);
        return;
    }
    if (!parsed.scenes || Object.keys(parsed.scenes).length === 0) {
        alert('No scenes found in the imported data.');
        return;
    }

    // Fill in defaults for anything an older export might be missing
    for (const key in parsed.scenes) {
        const s = parsed.scenes[key];
        s.zones = s.zones || {};
        s.doors = s.doors || [];
        s.npcs = s.npcs || [];
        s.background = s.background || '#7494B0';
        s.width = s.width || 800;
        s.height = s.height || 600;
        s.walls = (s.walls || []).map(w => ({ color: '#555555', solid: true, ...w }));
        if (s.zones.dock) s.zones.dock.spawnItem = s.zones.dock.spawnItem || 'box';
        if (s.zones.machine) {
            s.zones.machine.inputItem = s.zones.machine.inputItem || 'box';
            s.zones.machine.outputItem = s.zones.machine.outputItem || 'cheese';
        }
        if (s.zones.counter) s.zones.counter.acceptItem = s.zones.counter.acceptItem || 'cheese';
    }

    itemTypes = parsed.itemTypes || itemTypes;
    itemTypes.box = itemTypes.box || { name: 'Box', color: '#8B4513', shape: 'square' };
    itemTypes.cheese = itemTypes.cheese || { name: 'Cheese', color: '#f1c40f', shape: 'triangle' };

    scenes = parsed.scenes;
    startScene = (parsed.startScene && scenes[parsed.startScene]) ? parsed.startScene : Object.keys(scenes)[0];
    startSpawn = parsed.startSpawn || { x: 100, y: 100 };
    currentSceneName = startScene;

    populateSceneSelect();
    resizeCanvasToScene();
    document.getElementById('startX').value = startSpawn.x;
    document.getElementById('startY').value = startSpawn.y;
    drawAll();
    renderDoorList();
    renderItemTypeList();
    renderZoneItemSettings();
    renderNpcList();
    updateOutput();
    alert('Level imported successfully.');
});

// --- Initial draw ------------------------------------------------------------
populateSceneSelect();
resizeCanvasToScene();
document.getElementById('startX').value = startSpawn.x;
document.getElementById('startY').value = startSpawn.y;
updateOutput();
drawAll();
renderDoorList();
renderItemTypeList();
renderZoneItemSettings();
renderNpcList();
