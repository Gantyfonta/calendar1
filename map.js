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
// map.js
// map.js
// map.js
// map.js
// map.js
const mapConfig = {
    "startScene": "factory",
    "startSpawn": {
        "x": 400,
        "y": 500
    },
    "itemTypes": {
        "box": {
            "name": "Box",
            "color": "#8B4513",
            "shape": "square"
        },
        "cheese": {
            "name": "Cheese",
            "color": "#f1c40f",
            "shape": "triangle"
        },
        "sugar": {
            "name": "Powder",
            "color": "#ffffff",
            "shape": "circle"
        },
        "sugar_2": {
            "name": "Sugar",
            "color": "#ffffff",
            "shape": "triangle"
        },
        "apple": {
            "name": "Apple",
            "color": "#ff0000",
            "shape": "circle"
        }
    },
    "scenes": {
        "factory": {
            "width": 800,
            "height": 600,
            "background": "#7494B0",
            "zones": {
                "counter": {
                    "x": 340,
                    "y": 20,
                    "width": 120,
                    "height": 80,
                    "solid": true,
                    "acceptItem": "cheese"
                },
                "machine": {
                    "x": 600,
                    "y": 240,
                    "width": 120,
                    "height": 120,
                    "solid": true,
                    "inputItem": "box",
                    "outputItem": "cheese"
                },
                "dock": {
                    "x": 30,
                    "y": 420,
                    "width": 150,
                    "height": 150,
                    "solid": false,
                    "spawnItem": "box"
                }
            },
            "doors": [
                {
                    "x": 780,
                    "y": 260,
                    "width": 20,
                    "height": 80,
                    "target": "outside",
                    "spawnX": 100,
                    "spawnY": 600
                },
                {
                    "x": 1.34716796875,
                    "y": 151,
                    "width": 18,
                    "height": 135,
                    "target": "backroom",
                    "spawnX": 725,
                    "spawnY": 341
                }
            ],
            "walls": [],
            "npcs": [
                {
                    "x": 100,
                    "y": 50,
                    "radius": 20,
                    "color": "#2990d1",
                    "name": "Supervisor",
                    "lines": [
                        "Get back to work!",
                        "These boxes ain't gonna unpack themselves."
                    ]
                }
            ]
        },
        "outside": {
            "width": 1600,
            "height": 1200,
            "background": "#4a7c3f",
            "zones": {},
            "walls": [
                {
                    "color": "#555555",
                    "solid": true,
                    "x": 3.347198486328125,
                    "y": 0,
                    "width": 34,
                    "height": 555
                },
                {
                    "color": "#555555",
                    "solid": true,
                    "x": -0.652801513671875,
                    "y": 641,
                    "width": 40,
                    "height": 553
                },
                {
                    "color": "#f7d145",
                    "solid": true,
                    "x": 235.34719848632812,
                    "y": 261,
                    "width": 254,
                    "height": 241
                },
                {
                    "color": "#816c22",
                    "solid": true,
                    "x": 188.34719848632812,
                    "y": 197,
                    "width": 345,
                    "height": 76
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 225,
                    "y": 470,
                    "width": 93,
                    "height": 40
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 402,
                    "y": 471,
                    "width": 95,
                    "height": 33
                },
                {
                    "color": "#5873f9",
                    "solid": true,
                    "x": 667,
                    "y": 287,
                    "width": 113,
                    "height": 230
                },
                {
                    "color": "#313a68",
                    "solid": true,
                    "x": 640,
                    "y": 266,
                    "width": 162,
                    "height": 42
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 634,
                    "y": 495,
                    "width": 52,
                    "height": 34
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 767,
                    "y": 495,
                    "width": 48,
                    "height": 28
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 41,
                    "y": 562,
                    "width": 880,
                    "height": 81
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 321,
                    "y": 504,
                    "width": 71,
                    "height": 59
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 700,
                    "y": 519,
                    "width": 52,
                    "height": 43
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 206,
                    "y": 633,
                    "width": 80,
                    "height": 348
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 274,
                    "y": 918,
                    "width": 311,
                    "height": 62
                },
                {
                    "color": "#9e9e9e",
                    "solid": true,
                    "x": 345,
                    "y": 690,
                    "width": 317,
                    "height": 215
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 325,
                    "y": 663,
                    "width": 366,
                    "height": 48
                }
            ],
            "doors": [
                {
                    "x": 20,
                    "y": 560,
                    "width": 20,
                    "height": 80,
                    "target": "factory",
                    "spawnX": 750,
                    "spawnY": 300
                },
                {
                    "x": 326.3471984863281,
                    "y": 408,
                    "width": 65,
                    "height": 99,
                    "target": "house1",
                    "spawnX": 397,
                    "spawnY": 725
                },
                {
                    "x": 699,
                    "y": 464,
                    "width": 50,
                    "height": 60,
                    "target": "house2",
                    "spawnX": 200,
                    "spawnY": 739
                }
            ],
            "npcs": [
                {
                    "x": 179,
                    "y": 477,
                    "radius": 20,
                    "color": "#52de4f",
                    "name": "Richard",
                    "lines": [
                        "Hey.",
                        "I've been busy sitting here forever.",
                        "I wish I"
                    ]
                }
            ]
        },
        "backroom": {
            "width": 800,
            "height": 600,
            "background": "#7494B0",
            "zones": {
                "dock": {
                    "x": 8.34716796875,
                    "y": 242,
                    "width": 110,
                    "height": 154,
                    "solid": false,
                    "spawnItem": "sugar"
                }
            },
            "walls": [
                {
                    "color": "#555555",
                    "solid": true,
                    "x": 0.34716796875,
                    "y": 1,
                    "width": 798,
                    "height": 131
                },
                {
                    "color": "#555555",
                    "solid": true,
                    "x": -0.65283203125,
                    "y": 463,
                    "width": 798,
                    "height": 135
                }
            ],
            "doors": [
                {
                    "x": 772.34716796875,
                    "y": 252,
                    "width": 21,
                    "height": 169,
                    "target": "factory",
                    "spawnX": 87,
                    "spawnY": 193
                }
            ],
            "npcs": [
                {
                    "x": 54,
                    "y": 182,
                    "radius": 20,
                    "color": "#3bba50",
                    "name": "Steve",
                    "lines": [
                        "Sup.",
                        "I was just chillin in the back room until you came and bothered me.",
                        "Scram."
                    ]
                }
            ]
        },
        "house1": {
            "width": 800,
            "height": 800,
            "background": "#f7d142",
            "zones": {},
            "walls": [
                {
                    "color": "#5194d2",
                    "solid": false,
                    "x": 327.34716796875,
                    "y": 491.99998474121094,
                    "width": 122,
                    "height": 190
                },
                {
                    "color": "#774318",
                    "solid": true,
                    "x": 592.34716796875,
                    "y": 120.99998474121094,
                    "width": 154,
                    "height": 100
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 535.34716796875,
                    "y": 147.99998474121094,
                    "width": 38,
                    "height": 36
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 616.34716796875,
                    "y": 247.99998474121094,
                    "width": 36,
                    "height": 37
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 695.34716796875,
                    "y": 250.99998474121094,
                    "width": 31,
                    "height": 31
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 755.34716796875,
                    "y": 153.99998474121094,
                    "width": 30,
                    "height": 32
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 611.34716796875,
                    "y": 79.99998474121094,
                    "width": 30,
                    "height": 28
                },
                {
                    "color": "#774318",
                    "solid": false,
                    "x": 681.34716796875,
                    "y": 73.99998474121094,
                    "width": 34,
                    "height": 36
                },
                {
                    "color": "#555555",
                    "solid": true,
                    "x": 50.34716796875,
                    "y": 41.99998474121094,
                    "width": 142,
                    "height": 81
                },
                {
                    "color": "#555555",
                    "solid": true,
                    "x": 104.99996948242188,
                    "y": 121,
                    "width": 33,
                    "height": 14
                },
                {
                    "color": "#555555",
                    "solid": true,
                    "x": 67.99996948242188,
                    "y": 135,
                    "width": 104,
                    "height": 10
                },
                {
                    "color": "#512806",
                    "solid": true,
                    "x": 45.999969482421875,
                    "y": 146,
                    "width": 152,
                    "height": 37
                },
                {
                    "color": "#a35d24",
                    "solid": true,
                    "x": 16.999969482421875,
                    "y": 232,
                    "width": 25,
                    "height": 56
                },
                {
                    "color": "#a35d24",
                    "solid": true,
                    "x": 188.99996948242188,
                    "y": 237,
                    "width": 23,
                    "height": 57
                },
                {
                    "color": "#a35d24",
                    "solid": true,
                    "x": 16.999969482421875,
                    "y": 278,
                    "width": 195,
                    "height": 22
                },
                {
                    "color": "#a35d24",
                    "solid": false,
                    "x": 41.999969482421875,
                    "y": 238,
                    "width": 151,
                    "height": 44
                },
                {
                    "color": "#a35d24",
                    "solid": false,
                    "x": 15,
                    "y": 604,
                    "width": 86,
                    "height": 173
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 15.999969482421875,
                    "y": 604.4285736083984,
                    "width": 84,
                    "height": 155
                },
                {
                    "color": "#ffffff",
                    "solid": false,
                    "x": 16,
                    "y": 758,
                    "width": 84,
                    "height": 19
                }
            ],
            "doors": [
                {
                    "x": 325.34716796875,
                    "y": 761.9999847412109,
                    "width": 122,
                    "height": 36,
                    "target": "outside",
                    "spawnX": 356,
                    "spawnY": 537
                }
            ],
            "npcs": [
                {
                    "x": 627,
                    "y": 91,
                    "radius": 20,
                    "color": "#9b59b6",
                    "name": "Hank",
                    "lines": [
                        "Hello there!"
                    ]
                },
                {
                    "x": 700,
                    "y": 94,
                    "radius": 20,
                    "color": "#9b59b6",
                    "name": "Mikey",
                    "lines": [
                        "Hello there!"
                    ]
                }
            ]
        },
        "house2": {
            "width": 400,
            "height": 800,
            "background": "#7494B0",
            "zones": {
                "machine": {
                    "x": 261,
                    "y": 44,
                    "width": 115,
                    "height": 84,
                    "solid": true,
                    "inputItem": "sugar",
                    "outputItem": "sugar_2"
                }
            },
            "walls": [
                {
                    "color": "#7494b0",
                    "solid": true,
                    "x": 142,
                    "y": 496,
                    "width": 256,
                    "height": 55
                },
                {
                    "color": "#7494b0",
                    "solid": true,
                    "x": 121,
                    "y": 277,
                    "width": 154,
                    "height": 52
                },
                {
                    "color": "#7494b0",
                    "solid": true,
                    "x": 230,
                    "y": 132,
                    "width": 169,
                    "height": 67
                }
            ],
            "doors": [
                {
                    "x": 156,
                    "y": 777,
                    "width": 98,
                    "height": 22,
                    "target": "outside",
                    "spawnX": 721,
                    "spawnY": 548
                }
            ],
            "npcs": [
                {
                    "x": 300,
                    "y": 684,
                    "radius": 20,
                    "color": "#00ffe1",
                    "name": "Ralter",
                    "lines": [
                        "This hear machine in the back makes the good stuff.",
                        "Me and my friend Cessie used to use it all of the time."
                    ]
                }
            ]
        },
        "bodega": {
            "width": 1000,
            "height": 600,
            "background": "#a26767",
            "walls": [
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 103,
                    "y": -0.5,
                    "width": 34,
                    "height": 133
                },
                {
                    "x": 358,
                    "y": 83,
                    "width": 583,
                    "height": 31,
                    "color": "#a76539",
                    "solid": true
                },
                {
                    "x": 357,
                    "y": 231,
                    "width": 572,
                    "height": 38,
                    "color": "#a76539",
                    "solid": true
                },
                {
                    "x": 366,
                    "y": 382,
                    "width": 552,
                    "height": 45,
                    "color": "#a76539",
                    "solid": true
                },
                {
                    "x": 382,
                    "y": 517,
                    "width": 513,
                    "height": 44,
                    "color": "#a76539",
                    "solid": true
                },
                {
                    "x": 381,
                    "y": 498,
                    "width": 514,
                    "height": 19,
                    "color": "#e07f3e",
                    "solid": true
                },
                {
                    "x": 366,
                    "y": 427,
                    "width": 552,
                    "height": 14,
                    "color": "#e07f3e",
                    "solid": true
                },
                {
                    "x": 366,
                    "y": 363,
                    "width": 553,
                    "height": 20,
                    "color": "#e07f3e",
                    "solid": true
                },
                {
                    "x": 358,
                    "y": 270,
                    "width": 571,
                    "height": 13,
                    "color": "#e07f3e",
                    "solid": true
                },
                {
                    "x": 357,
                    "y": 211,
                    "width": 572,
                    "height": 20,
                    "color": "#e07f3e",
                    "solid": true
                },
                {
                    "x": 357,
                    "y": 113,
                    "width": 583,
                    "height": 17,
                    "color": "#e07f3e",
                    "solid": true
                }
            ],
            "doors": [],
            "npcs": [
                {
                    "x": 49,
                    "y": 84,
                    "radius": 20,
                    "color": "#c9b054",
                    "name": "Bill",
                    "lines": [
                        "Hey there.",
                        "If only I got another customer.",
                        "Besides you, my mom is the only other visitor I get.",
                        "But she doesn't count.",
                        "Anywho, just take something. I don't get paid enough anyway."
                    ]
                }
            ],
            "zones": {
                "dock": {
                    "x": 358,
                    "y": 115,
                    "width": 574,
                    "height": 113,
                    "solid": false,
                    "spawnItem": "apple"
                }
            }
        }
    }
};
