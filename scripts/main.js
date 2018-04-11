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

//var stayTime = document.getElementById("appt-time").value();
//console.log(stayTime);

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

map.on("load", function() {
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
