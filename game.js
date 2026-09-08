const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Input state
const keys = { w: false, a: false, s: false, d: false, space: false, e: false };
const mouse = { screenX: canvas.width / 2, screenY: canvas.height / 2 };
let spaceWasDown = false;
let eWasDown = false;

// Dialogue state - active while an NPC conversation is open. Movement and
// item interaction pause while this is true.
const dialogue = { active: false, npc: null, lineIndex: 0 };

// --- Scene / world state ---------------------------------------------
// `scene` is always mapConfig.scenes[currentSceneKey]. Switching scenes
// (via a door) just swaps this reference and moves the player.
let currentSceneKey = mapConfig.startScene;
let scene = mapConfig.scenes[currentSceneKey];

// Camera is the world-space top-left corner of what's drawn on screen.
// For scenes no bigger than the canvas it just sits at (0,0), same as
// the original game. For bigger (open-world) scenes it follows the player.
const camera = { x: 0, y: 0 };

function updateCamera() {
    const maxX = Math.max(0, scene.width - canvas.width);
    const maxY = Math.max(0, scene.height - canvas.height);
    camera.x = Math.min(maxX, Math.max(0, player.x - canvas.width / 2));
    camera.y = Math.min(maxY, Math.max(0, player.y - canvas.height / 2));
}

// Move the player into a different scene through a door.
function enterScene(key, spawnX, spawnY) {
    currentSceneKey = key;
    scene = mapConfig.scenes[key];
    player.x = spawnX;
    player.y = spawnY;
    updateCamera();
}

// Player setup
const player = {
    x: mapConfig.startSpawn.x,
    y: mapConfig.startSpawn.y,
    radius: 20,
    handRadius: 8,
    speed: 5,
    angle: 0,
    heldItem: null
};
updateCamera();

// Item sizing
const itemSize = 24;
const holdDist = player.radius + (itemSize / 2) + 2;

// The array to hold all items (both boxes and cheese) - these live in the
// factory's world space; they simply aren't drawn/updated while you're
// off in another scene.
const items = [];

// Customer setup - only relevant in scenes that define a counter zone.
const customer = {
    x: 0,
    y: 0,
    radius: 20,
    speed: 2,
    state: 'walking_in'
};

// Helper to spawn a new item in the (factory) dock zone
function spawnBox() {
    const dock = mapConfig.scenes.factory.zones.dock;
    if (!dock) return;
    items.push({
        x: dock.x + 20 + Math.random() * (dock.width - 40),
        y: dock.y + 20 + Math.random() * (dock.height - 40),
        type: dock.spawnItem || 'box',
        scene: 'factory' // which scene this item currently sits in
    });
}

// Reset the customer to just off-screen (to the right) of the factory's counter
function resetCustomer() {
    const counter = mapConfig.scenes.factory.zones.counter;
    if (!counter) return;
    customer.x = mapConfig.scenes.factory.width + 50;
    customer.y = counter.y + counter.height / 2;
    customer.state = 'walking_in';
}
resetCustomer();

// Spawn 3 initial boxes
for (let i = 0; i < 3; i++) {
    spawnBox();
}

// Event Listeners
window.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = true;
    if (e.key === 'a' || e.key === 'A') keys.a = true;
    if (e.key === 's' || e.key === 'S') keys.s = true;
    if (e.key === 'd' || e.key === 'D') keys.d = true;
    if (e.key === ' ') keys.space = true;
    if (e.key === 'e' || e.key === 'E') keys.e = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'W') keys.w = false;
    if (e.key === 'a' || e.key === 'A') keys.a = false;
    if (e.key === 's' || e.key === 'S') keys.s = false;
    if (e.key === 'd' || e.key === 'D') keys.d = false;
    if (e.key === ' ') keys.space = false;
    if (e.key === 'e' || e.key === 'E') keys.e = false;
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.screenX = e.clientX - rect.left;
    mouse.screenY = e.clientY - rect.top;
});

// Check if a point is inside a zone rectangle
function isInsideZone(x, y, zone) {
    return (x >= zone.x && x <= zone.x + zone.width && y >= zone.y && y <= zone.y + zone.height);
}

