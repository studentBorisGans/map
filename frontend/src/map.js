import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import React, {Component} from "react";




console.log("Map");


var hardCorner1 = L.latLng(40.855141, -3.846709);
var hardCorner2 = L.latLng(41.037635, -4.295787);
var bounds = L.latLngBounds(hardCorner1, hardCorner2);

var animationCorner1 = L.latLng(40.992416, -4.243838);
var animationCorner2 = L.latLng(40.893644, -4.021705);
var animationBounds = L.latLngBounds(animationCorner1, animationCorner2);

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("button").style.visibility = "hidden";

}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("button").style.visibility = "visible";
}

export default class Map extends Component {
    state = {
        lat: 37.7749,
        lng: -122.4194,
        zoom: 13,
    }
    render() {
        return (
            this.props.incidents ?
            <Map 
               center={[this.state.lat, this.state.lng]} 
               zoom={this.state.zoom} 
               style={{ width: '100%', height: '900px'}}>
            <TileLayer
              attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            this.props.incidents.map(incident => {
                const point = [incident['point']['coordinates'][1],incident['point']['coordinates'][0]]
         

            return (
                <Marker position={point} key={incident['incident_number']} >
                    <Popup>
                        <span>ADDRESS: {incident['address']}, {incident['city']} - {incident['zip_code']}</span>
                        <br/>
                        <span>BATTALION: {incident['battalion']}</span><br/>
                    </Popup>
                </Marker>
            )
            })
            }
           </Map>
            :
            "Map is loading"

        )
     }
 }
 

// const MapExport = () => {
    const map = new L.Map('map', {
        center: [40.942902, -4.1088],
        // center: [39, 34],
        zoom: 13,
        minZoom: 13,
        zoomControl: false
    });
    
    L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: 'bac66d3ee926413f8dcd9fdbdac07442',
        maxZoom: 22
    }).addTo(map);
    
    var myIcon = new L.icon({
        iconUrl: "x.png",
        iconSize: [35, 35],
        // iconAnchor: [22, 94],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    })
    
    L.Marker.prototype.options.icon = myIcon;
    
    
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    map.setMaxBounds(bounds);
    
    map.on("click", function(e) {
        var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    })
    // return (
    //     Map
    //     // console.log(data)
    // )
// }


// map.on("click", onMapClick(e));
// function onMapClick(e) {
//     var marker = L.marker(e.latLng).addTo(map);
// }
// export default map


