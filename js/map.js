mapboxgl.accessToken = 'pk.eyJ1Ijoic3VsZWJlcnJhIiwiYSI6ImNqN2tyNWE5ejJkNTQzM250bjlhNDU1cGUifQ.gG1gUGCN16JvZnKFvxZTUg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/suleberra/cjex5amaz03382ro4webnul0h', // stylesheet location
    center: [4.625303494062859,52.43370081519061], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', function () 
{
    // Add a symbol layer.
    map.addLayer(
    {
        "id": "hotels",
        "type": "symbol",
        "source": 
        {
            "type": "geojson",
            "data": 'https://rawgit.com/suleberra/mapbox/master/hotel_deneme.json'
        },
        "layout": 
        {
            "icon-image": "rocket-15"
        }
    });

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    map.on('click', 'hotels', function (e) {
        map.flyTo({center: e.features[0].geometry.coordinates});
        openNav();
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