// Check if a circle (the player) overlaps a rectangle (a door trigger)
function circleRectOverlap(cx, cy, r, rect) {
    const closestX = Math.max(rect.x, Math.min(cx, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(cy, rect.y + rect.height));
    const dx = cx - closestX;
    const dy = cy - closestY;
    return (dx * dx + dy * dy) < (r * r);
}

// All the solid things in the current scene the player can't walk through
// (decor objects have solid:false and are visual-only, so they're excluded)
function getSolids() {
    const zoneSolids = Object.values(scene.zones || {}).filter(z => z.solid);
    const solidWalls = (scene.walls || []).filter(w => w.solid !== false);
    return [...solidWalls, ...zoneSolids];
}

function checkDoors() {
    for (const door of (scene.doors || [])) {
        if (circleRectOverlap(player.x, player.y, player.radius, door)) {
            enterScene(door.target, door.spawnX, door.spawnY);
            return true;
        }
    }
    return false;
}

// Find the closest NPC in the current scene the player is standing near
// enough to talk to (or null if none are in range).
function getNearbyNpc() {
    let closest = null;
    let closestDist = Infinity;
    for (const npc of (scene.npcs || [])) {
        const dist = Math.hypot(player.x - npc.x, player.y - npc.y);
        const range = player.radius + (npc.radius || 20) + 15;
        if (dist < range && dist < closestDist) {
            closest = npc;
            closestDist = dist;
        }
    }
    return closest;
}

function openDialogue(npc) {
    dialogue.active = true;
    dialogue.npc = npc;
    dialogue.lineIndex = 0;
    renderDialogueBox();
    updateInteractPrompt();
}

function closeDialogue() {
    dialogue.active = false;
    dialogue.npc = null;
    hideDialogueBox();
}

function renderDialogueBox() {
    const box = document.getElementById('dialogueBox');
    if (!box || !dialogue.npc) return;
    box.style.display = 'block';
    document.getElementById('dialogueName').textContent = dialogue.npc.name;
    document.getElementById('dialogueText').textContent = dialogue.npc.lines[dialogue.lineIndex] || '...';
}

function hideDialogueBox() {
    const box = document.getElementById('dialogueBox');
    if (box) box.style.display = 'none';
}

function updateInteractPrompt() {
    const el = document.getElementById('interactPrompt');
    if (!el) return;
    if (dialogue.active) { el.style.display = 'none'; return; }
    const npc = getNearbyNpc();
    if (npc) {
        el.textContent = 'Press E to talk to ' + npc.name;
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

function update() {
    // E key: advance/close an open conversation, or start one with a nearby NPC
    if (keys.e && !eWasDown) {
        if (dialogue.active) {
            dialogue.lineIndex++;
            if (dialogue.lineIndex >= dialogue.npc.lines.length) {
                closeDialogue();
            } else {
                renderDialogueBox();
            }
        } else {
            const npc = getNearbyNpc();
            if (npc) openDialogue(npc);
        }
    }
    eWasDown = keys.e;

    if (dialogue.active) {
        return; // pause movement / items / doors while a conversation is open
    }
    updateInteractPrompt();

    const counterZone = scene.zones && scene.zones.counter;
    const machineZone = scene.zones && scene.zones.machine;

    // 1. Customer Logic (only matters in a scene with a counter)
    if (counterZone) {
        if (customer.state === 'walking_in') {
            customer.x -= customer.speed;
            const targetX = counterZone.x + counterZone.width / 2 + 40;
            if (customer.x <= targetX) {
                customer.x = targetX;
                customer.state = 'waiting';
            }
        } else if (customer.state === 'walking_out') {
            customer.x -= customer.speed;
            if (customer.x < -50) {
                resetCustomer();
            }
        }
    }

    // 2. 8-Axis Movement
    let dx = 0; let dy = 0;
    if (keys.w) dy -= 1;
    if (keys.s) dy += 1;
    if (keys.a) dx -= 1;
    if (keys.d) dx += 1;

    if (dx !== 0 && dy !== 0) {
        const length = Math.sqrt(dx * dx + dy * dy);
        dx /= length; dy /= length;
    }

    let nextX = player.x + (dx * player.speed);
    let nextY = player.y + (dy * player.speed);

    // 3. Wall/Object Collision (Simple AABB)
    let collideX = false;
    let collideY = false;

    const solids = getSolids();
    for (let solid of solids) {
        if (nextY - player.radius < solid.y + solid.height && nextY + player.radius > solid.y &&
            player.x + player.radius > solid.x && player.x - player.radius < solid.x + solid.width) {
            collideY = true;
        }
        if (player.y - player.radius < solid.y + solid.height && player.y + player.radius > solid.y &&
            nextX + player.radius > solid.x && nextX - player.radius < solid.x + solid.width) {
            collideX = true;
        }
    }

    if (!collideX) player.x = nextX;
    if (!collideY) player.y = nextY;

    // Scene bounds (works for a small room or a big open-world scene)
    player.x = Math.max(player.radius, Math.min(scene.width - player.radius, player.x));
    player.y = Math.max(player.radius, Math.min(scene.height - player.radius, player.y));

    updateCamera();

    // 4. Doors - walking into one switches scenes immediately
    if (checkDoors()) return; // scene changed, skip the rest of this frame

    // 5. Aiming (convert screen-space mouse to world space using the
    // current camera position, so aim stays correct while scrolling)
    const worldMouseX = mouse.screenX + camera.x;
    const worldMouseY = mouse.screenY + camera.y;
    player.angle = Math.atan2(worldMouseY - player.y, worldMouseX - player.x);

    // 6. Pickup / Drop Logic
    if (keys.space && !spaceWasDown) {
        if (player.heldItem !== null) {
            // Drop it - it stays in the scene you're standing in right now
            player.heldItem.scene = currentSceneKey;
            player.heldItem = null;
        } else {
            // Pick up
            const reachX = player.x + Math.cos(player.angle) * holdDist;
            const reachY = player.y + Math.sin(player.angle) * holdDist;

            let closestItem = null;
            let closestDist = Infinity;

            for (let item of items) {
                if (item === player.heldItem) continue;
                if (item.scene !== currentSceneKey) continue; // can't reach items in another scene
                const dist = Math.hypot(item.x - reachX, item.y - reachY);
                if (dist < 40 && dist < closestDist) {
                    closestDist = dist;
                    closestItem = item;
                }
            }
            if (closestItem) {
                player.heldItem = closestItem;
            }
        }
    }
    spaceWasDown = keys.space;

    // 7. Update held item position
    if (player.heldItem !== null) {
        player.heldItem.x = player.x + Math.cos(player.angle) * holdDist;
        player.heldItem.y = player.y + Math.sin(player.angle) * holdDist;
    }

    // 8. World Interaction Logic (Machine & Counter) - only if this scene has them
    for (let i = items.length - 1; i >= 0; i--) {
        let item = items[i];
        if (item === player.heldItem) continue; // Only process dropped items
        if (item.scene !== currentSceneKey) continue; // it belongs to a different scene

        // Machine Logic: Turn the machine's input item into its output item
        if (machineZone && item.type === (machineZone.inputItem || 'box') && isInsideZone(item.x, item.y, machineZone)) {
            item.type = machineZone.outputItem || 'cheese'; // Ding! It's transformed now.
        }

        // Counter Logic: Give the counter's accepted item to the customer
        if (counterZone && item.type === (counterZone.acceptItem || 'cheese') && isInsideZone(item.x, item.y, counterZone) && customer.state === 'waiting') {
            items.splice(i, 1); // Remove the item
            customer.state = 'walking_out'; // Customer leaves happy

            // Order a new item to arrive at the dock
            setTimeout(spawnBox, 1000);
        }
    }
}

// Darken/lighten a hex color by `amt` (negative = darker) for outlines
function shadeColor(hex, amt) {
    const h = (hex || '#999999').replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const num = parseInt(full, 16) || 0x999999;
    const r = Math.min(255, Math.max(0, ((num >> 16) & 255) + amt));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 255) + amt));
    const b = Math.min(255, Math.max(0, (num & 255) + amt));
    return `rgb(${r},${g},${b})`;
}

