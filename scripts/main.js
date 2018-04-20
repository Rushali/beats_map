if (!config)
    console.error(
        "Config not set! Make a copy of 'config_template.js', add in your access token, and save the file as 'config.js'."
    );

// const now = new Date();
//console.log(now.getHours()+" "+now.getMinutes());

mapboxgl.accessToken = config.accessToken;
var bounds = [
    [-74.031296, 40.699754], // nyc Southwest coordinates
    [-73.844528, 40.799629] // nyc Northeast coordinates
];
var dragFlag = 0;
var bins = 16;
var maxHeight = 200;
var binWidth = maxHeight / bins;

var nameValue;
var untilWhen;
var mediaURL;
var firebaseDatabase;

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


map.on("load", function() {
    // new DragPanHandler(map);
    // map.dragPan.disable();
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
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
                    "interpolate", ["linear"],
                    ["zoom"],
                    4,
                    0, //15
                    15.05, ["get", "height"]
                ],
                "fill-extrusion-base": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    4,
                    0, //15
                    15.05, ["get", "min_height"]
                ],
                "fill-extrusion-opacity": 0.8
            }
        },
        labelLayerId
    );

    //console.log('getting data');
    //get the data from the DB
    getData();
});

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

map.on('mousemove', function(e) {
    dragFlag = 1;
    var positions =
        // e.point is the x, y coordinates of the mousemove event relative to top left corner
        JSON.stringify(e.point);
    //console.log(positions);
});

function formHide() {
    $(".form_cover").hide();
}

var latlng = "";
map.on("mousedown", function() {
    dragFlag = 0;
})

map.on("mouseup", recordLatLongVals);

function recordLatLongVals(e) {
    latlng = e.lngLat;
}
var fileID = 0;

function addspottedMarker() {
    fileID++;
    //add layer of spotted musicians
    console.log("musician spotted submit clicked");
    // var elspotted = document.createElement("div");
    // elspotted.className = "spottedmarker";
    // var spottedmusician = new mapboxgl.Marker(elspotted)
    //     .setLngLat(latlng)
    //     .addTo(map);

    nameValue = document.getElementById("musiciansname").value;
    untilWhen = document.getElementById("untilWhen").value;
    mediaURL = document.getElementById("mediaURL").value;
    var timeSplit = untilWhen.split(':');
    var disappearhour = timeSplit[0];
    var disappearmin = timeSplit[1];
    //mediaURL = document.getElementById("mediaURL").value;
    var now = new Date();
    var disappearAt = new Date(now.getFullYear(), now.getMonth(), now.getDate(), disappearhour, disappearmin, 0, 0) - now;
    if (disappearAt < 0) {
        disappearAt += 86400000; // it's after 10am, try 10am tomorrow.
    }
    // setTimeout(function() {
    //     spottedmusician.remove();
    //     console.log("spotted musician removed");
    // }, disappearAt);

    pushData(fileID, nameValue, mediaURL, latlng, untilWhen, now);
}

function pushData(fileID, nameValue, mediaURL, latlng, untilWhen, now) {
    var data = JSON.stringify({
        fileID: fileID,
        nameValue: nameValue,
        mediaURL: mediaURL,
        latlng: latlng,
        untilWhen: untilWhen,
        now: now
    });
    var database = firebase.database();
    var musicianDb = database.ref("musicianlocations");
    musicianDb.push(JSON.parse(data));
}

function getData() {
    var starCountRef = firebase.database().ref('musicianlocations/');
    starCountRef.on('value', gotData, errData);
    //     (snapshot) {
    //     firebaseDatabase = snapshot.val();
    //     console.log(firebaseDatabase);
    // });
    function gotData(data) {
        console.log("gotData");

        // cleaning the page
        var existingMarkers = document.getElementsByClassName('spottedmarker');
        for (var m=0; m<existingMarkers.length; m++){
            existingMarkers[m].remove();
        }

        var musdb = data.val();

        var keys = Object.keys(musdb);

        for (var i = 0; i < keys.length; i++) {

            console.log(keys)

            // check that the object was created today
            // year
            var year = parseInt(musdb[keys[i]]['now'].split('-')[0]);

            if (year < new Date().getFullYear()){
                
                // detele on firebase
                firebase.database().ref('musicianlocations/').child(keys[i]).remove();

                // continue
                continue;

            }

            // month
            var month = parseInt(musdb[keys[i]]['now'].split('-')[1]);
            if (month < (new Date().getMonth() + 1)){
                
                // detele on firebase
                firebase.database().ref('musicianlocations/').child(keys[i]).remove();

                // continue
                continue;

            }

            // day
            var day = parseInt(musdb[keys[i]]['now'].split('-')[2]);
            if (year < new Date().getDate()){
                
                // detele on firebase
                firebase.database().ref('musicianlocations/').child(keys[i]).remove();

                // continue
                continue;

            }


            // console.log(musdb[keys[i]]['now'])

            // creating an array for the time now
            var nowNow = [];

            // pushing the hours now to nowNow[0]
            nowNow.push(new Date().getHours());

            // pushing the hours now to nowNow[1]
            nowNow.push(new Date().getMinutes());

            // creating an array for untilNow[hours, minutes]
            var untilWhen = musdb[keys[i]]['untilWhen'].split(':');

            // parsing the strings to ints
            untilWhen[0] = parseInt(untilWhen[0]);
            untilWhen[1] = parseInt(untilWhen[1]);

            if (nowNow[0] < untilWhen[0]) {

                // adding graphics
                var elspotted = document.createElement("div");
                elspotted.className = "spottedmarker";
                elspotted.id = keys[i];
                var spottedmusician = new mapboxgl.Marker(elspotted)
                    .setLngLat(musdb[keys[i]]['latlng'])
                    .addTo(map);

            } else if (nowNow[0] == untilWhen[0]) {

                if (nowNow[1] < untilWhen[1]) {
                // adding graphics
                var elspotted = document.createElement("div");
                elspotted.className = "spottedmarker";
                elspotted.id = keys[i];
                var spottedmusician = new mapboxgl.Marker(elspotted)
                    .setLngLat(musdb[keys[i]]['latlng'])
                    .addTo(map);  
                
                } else {
                    // delete the firebase object
                    firebase.database().ref('musicianlocations/').child(keys[i]).remove();
                
                }

            } else {
                // delete the firebase object
                firebase.database().ref('musicianlocations/').child(keys[i]).remove();
            
            }

        }
    }

    function errData(){
        console.log("massive error");
    }

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