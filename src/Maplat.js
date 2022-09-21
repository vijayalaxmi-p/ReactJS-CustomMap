import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";

export default function App() {
    const position = [20.59, 78.96];
    const [map, setMap] = useState(null);
    const [coords, setCoords] = useState(null);
    
    useEffect(() => {
        if (!map) {
            return;
        } else {
            map.addEventListener("click", (e) => {
                setCoords([e.latlng.lat, e.latlng.lng]);
             });
        }
    }, [map]);
   
    return (
        <>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: "90vh" }}
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords != null ? coords : position}>
                    {coords != null ?
                        <Popup>
                            {'latitude :' + coords[0]?.toFixed(2) + ',longitude :' + coords[1]?.toFixed(2)}
                        </Popup> : <Popup>
                            {'latitude :' + position[0] + ',longitude :' + position[1]}
                        </Popup>}
                </Marker>
            </MapContainer>
        </>
    );
}