function drawItem(ctx, item, x, y) {
    ctx.save();
    ctx.translate(x, y);
    if (item.type === 'box') {
        // Draw Brown Box
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(-itemSize / 2, -itemSize / 2, itemSize, itemSize);
        ctx.strokeStyle = '#5c2d0b';
        ctx.lineWidth = 2;
        ctx.strokeRect(-itemSize / 2, -itemSize / 2, itemSize, itemSize);
    } else if (item.type === 'cheese') {
        // Draw Yellow Cheese Triangle
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.moveTo(-itemSize / 2, itemSize / 2);
        ctx.lineTo(itemSize / 2, itemSize / 2);
        ctx.lineTo(0, -itemSize / 2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#f39c12';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add a couple cheese holes
        ctx.fillStyle = '#e67e22';
        ctx.beginPath(); ctx.arc(0, 5, 3, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(-5, 0, 2, 0, Math.PI * 2); ctx.fill();
    } else {
        // Custom item type defined in the editor: draw by its configured
        // color + shape (square / circle / triangle).
        const def = (mapConfig.itemTypes && mapConfig.itemTypes[item.type]) || { color: '#999999', shape: 'square' };
        ctx.fillStyle = def.color;
        ctx.strokeStyle = shadeColor(def.color, -50);
        ctx.lineWidth = 2;
        if (def.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, itemSize / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if (def.shape === 'triangle') {
            ctx.beginPath();
            ctx.moveTo(-itemSize / 2, itemSize / 2);
            ctx.lineTo(itemSize / 2, itemSize / 2);
            ctx.lineTo(0, -itemSize / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else {
            ctx.fillRect(-itemSize / 2, -itemSize / 2, itemSize, itemSize);
            ctx.strokeRect(-itemSize / 2, -itemSize / 2, itemSize, itemSize);
        }
    }
    ctx.restore();
}

function zoneStyle(name) {
    if (name === 'counter') return { fill: '#95a5a6', stroke: '#7f8c8d', dashed: false };
    if (name === 'machine') return { fill: '#34495e', stroke: '#2c3e50', textFill: '#ecf0f1', dashed: false };
    if (name === 'dock') return { fill: 'rgba(255,255,255,0.1)', stroke: '#bdc3c7', dashed: true };
    return { fill: 'rgba(241,196,15,0.15)', stroke: '#f1c40f', dashed: false };
}

function drawZones() {
    for (const name in (scene.zones || {})) {
        const z = scene.zones[name];
        const style = zoneStyle(name);
        ctx.fillStyle = style.fill;
        if (style.dashed) ctx.setLineDash([10, 5]);
        ctx.fillRect(z.x, z.y, z.width, z.height);
        ctx.strokeStyle = style.stroke;
        ctx.lineWidth = style.dashed ? 3 : 4;
        ctx.strokeRect(z.x, z.y, z.width, z.height);
        ctx.setLineDash([]);
        ctx.fillStyle = style.textFill || style.stroke;
        ctx.font = '16px sans-serif';
        ctx.fillText(name.toUpperCase(), z.x + 10, z.y + 25);
    }
}

function drawWalls() {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    for (const w of (scene.walls || [])) {
        ctx.fillStyle = w.color || '#555';
        ctx.fillRect(w.x, w.y, w.width, w.height);
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }
}

function drawDoors() {
    for (const d of (scene.doors || [])) {
        ctx.fillStyle = 'rgba(230,126,34,0.35)';
        ctx.fillRect(d.x, d.y, d.width, d.height);
        ctx.strokeStyle = '#e67e22';
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 3;
        ctx.strokeRect(d.x, d.y, d.width, d.height);
        ctx.setLineDash([]);
        ctx.fillStyle = '#e67e22';
        ctx.font = '12px sans-serif';
        ctx.fillText('DOOR \u2192 ' + d.target, d.x, d.y - 6);
    }
}

function draw() {
    // Flat background fill behind the scrolled world
    ctx.fillStyle = scene.background || '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(-camera.x, -camera.y);

    drawWalls();
    drawZones();
    drawDoors();

    const counterZone = scene.zones && scene.zones.counter;
    if (counterZone) {
        // Draw Customer
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.arc(customer.x, customer.y, customer.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#c0392b';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    // Draw NPCs
    for (const npc of (scene.npcs || [])) {
        ctx.fillStyle = npc.color || '#9b59b6';
        ctx.beginPath();
        ctx.arc(npc.x, npc.y, npc.radius || 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(npc.name, npc.x, npc.y - (npc.radius || 20) - 8);
        ctx.textAlign = 'left';
    }

    // Draw loose items (only the ones that belong to this scene)
    for (let item of items) {
        if (item !== player.heldItem && item.scene === currentSceneKey) {
            drawItem(ctx, item, item.x, item.y);
        }
    }

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.angle);

    // Held item (draw before body so it sits in hands)
    if (player.heldItem) {
        drawItem(ctx, player.heldItem, holdDist, 0);
    }

    // Player Body
    ctx.fillStyle = '#3498db';
    ctx.beginPath();
    ctx.arc(0, 0, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Hands
    ctx.fillStyle = '#f1c40f';
    ctx.beginPath(); ctx.arc(player.radius - 2, -16, player.handRadius, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); // Left
    ctx.beginPath(); ctx.arc(player.radius - 2, 16, player.handRadius, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); // Right

    ctx.restore(); // player

    ctx.restore(); // camera translate
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
