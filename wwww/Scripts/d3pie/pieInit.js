function CreatePie(countA, countB, countC) {
    var pie = new d3pie("pieChart", {
        "header": {
            "title": {
                "text": "Count Letters",
                "fontSize": 24,                
                "color": "#f5deb3"
            },
            "subtitle": {
                "color": "#f5deb3",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#f5deb3",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasWidth": 590,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": [
                {
                    "label": "A",
                    "value": countA,
                    "color": "#990000"
                },
                {
                    "label": "B",
                    "value": countB,
                    "color": "#660000"
                },
                {
                    "label": "C",
                    "value": countC,
                    "color": "#330000"
                }
            ]
        },
        "labels": {
            "outer": {
                "pieDistance": 32
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 30,
                "color": "#f5deb3"
            },
            "percentage": {
                "color": "#fff",
                "decimalPlaces": 0,
                "fontSize": 30
            },
            "value": {
                "color": "#fff",
                "fontSize": 20
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    });

    pieee = pie;
};