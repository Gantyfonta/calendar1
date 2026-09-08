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
        }
    }
};
