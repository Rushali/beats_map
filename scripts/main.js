if (!config)
    console.error(
        "Config not set! Make a copy of 'config_template.js', add in your access token, and save the file as 'config.js'."
    );

const now = new Date();
//console.log(now.getHours()+" "+now.getMinutes());

mapboxgl.accessToken = config.accessToken;
var bounds = [
    [-74.031296, 40.699754], // nyc Southwest coordinates
    [-73.844528, 40.799629] // nyc Northeast coordinates
];

var bins = 16;
var maxHeight = 200;
var binWidth = maxHeight / bins;

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

//MAKE A MAP
var map = new mapboxgl.Map({
    style: "mapbox://styles/mapbox/dark-v9", //mapbox://styles/mapbox/navigation-preview-night-v2, mapbox://styles/mapbox/dark-v9, mapbox://styles/examples/cj68bstx01a3r2rndlud0pwpv
    center: [-74.0066, 40.7135],
    zoom: 10, //15.5
    pitch: 45, //45
    bearing: -17.6, //-17.6
    hash: true,
    //minZoom: 14,
    //maxBounds: bounds,
    container: "map"
});


map.on("load", 'point', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer(
        {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 4, //15
            paint: {
                "fill-extrusion-color": "#aaa", //#aaa
                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    4,
                    0, //15
                    15.05,
                    ["get", "height"]
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    4,
                    0, //15
                    15.05,
                    ["get", "min_height"]
                ],
                "fill-extrusion-opacity": 0.8
            }
        },
        labelLayerId
    );
});

map.on('mousemove', function (e) {
        var positions =
        // e.point is the x, y coordinates of the mousemove event relative to top left corner
        JSON.stringify(e.point) ;
        //console.log(positions);
});

function formHide() {
    $(".form_cover").hide();
}

var latlng = "";
map.on("click", recordLatLongVals);

function recordLatLongVals(e) {
    latlng = e.lngLat;
}
var fileID = 0;

function addspottedMarker() {
    var timehours = now.getHours();
    var timemins = now.getMinutes();

    fileID++;
    //add layer of spotted musicians
    console.log("musician spotted submit clicked");
    var elspotted = document.createElement("div");
    elspotted.className = "spottedmarker";
    var spottedmusician = new mapboxgl.Marker(elspotted)
        .setLngLat(latlng)
        .addTo(map);

    setTimeout(function() {
        spottedmusician.remove();

    }, 5000);

    pushData(fileID, latlng, timehours, now);
}

function pushData(name, place, time, timestamp) {
    var data = JSON.stringify({
        name: name,
        place: place,
        time: time,
        timestamp: timestamp
    });
    var database = firebase.database();
    var musicianDb = database.ref("musicianlocations");
    musicianDb.push(JSON.parse(data));
}

function getData() {
    //get
    var id = "-KVKnwa-MsPXzNbNHdmK";
    var ref = database.ref("musicianlocations/" + id);
    ref.on("value", gotOne, errData);

    function gotOne(data) {
        console.log(data);
        //var fruit = data.val();
    }
}

function getAll() {
    firebase
        .database()
        .ref("/musicianlocations/")
        .once("value")
        .then(function(snapshot) {
            console.log(snapshot.val());
        });

}

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

//Initialize threebox
window.threebox = new Threebox(map);
threebox.setupDefaultLights();

