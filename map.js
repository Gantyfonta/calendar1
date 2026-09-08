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
        },
        "maze_mold": {
            "name": "Maze Mold",
            "color": "#2c5168",
            "shape": "circle"
        },
        "golden_apple": {
            "name": "Golden Apple",
            "color": "#ffea00",
            "shape": "circle"
        }
    },
    "scenes": {
        "factory": {
            "width": 800,
            "height": 600,
            "background": "#7494B0",
            "zones": [
                {
                    "type": "counter",
                    "x": 340,
                    "y": 20,
                    "width": 120,
                    "height": 80,
                    "solid": true,
                    "acceptItem": "cheese"
                },
                {
                    "type": "machine",
                    "x": 600,
                    "y": 240,
                    "width": 120,
                    "height": 120,
                    "solid": true,
                    "inputItem": "box",
                    "outputItem": "cheese"
                },
                {
                    "type": "dock",
                    "x": 30,
                    "y": 420,
                    "width": 150,
                    "height": 150,
                    "solid": false,
                    "spawnItem": "box",
                    "maxStock": 5,
                    "spawnIntervalMs": 4000
                }
            ],
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
            "zones": [],
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
                },
                {
                    "color": "#816c22",
                    "solid": true,
                    "x": 269,
                    "y": 319,
                    "width": 46,
                    "height": 58
                },
                {
                    "color": "#816c22",
                    "solid": true,
                    "x": 406,
                    "y": 322,
                    "width": 41,
                    "height": 58
                },
                {
                    "color": "#313a68",
                    "solid": true,
                    "x": 706,
                    "y": 338,
                    "width": 33,
                    "height": 43
                },
                {
                    "color": "#313a68",
                    "solid": true,
                    "x": 706,
                    "y": 409,
                    "width": 32,
                    "height": 34
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 384,
                    "y": 756,
                    "width": 35,
                    "height": 32
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 481,
                    "y": 760,
                    "width": 38,
                    "height": 35
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 597,
                    "y": 759,
                    "width": 38,
                    "height": 38
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 491,
                    "y": 835,
                    "width": 37,
                    "height": 43
                },
                {
                    "color": "#575757",
                    "solid": true,
                    "x": 603,
                    "y": 833,
                    "width": 32,
                    "height": 44
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 577,
                    "y": 916,
                    "width": 501,
                    "height": 63
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 369,
                    "y": 905,
                    "width": 72,
                    "height": 18
                },
                {
                    "color": "#57d9ea",
                    "solid": true,
                    "x": 846,
                    "y": 716,
                    "width": 174,
                    "height": 173
                },
                {
                    "color": "#418790",
                    "solid": true,
                    "x": 822,
                    "y": 675,
                    "width": 223,
                    "height": 57
                },
                {
                    "color": "#418790",
                    "solid": true,
                    "x": 864,
                    "y": 756,
                    "width": 29,
                    "height": 42
                },
                {
                    "color": "#418790",
                    "solid": true,
                    "x": 966,
                    "y": 760,
                    "width": 27,
                    "height": 42
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 896,
                    "y": 887,
                    "width": 63,
                    "height": 33
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 330,
                    "y": 890,
                    "width": 39,
                    "height": 30
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 453,
                    "y": 890,
                    "width": 67,
                    "height": 32
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 551,
                    "y": 893,
                    "width": 78,
                    "height": 33
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 641,
                    "y": 899,
                    "width": 46,
                    "height": 26
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 827,
                    "y": 880,
                    "width": 62,
                    "height": 23
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 969,
                    "y": 875,
                    "width": 58,
                    "height": 29
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 958,
                    "y": 36,
                    "width": 56,
                    "height": 126
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 1024,
                    "y": 13,
                    "width": 43,
                    "height": 97
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 1094,
                    "y": 13,
                    "width": 35,
                    "height": 103
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 1152,
                    "y": 16,
                    "width": 43,
                    "height": 107
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 1165,
                    "y": 80,
                    "width": 62,
                    "height": 104
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 979,
                    "y": 162,
                    "width": 17,
                    "height": 22
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 1037,
                    "y": 111,
                    "width": 17,
                    "height": 29
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 1104,
                    "y": 115,
                    "width": 20,
                    "height": 28
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 1188,
                    "y": 184,
                    "width": 23,
                    "height": 28
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 926,
                    "y": 116,
                    "width": 51,
                    "height": 127
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 1202,
                    "y": 166,
                    "width": 45,
                    "height": 97
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 942,
                    "y": 244,
                    "width": 21,
                    "height": 28
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 1215,
                    "y": 263,
                    "width": 19,
                    "height": 33
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 1020,
                    "y": 180,
                    "width": 136,
                    "height": 467
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 896,
                    "y": 561,
                    "width": 256,
                    "height": 82
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 1059,
                    "y": 563,
                    "width": 97,
                    "height": 417
                },
                {
                    "color": "#d9b85e",
                    "solid": true,
                    "x": 1217,
                    "y": 677,
                    "width": 293,
                    "height": 221
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1188,
                    "y": 657,
                    "width": 348,
                    "height": 42
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1241,
                    "y": 728,
                    "width": 34,
                    "height": 37
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1247,
                    "y": 801,
                    "width": 32,
                    "height": 32
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1308,
                    "y": 724,
                    "width": 30,
                    "height": 38
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1379,
                    "y": 728,
                    "width": 40,
                    "height": 37
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1446,
                    "y": 733,
                    "width": 32,
                    "height": 31
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1453,
                    "y": 784,
                    "width": 33,
                    "height": 32
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 1194,
                    "y": 886,
                    "width": 107,
                    "height": 31
                },
                {
                    "color": "#253d1f",
                    "solid": true,
                    "x": 1450,
                    "y": 884,
                    "width": 76,
                    "height": 29
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
                },
                {
                    "x": 376,
                    "y": 825,
                    "width": 63,
                    "height": 84,
                    "target": "bodega",
                    "spawnX": 60,
                    "spawnY": 523
                },
                {
                    "x": 904,
                    "y": 825,
                    "width": 50,
                    "height": 71,
                    "target": "house3",
                    "spawnX": 683,
                    "spawnY": 502
                },
                {
                    "x": 1020,
                    "y": 176,
                    "width": 137,
                    "height": 48,
                    "target": "forest",
                    "spawnX": 368,
                    "spawnY": 728
                },
                {
                    "x": 1335,
                    "y": 811,
                    "width": 63,
                    "height": 98,
                    "target": "hotel",
                    "spawnX": 408,
                    "spawnY": 727
                }
            ],
            "npcs": []
        },
        "backroom": {
            "width": 800,
            "height": 600,
            "background": "#7494B0",
            "zones": [
                {
                    "type": "dock",
                    "x": 8.34716796875,
                    "y": 242,
                    "width": 110,
                    "height": 154,
                    "solid": false,
                    "spawnItem": "sugar",
                    "maxStock": 5,
                    "spawnIntervalMs": 4000
                }
            ],
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
                        "..."
                    ],
                    "quest": {
                        "enabled": true,
                        "itemNeeded": "sugar_2",
                        "amountNeeded": 5,
                        "amountDelivered": 0,
                        "requestLines": [
                            "Sup.",
                            "I was just chillin in the back room until you came and bothered me.",
                            "While you're here, get me 5 \"sugar.\""
                        ],
                        "turnInLines": [
                            "Thanks, now scram."
                        ],
                        "completeLines": [
                            "Thanks bro, I'll need some more soon."
                        ]
                    }
                }
            ]
        },
        "house1": {
            "width": 800,
            "height": 800,
            "background": "#f7d142",
            "zones": [],
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
            "zones": [
                {
                    "type": "machine",
                    "x": 261,
                    "y": 44,
                    "width": 115,
                    "height": 84,
                    "solid": true,
                    "inputItem": "sugar",
                    "outputItem": "sugar_2"
                }
            ],
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
                    "color": "#a76539",
                    "solid": true,
                    "x": 358,
                    "y": 83,
                    "width": 583,
                    "height": 31
                },
                {
                    "color": "#a76539",
                    "solid": true,
                    "x": 357,
                    "y": 231,
                    "width": 572,
                    "height": 38
                },
                {
                    "color": "#a76539",
                    "solid": true,
                    "x": 366,
                    "y": 382,
                    "width": 552,
                    "height": 45
                },
                {
                    "color": "#a76539",
                    "solid": true,
                    "x": 382,
                    "y": 517,
                    "width": 513,
                    "height": 44
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 381,
                    "y": 498,
                    "width": 514,
                    "height": 19
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 366,
                    "y": 427,
                    "width": 552,
                    "height": 14
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 366,
                    "y": 363,
                    "width": 553,
                    "height": 20
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 358,
                    "y": 270,
                    "width": 571,
                    "height": 13
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 357,
                    "y": 211,
                    "width": 572,
                    "height": 20
                },
                {
                    "color": "#e07f3e",
                    "solid": true,
                    "x": 357,
                    "y": 113,
                    "width": 583,
                    "height": 17
                }
            ],
            "doors": [
                {
                    "x": 13,
                    "y": 568,
                    "width": 125,
                    "height": 28,
                    "target": "outside",
                    "spawnX": 397,
                    "spawnY": 949
                }
            ],
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
            "zones": [
                {
                    "type": "dock",
                    "x": 358,
                    "y": 115,
                    "width": 574,
                    "height": 113,
                    "solid": false,
                    "spawnItem": "apple",
                    "maxStock": 5,
                    "spawnIntervalMs": 4000
                }
            ]
        },
        "house3": {
            "width": 800,
            "height": 600,
            "background": "#4187b0",
            "zones": [
                {
                    "type": "dock",
                    "x": 5,
                    "y": 496,
                    "width": 85,
                    "height": 100,
                    "solid": false,
                    "spawnItem": "maze_mold",
                    "maxStock": 5,
                    "spawnIntervalMs": 4000
                }
            ],
            "walls": [
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 532,
                    "y": 442,
                    "width": 39,
                    "height": 157
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 525,
                    "y": 275,
                    "width": 274,
                    "height": 36
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 392,
                    "y": 270,
                    "width": 33,
                    "height": 231
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 161,
                    "y": 386,
                    "width": 187,
                    "height": 32
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 382,
                    "y": 101,
                    "width": 293,
                    "height": 46
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 279,
                    "y": 125,
                    "width": 40,
                    "height": 193
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 0,
                    "y": 204,
                    "width": 160,
                    "height": 34
                },
                {
                    "color": "#2c5168",
                    "solid": true,
                    "x": 96,
                    "y": 494,
                    "width": 31,
                    "height": 105
                }
            ],
            "doors": [
                {
                    "x": 619,
                    "y": 565,
                    "width": 137,
                    "height": 32,
                    "target": "outside",
                    "spawnX": 935,
                    "spawnY": 941
                }
            ],
            "npcs": [
                {
                    "x": 64,
                    "y": 79,
                    "radius": 20,
                    "color": "#2c5168",
                    "name": "Maze Man",
                    "lines": [
                        "..."
                    ],
                    "quest": {
                        "enabled": true,
                        "itemNeeded": "maze_mold",
                        "amountNeeded": 1,
                        "amountDelivered": 0,
                        "requestLines": [
                            "hEllO.",
                            "WeLcOme to mY maZ3!",
                            "I HoPe you w3r3nt loST.",
                            "i Hop3 Yu sTay her3 for a WhIl3.",
                            "i n33d ComPanY.",
                            "I n3ed s0m3 mosS."
                        ],
                        "turnInLines": [
                            "mY preCi0us..."
                        ],
                        "completeLines": [
                            "y0u haV3 b3c0me a frIeND oF th3 MazE."
                        ]
                    }
                }
            ]
        },
        "forest": {
            "width": 800,
            "height": 800,
            "background": "#4a7c3f",
            "zones": [
                {
                    "type": "machine",
                    "x": 52,
                    "y": 114.5,
                    "width": 22,
                    "height": 26,
                    "solid": true,
                    "inputItem": "apple",
                    "outputItem": "golden_apple"
                }
            ],
            "walls": [
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 291,
                    "y": 544.5,
                    "width": 158,
                    "height": 255
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 4,
                    "y": 6.5,
                    "width": 40,
                    "height": 78
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 51,
                    "y": 9.5,
                    "width": 32,
                    "height": 75
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 97,
                    "y": 8.5,
                    "width": 36,
                    "height": 76
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 141,
                    "y": 12.5,
                    "width": 26,
                    "height": 70
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 176,
                    "y": 11.5,
                    "width": 31,
                    "height": 72
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 219,
                    "y": 11.5,
                    "width": 42,
                    "height": 71
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 271,
                    "y": 10.5,
                    "width": 30,
                    "height": 70
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 310,
                    "y": 14.5,
                    "width": 37,
                    "height": 68
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 361,
                    "y": 17.5,
                    "width": 44,
                    "height": 57
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 418,
                    "y": 23.5,
                    "width": 35,
                    "height": 72
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 468,
                    "y": 8.5,
                    "width": 26,
                    "height": 67
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 501,
                    "y": 22.5,
                    "width": 61,
                    "height": 76
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 573,
                    "y": 25.5,
                    "width": 24,
                    "height": 55
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 608,
                    "y": 12.5,
                    "width": 28,
                    "height": 65
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 658,
                    "y": 13.5,
                    "width": 35,
                    "height": 58
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 708,
                    "y": 20.5,
                    "width": 32,
                    "height": 49
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 756,
                    "y": 7.5,
                    "width": 34,
                    "height": 58
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 13,
                    "y": 85.5,
                    "width": 18,
                    "height": 17
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 61,
                    "y": 85.5,
                    "width": 11,
                    "height": 17
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 111,
                    "y": 85.5,
                    "width": 11,
                    "height": 21
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 148,
                    "y": 83.5,
                    "width": 13,
                    "height": 16
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 184,
                    "y": 83.5,
                    "width": 15,
                    "height": 14
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 235,
                    "y": 83.5,
                    "width": 10,
                    "height": 16
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 279,
                    "y": 82.5,
                    "width": 11,
                    "height": 17
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 325,
                    "y": 83.5,
                    "width": 12,
                    "height": 18
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 377,
                    "y": 74.5,
                    "width": 14,
                    "height": 24
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 428,
                    "y": 95.5,
                    "width": 13,
                    "height": 19
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 474,
                    "y": 76.5,
                    "width": 12,
                    "height": 33
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 522,
                    "y": 98.5,
                    "width": 23,
                    "height": 10
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 581,
                    "y": 80.5,
                    "width": 11,
                    "height": 19
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 614,
                    "y": 77.5,
                    "width": 14,
                    "height": 15
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 670,
                    "y": 71.5,
                    "width": 13,
                    "height": 18
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 717,
                    "y": 69.5,
                    "width": 14,
                    "height": 15
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 765,
                    "y": 66.5,
                    "width": 13,
                    "height": 15
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 8,
                    "y": 93.5,
                    "width": 31,
                    "height": 66
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 14,
                    "y": 159.5,
                    "width": 17,
                    "height": 20
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 10,
                    "y": 177.5,
                    "width": 32,
                    "height": 72
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 16,
                    "y": 250.5,
                    "width": 18,
                    "height": 19
                },
                {
                    "color": "#22c4ec",
                    "solid": true,
                    "x": 510,
                    "y": 524.5,
                    "width": 269,
                    "height": 263
                },
                {
                    "color": "#d9c793",
                    "solid": false,
                    "x": 290,
                    "y": 215.5,
                    "width": 159,
                    "height": 327
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 2,
                    "y": 268.5,
                    "width": 53,
                    "height": 72
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 749,
                    "y": 92.5,
                    "width": 42,
                    "height": 74
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 749,
                    "y": 249.5,
                    "width": 45,
                    "height": 68
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 757,
                    "y": 385.5,
                    "width": 36,
                    "height": 68
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 612,
                    "y": 395.5,
                    "width": 52,
                    "height": 69
                },
                {
                    "color": "#1f3e18",
                    "solid": true,
                    "x": 537,
                    "y": 217.5,
                    "width": 33,
                    "height": 86
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 8,
                    "y": 339.5,
                    "width": 34,
                    "height": 14
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 546,
                    "y": 305.5,
                    "width": 11,
                    "height": 35
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 625,
                    "y": 465.5,
                    "width": 27,
                    "height": 22
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 764,
                    "y": 453.5,
                    "width": 20,
                    "height": 17
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 757,
                    "y": 317.5,
                    "width": 27,
                    "height": 17
                },
                {
                    "color": "#653515",
                    "solid": true,
                    "x": 757,
                    "y": 166.5,
                    "width": 25,
                    "height": 23
                },
                {
                    "color": "#787878",
                    "solid": true,
                    "x": 50,
                    "y": 611.5,
                    "width": 189,
                    "height": 99
                },
                {
                    "color": "#787878",
                    "solid": true,
                    "x": 70,
                    "y": 555.5,
                    "width": 155,
                    "height": 56
                }
            ],
            "doors": [
                {
                    "x": 305,
                    "y": 765.5,
                    "width": 135,
                    "height": 30,
                    "target": "outside",
                    "spawnX": 1091,
                    "spawnY": 303
                }
            ],
            "npcs": [
                {
                    "x": 634,
                    "y": 344,
                    "radius": 20,
                    "color": "#b05458",
                    "name": "Camper",
                    "lines": [
                        "Enjoy this hear forest.",
                        "Maybe even set up camp.",
                        "Have you ever wondered what's it is like in the metaphysical world?",
                        "I don't.",
                        "That's too smart of things for me."
                    ],
                    "quest": null
                },
                {
                    "x": 546,
                    "y": -15,
                    "radius": 20,
                    "color": "#fbff00",
                    "name": "The Great Wheel",
                    "lines": [
                        "I bless thee if thy sneezes.",
                        "I taught Crumb the laws of the land.",
                        "I am the Great Wheel.",
                        "I brought the first Cheese to mortals.",
                        "I gave humans cow and goat."
                    ],
                    "quest": null
                }
            ]
        },
        "hotel": {
            "width": 800,
            "height": 800,
            "background": "#d9b85e",
            "zones": [],
            "walls": [
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 1,
                    "y": 452.5,
                    "width": 314,
                    "height": 346
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 510,
                    "y": 452.5,
                    "width": 288,
                    "height": 347
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 90,
                    "y": 330.5,
                    "width": 42,
                    "height": 121
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 350,
                    "y": 473.5,
                    "width": 127,
                    "height": 253
                },
                {
                    "color": "#ffea00",
                    "solid": false,
                    "x": 372,
                    "y": 491.5,
                    "width": 84,
                    "height": 214
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 384,
                    "y": 504.5,
                    "width": 59,
                    "height": 190
                }
            ],
            "doors": [
                {
                    "x": 333,
                    "y": 762.5,
                    "width": 158,
                    "height": 32,
                    "target": "outside",
                    "spawnX": 1368,
                    "spawnY": 942
                },
                {
                    "x": 518,
                    "y": 406.5,
                    "width": 134,
                    "height": 48,
                    "target": "room1",
                    "spawnX": 406,
                    "spawnY": 99
                },
                {
                    "x": 763,
                    "y": 260.5,
                    "width": 35,
                    "height": 139,
                    "target": "room2",
                    "spawnX": 70,
                    "spawnY": 372
                },
                {
                    "x": 759,
                    "y": 59.5,
                    "width": 37,
                    "height": 133,
                    "target": "room3",
                    "spawnX": 75,
                    "spawnY": 381
                }
            ],
            "npcs": [
                {
                    "x": 43,
                    "y": 391,
                    "radius": 20,
                    "color": "#cea73b",
                    "name": "Hotel Manager",
                    "lines": [
                        "Hello customer!",
                        "Welcome to my hotel!",
                        "Please go ahead and find yourself a room."
                    ],
                    "quest": null
                }
            ]
        },
        "room1": {
            "width": 800,
            "height": 600,
            "background": "#d9b85e",
            "zones": [],
            "walls": [
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 0,
                    "y": 1.5,
                    "width": 282,
                    "height": 598
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 281,
                    "y": 450.5,
                    "width": 518,
                    "height": 149
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 504,
                    "y": -0.5,
                    "width": 295,
                    "height": 196
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 749,
                    "y": 195.5,
                    "width": 50,
                    "height": 255
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 550,
                    "y": 196.5,
                    "width": 198,
                    "height": 93
                },
                {
                    "color": "#ffffff",
                    "solid": false,
                    "x": 728,
                    "y": 195.5,
                    "width": 21,
                    "height": 93
                },
                {
                    "color": "#a56940",
                    "solid": true,
                    "x": 716,
                    "y": 290.5,
                    "width": 33,
                    "height": 43
                }
            ],
            "doors": [],
            "npcs": []
        },
        "room2": {
            "width": 800,
            "height": 600,
            "background": "#d9b85e",
            "zones": [],
            "walls": [
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 0,
                    "y": 1.5,
                    "width": 282,
                    "height": 300
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 0,
                    "y": 450.5,
                    "width": 800,
                    "height": 149
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 504,
                    "y": -0.5,
                    "width": 295,
                    "height": 196
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 749,
                    "y": 195.5,
                    "width": 50,
                    "height": 255
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 550,
                    "y": 196.5,
                    "width": 198,
                    "height": 93
                },
                {
                    "color": "#ffffff",
                    "solid": false,
                    "x": 728,
                    "y": 195.5,
                    "width": 21,
                    "height": 93
                },
                {
                    "color": "#a56940",
                    "solid": true,
                    "x": 716,
                    "y": 290.5,
                    "width": 33,
                    "height": 43
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 282,
                    "y": 1.5,
                    "width": 222,
                    "height": 144
                }
            ],
            "doors": [
                {
                    "x": 0,
                    "y": 315.5,
                    "width": 33,
                    "height": 109,
                    "target": "hotel",
                    "spawnX": 712,
                    "spawnY": 313
                }
            ],
            "npcs": []
        },
        "room3": {
            "width": 800,
            "height": 600,
            "background": "#d9b85e",
            "zones": [],
            "walls": [
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 0,
                    "y": 1.5,
                    "width": 282,
                    "height": 300
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 0,
                    "y": 450.5,
                    "width": 800,
                    "height": 149
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 504,
                    "y": -0.5,
                    "width": 295,
                    "height": 196
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 749,
                    "y": 195.5,
                    "width": 50,
                    "height": 255
                },
                {
                    "color": "#ff0000",
                    "solid": false,
                    "x": 550,
                    "y": 196.5,
                    "width": 198,
                    "height": 93
                },
                {
                    "color": "#ffffff",
                    "solid": false,
                    "x": 728,
                    "y": 195.5,
                    "width": 21,
                    "height": 93
                },
                {
                    "color": "#a56940",
                    "solid": true,
                    "x": 716,
                    "y": 290.5,
                    "width": 33,
                    "height": 43
                },
                {
                    "color": "#a58a40",
                    "solid": true,
                    "x": 282,
                    "y": 1.5,
                    "width": 222,
                    "height": 144
                }
            ],
            "doors": [
                {
                    "x": 0,
                    "y": 338.5,
                    "width": 33,
                    "height": 88,
                    "target": "hotel",
                    "spawnX": 712,
                    "spawnY": 144
                }
            ],
            "npcs": []
        },
        "room4": {
            "width": 800,
            "height": 600,
            "background": "#d9b85e",
            "zones": [],
            "walls": [],
            "doors": [],
            "npcs": []
        }
    }
};
