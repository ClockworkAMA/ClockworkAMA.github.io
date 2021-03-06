mapboxgl.accessToken = 'pk.eyJ1Ijoic3VsZWJlcnJhIiwiYSI6ImNqN2tyNWE5ejJkNTQzM250bjlhNDU1cGUifQ.gG1gUGCN16JvZnKFvxZTUg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/suleberra/cjfqr6rn1031a2srp70x7pgz5', // stylesheet location
    center: [4.89228829624804, 52.37710810531087], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('load', function () {
    map.loadImage('https://rawgit.com/ClockworkAMA/ClockworkAMA.github.io/master/img/island.png', function (error, image) {
        if (error) throw error;
        map.addImage('island', image);
        map.addLayer({
            "id": "island",
            "type": "symbol",
            "maxzoom": 11,
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [4.959110421064651, 52.375762471163256]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "island"
            }
        });
    });

    map.addLayer(
        {
            "id": "hotels",
            "type": "symbol",
            "minzoom": 15,
            "source":
                {
                    "type": "geojson",
                    "data": 'https://rawgit.com/suleberra/mapbox/master/data/hotel_deneme.json'
                },
            "layout":
                {
                    "icon-image": "rocket-15"
                }
        });


    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    map.on('click', 'island', function (e) {
        map.jumpTo({ center: e.features[0].geometry.coordinates });
        map.zoomTo(14);
    });

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    map.on('mouseenter', 'island', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'island', function () {
        map.getCanvas().style.cursor = '';
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

});