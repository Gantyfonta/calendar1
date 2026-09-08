// map.js
//
// A "scene" is one self-contained room/area: it has a size, a background
// color, named work zones (counter/machine/dock), walls, doors that send
// the player to another scene at a specific spawn point, and dropped
// items (boxes/cheese) tagged with the scene they belong to.
//
// Each entry in "walls" is either a real solid wall (solid: true, blocks
// the player) or a decor object (solid: false, purely visual detail with
// no collision) - both support a custom "color".
//
// Paste output from editor.html here to update the world.
const mapConfig = {
    "startScene": "factory",
    "startSpawn": { "x": 400, "y": 500 },
    "scenes": {
        "factory": {
            "width": 800,
            "height": 600,
            "background": "#7494B0",
            "zones": {
                "counter": { "x": 340, "y": 20, "width": 120, "height": 80, "solid": true },
                "machine": { "x": 600, "y": 240, "width": 120, "height": 120, "solid": true },
                "dock": { "x": 30, "y": 420, "width": 150, "height": 150, "solid": false }
            },
            "walls": [
                { "x": 54.453125, "y": 312, "width": 357, "height": 68, "color": "#555555", "solid": true },
                { "x": 308.453125, "y": 384, "width": 107, "height": 171, "color": "#555555", "solid": true }
            ],
            "doors": [
                { "x": 780, "y": 260, "width": 20, "height": 80, "target": "outside", "spawnX": 100, "spawnY": 600 }
            ]
        },
        "outside": {
            "width": 1600,
            "height": 1200,
            "background": "#4a7c3f",
            "zones": {},
            "walls": [
                { "x": 500, "y": 300, "width": 60, "height": 60, "color": "#555555", "solid": true },
                { "x": 900, "y": 700, "width": 80, "height": 80, "color": "#555555", "solid": true },
                { "x": 1200, "y": 250, "width": 50, "height": 50, "color": "#555555", "solid": true },
                { "x": 700, "y": 900, "width": 200, "height": 40, "color": "#555555", "solid": true },
                { "x": 100, "y": 640, "width": 250, "height": 24, "color": "#8e6b3f", "solid": false }
            ],
            "doors": [
                { "x": 20, "y": 560, "width": 20, "height": 80, "target": "factory", "spawnX": 750, "spawnY": 300 }
            ]
        }
    }
};
