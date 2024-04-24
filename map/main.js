var mapOptions = {
    center: [140.9429, 4.1088],
    zoom: 10
 }
// var map = L.map('map', mapOptions).setView([40.9429, -0.09], 13);
var map = L.map('map', {
    center: [40.942902, -4.1088],
    zoom: 13
});

L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: 'bac66d3ee926413f8dcd9fdbdac07442',
	maxZoom: 22
}).addTo(map);
// var Thunderforest_Pioneer = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
// 	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	apikey: '<your apikey>',
// 	maxZoom: 22
// });
// Thunderforest_Pioneer.addTo(map);