// add markers to map
geojson.features.forEach(function(marker) {
    elementId = marker.properties.description.split(" ").join("_");
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";
    el.setAttribute("id", elementId);
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA900B-mdQR0FNraYbG4z7KdhsTE-1LcXc",
    authDomain: "newagent-89af2.firebaseapp.com",
    databaseURL: "https://newagent-89af2.firebaseio.com",
    projectId: "newagent-89af2",
    storageBucket: "newagent-89af2.appspot.com",
    messagingSenderId: "824108281115"
};
firebase.initializeApp(config);

// <<<<<<< HEAD
//     mapboxgl.accessToken = config.accessToken;
// var bounds = [
//                     [-74.031296, 40.699754], // nyc Southwest coordinates
//                     [-73.844528, 40.799629]  // nyc Northeast coordinates
//                 ];

// var bins = 16;
// var maxHeight = 200;
// var binWidth = maxHeight / bins;

// var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken
// });
    
//     //MAKE A MAP
//     var map = new mapboxgl.Map({
//         style: 'mapbox://styles/mapbox/dark-v9', //mapbox://styles/mapbox/navigation-preview-night-v2, mapbox://styles/mapbox/dark-v9, mapbox://styles/examples/cj68bstx01a3r2rndlud0pwpv
//         center: [-74.0066, 40.7135],
//         zoom: 10,//15.5
//         pitch: 45, //45
//         bearing: -17.6,//-17.6
//         hash: true,
//         minZoom: 14,
//         maxBounds: bounds,
//         doubleClickZoom: false,
//         container: 'map'
//     });
            
//         map.on("load", function() {
//                 // Insert the layer beneath any symbol layer.
//                 var layers = map.getStyle().layers;
//                 var labelLayerId;
//                 for (var i = 0; i < layers.length; i++) {
//                     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
//                         labelLayerId = layers[i].id;
//                         break;
//                     }
//                 }

//         map.addLayer({
//                 'id': '3d-buildings',
//                 'source': 'composite',
//                 'source-layer': 'building',
//                 'filter': ['==', 'extrude', 'true'],
//                 'type': 'fill-extrusion',
//                 'minzoom': 4, //15
//                 'paint': {
//                     'fill-extrusion-color': '#aaa', //#aaa
//                     // use an 'interpolate' expression to add a smooth transition effect to the
//                     // buildings as the user zooms in
//                     'fill-extrusion-height':  
//                     [
//                         "interpolate", ["linear"], ["zoom"],
//                         4, 0, //15
//                         15.05, ["get", "height"]
//                     ],
//                     'fill-extrusion-base': 
//                     [
//                         "interpolate", ["linear"], ["zoom"],
//                         4, 0, //15
//                         15.05, ["get", "min_height"]
//                     ],
//                     'fill-extrusion-opacity': .8
//                 }
//             },labelLayerId);  
//         });

//         function formHide() {
//             $(".form_cover").hide();
//         }
//         var greenSphere = new Tone.Panner3D().toMaster();
//         var drone = new Tone.Player({
//             url : "/Data/Audio/drumadics.wav",
//             loop: true,
//         }).connect(greenSphere).sync().start(0);
// greenSphere.setPostion(x, y, z);


//         // Initialize threebox
//         window.threebox = new Threebox(map);
//         threebox.setupDefaultLights();

//             var listener = new THREE.AudioListener();
//             threebox.camera.add( listener );

//             // create the PositionalAudio object (passing in the listener)
//             var sound = new THREE.PositionalAudio( listener );

//             // load a sound and set it as the PositionalAudio object's buffer
//             var audioLoader = new THREE.AudioLoader();
//             audioLoader.load( 'Data/Audio/drumadics.wav', function( buffer ) {
//                 sound.setBuffer(buffer);
//                 sound.setRefDistance(20);
//                 sound.play();
//             });

//             // create an object for the sound to play from
//             var sphere = new THREE.SphereGeometry( 20, 32, 16 );
//             var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
//             var mesh = new THREE.Mesh( sphere, material );
//             var planePosition = [-74.0066, 40.7135 ,10];
//             threebox.scene.add( mesh );

//             // finally add the sound to the mesh
//             mesh.add( sound );
//             threebox.addAtCoordinate(mesh, planePosition, {scaleToLatitude: false, preScale: 2});

//         //Load and manipulate a THREE.js scenegraph as you would normally

//         // loader1 = new THREE.JSONLoader();
//         // //loader2 = new THREE.OBJLoader();

//         // loader1.load("models/boeing747-400-jw.json", function(geometry) {
//         //     geometry.rotateY((90/360)*2*Math.PI);
//         //     geometry.rotateX((90/360)*2*Math.PI);

//         //     var material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
//         //     aircraft = new THREE.Mesh( geometry, material );
            

//             // Add the model to the threebox scenegraph at a specific geographic coordinate
//             //threebox.addAtCoordinate(aircraft, planePosition);
//         // });

//     // add markers to map
//      geojson.features.forEach(function(marker) {

//       elementId = marker.properties.description.split(' ').join('_');
       
//       // create a HTML element for each feature
//       var el = document.createElement('div');
//       el.className = 'marker';
//       el.setAttribute("id", elementId);
    
//       // make a marker for each feature and add to the map
//       new mapboxgl.Marker(el)
//        .setLngLat(marker.geometry.coordinates)
//        .addTo(map);
//      });

//         var latlng = "";
//         map.on('click', recordLatLongVals);

//          function recordLatLongVals(e) {
//             latlng = e.lngLat;
//          }
//         var fileID = 0;
//         function addspottedMarker(){
//             fileID++;
//             //add layer of spotted musicians
//             console.log("submit clicked");
//             var elspotted = document.createElement('div');
//             elspotted.className = 'spottedmarker';
//             elspotted.setAttribute("id", 'fileID'+fileID );
//             var spottedmusician = new mapboxgl.Marker(elspotted).setLngLat(latlng).addTo(map);
//             setTimeout(function(){
//             $('#fileID'+fileID).remove();}, 5000);
//         }

//         // Add geolocate control to the map.
//             map.addControl(new mapboxgl.GeolocateControl({
//                 positionOptions: {
//                     enableHighAccuracy: true
//                 },
//                 trackUserLocation: true
//             }));

//         // add markers to map
//             geojson.features.forEach(function(marker) {
//             elementId = marker.properties.description.split(' ').join('_');
//         // create a HTML element for each feature
//             var el = document.createElement('div');
//             el.className = 'marker';
//             el.setAttribute("id", elementId);
//         // make a marker for each feature and add to the map
//             new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
//         });

// var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken
// });

// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
