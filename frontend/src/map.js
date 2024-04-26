import L, { Control, Icon } from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer} from 'react-leaflet';
import * as rl from "react-leaflet";
import React, {useState} from "react";
import ReactDOM from 'react-dom/client';

console.log("Map");


const map = ReactDOM.createRoot(document.getElementById('map'));


var hardCorner1 = L.latLng(40.855141, -3.846709);
var hardCorner2 = L.latLng(41.037635, -4.295787);
var bounds = L.latLngBounds(hardCorner1, hardCorner2);

// var animationCorner1 = L.latLng(40.992416, -4.243838);
// var animationCorner2 = L.latLng(40.893644, -4.021705);
// var animationBounds = L.latLngBounds(animationCorner1, animationCorner2);

var selectedPosition = [];

const xIcon = new Icon({
    iconUrl: "x.png",
    iconSize: [35, 35]
})

// const Markers = () => {
//     const map = rl.useMapEvents({ 
//         click(e) {
//             selectedPosition = [
//                 e.latlng.lat,
//                 e.latlng.lng
//             ];
//         },
//     })
//     return (
//         selectedPosition ?
//             <Marker 
//                 key={selectedPosition[0]}
//                 position={selectedPosition}
//                 icon={xIcon}

            
//             />
//         : null
//     )
// }


const MyMap = () => {
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [markers, setMarkers] = useState([]);

    const handleMapClick = (e) => {
        const newPosition = [e.latlng.lat, e.latlng.lng];
        console.log(newPosition);
        setSelectedPosition(newPosition);
        setMarkers([...markers, newPosition]);
    };

    return (
        <MapContainer center={[40.942902, -4.1088]} zoom={13} zoomControl={false} style={{width: "100%", height:"100%"}} maxBounds={bounds} minZoom={12}>
            <TileLayer 
                attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>'
                url="https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}"
                apikey="bac66d3ee926413f8dcd9fdbdac07442"
                maxZoom={22}
            />
            {markers.map((position, index) => (
                <Marker key={index} position={position} />
            ))}
            <MapClickHandler onClick={handleMapClick} />
            
            {/* <Icon url="x.png" size={[35, 35]}/> */}
            {/* <Marker></Marker> */}
        </MapContainer>
        
    )
}
const MapClickHandler = ({ onClick }) => {
    rl.useMapEvents({
        click(e) {
            onClick(e);
        },
    });
    return null;
};

map.render(<MyMap/>)