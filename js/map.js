mapboxgl.accessToken = 'pk.eyJ1Ijoic3VsZWJlcnJhIiwiYSI6ImNqN2tyNWE5ejJkNTQzM250bjlhNDU1cGUifQ.gG1gUGCN16JvZnKFvxZTUg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/suleberra/cjfqr6rn1031a2srp70x7pgz5', // stylesheet location
    center: [4.89228829624804, 52.37710810531087], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('load', function() {
    map.loadImage('https://rawgit.com/ClockworkAMA/ClockworkAMA.github.io/master/img/island.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": 'https://rawgit.com/ClockworkAMA/ClockworkAMA.github.io/master/data/interventions.json'
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.5
            }
        });
    });
});

// Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
map.on('click', 'hotels', function (e) {
    map.flyTo({ center: e.features[0].geometry.coordinates });
    openNav(e.features[0].properties.name);
});

// Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
map.on('mouseenter', 'hotels', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'hotels', function () {
    map.getCanvas().style.cursor = '';
});