var hardCorner1 = L.latLng(40.855141, -3.846709);
var hardCorner2 = L.latLng(41.037635, -4.295787);
bounds = L.latLngBounds(hardCorner1, hardCorner2);

var animationCorner1 = L.latLng(40.992416, -4.243838);
var animationCorner2 = L.latLng(40.893644, -4.021705);
animationBounds = L.latLngBounds(animationCorner1, animationCorner2);


var map = L.map('map', {
    center: [40.942902, -4.1088],
    // center: [39, 34],
    zoom: 13,
    minZoom: 13
});

L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: 'bac66d3ee926413f8dcd9fdbdac07442',
	maxZoom: 22
}).addTo(map);


// map.flyTo(animationBounds);

// map.dragging.disable();
map.setMaxBounds(bounds);
// var Thunderforest_Pioneer = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
// 	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	apikey: '<your apikey>',
// 	maxZoom: 22
// });
// Thunderforest_Pioneer.addTo(map);