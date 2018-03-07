//ACCESS TOKEN
mapboxgl.accessToken = 'pk.eyJ1IjoiaWxhaHN1ciIsImEiOiJjajE4Z2poZm4wNzR1MndxcWtoczgzajljIn0.ssxmh8xXwYYhvm_xzkPaVw';


//MAKE A MAP
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/dark-v9', //mapbox://styles/mapbox/navigation-preview-night-v2, mapbox://styles/mapbox/dark-v9
    center: [-74.0066, 40.7135],
    zoom: 15.5,
    pitch: 45, //45
    bearing: -17.6,//-17.6
    hash: true,
    container: 'map'
});



// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {

    //initialize threebox
    var threebox = new Threebox(map);
    threebox.setupDefaultLights();
    //threebox.addAtCoordinate(object, position);

    // Load and manipulate a THREE.js scenegraph as you would normally
        loader = new THREE.JSONLoader();


        loader.load("models/boeing747-400-jw.json", function(geometry) {
            geometry.rotateY((90/360)*2*Math.PI);
            geometry.rotateX((90/360)*2*Math.PI);

            var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
            aircraft = new THREE.Mesh( geometry, material );
            var planePosition = [-122.41356, 37.77577 ,100];

            // Add the model to the threebox scenegraph at a specific geographic coordinate
            threebox.addAtCoordinate(aircraft, planePosition, {scaleToLatitude: true, preScale: 2});
        });




    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 4, //15
        'paint': {
            'fill-extrusion-color': '#b9b9fb', //#aaa

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                4, 0, //15
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                4, 0, //15
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .8
        }
    }, labelLayerId);

    map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
        map.addImage('musical-note1', image);
        map.addLayer({
            "id": "points1",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.0066, 40.7135]//nyc
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note1",
                "icon-size": 0.25
            }
        });

    });

map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
    map.addImage('musical-note2', image);
        map.addLayer({
            "id": "points2",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.925650, 40.828001] //Yankee stadium
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note2",
                "icon-size": 0.25
            }
        });
    });

    map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
    map.addImage('musical-note3', image);
        map.addLayer({
            "id": "points3",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.952837, 40.810756] //125th St 8th av
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note3",
                "icon-size": 0.25
            }
        });
    });

    map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
        map.addImage('musical-note4', image);
        map.addLayer({
            "id": "points4",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.937221, 40.804403] //125th St Lexington Av
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note4",
                "icon-size": 0.25
            }
        });

    });

    map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
        map.addImage('musical-note5', image);
        map.addLayer({
            "id": "points5",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.950944, 40.785850] //96th STREET, 2ND AVENUE
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note5",
                "icon-size": 0.25
            }
        });

    });

        map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
        map.addImage('musical-note6', image);
        map.addLayer({
            "id": "points6",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.951473, 40.777881] //86th STREET, 2ND AVENUE
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note6",
                "icon-size": 0.25
            }
        });

    });

    map.loadImage('musical-note.png', function(error, image) {
        if (error) throw error;
        map.addImage('musical-note7', image);
        map.addLayer({
            "id": "points7",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.958426, 40.768655] //72nd STREET, 2ND AVENUE
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "musical-note7",
                "icon-size": 0.25
            }
        });

    });

});
