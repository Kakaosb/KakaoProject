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
                "fontSize": 18,                
                "text": "Lower case only!"
            },
            "titleSubtitlePadding": 9
        },      
        "size": {
            "canvasWidth": 380,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": [
                {
                    "label": "a",
                    "value": countA,
                    "color": "#6fff00"
                },
                {
                    "label": "b",
                    "value": countB,
                    "color": "#306f00"
                },
                {
                    "label": "c",
                    "value": countC,
                    "color": "#aeff6f"
                }
            ]
        },
        "labels": {
            "outer": {
                "pieDistance": 15
            },
            "inner": {
                "hideWhenLessThanPercentage": 6
            },
            "mainLabel": {
                "fontSize": 28,
                "color": "#f5deb3"
            },
            "percentage": {
                "color": "#fff",
                "decimalPlaces": 1,
                "fontSize": 20
            },
            "value": {
                "color": "#fff",
                "fontSize": 17
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage":40
            }
        }
    });  
};