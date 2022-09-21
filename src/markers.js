import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import cities from "./cities.json";

export default function App() {
    const position = [20.5937, 78.9629];
    const [map, setMap] = useState(null);

    const [coords, setCoords] = useState({});
    const [pop, setpop] = useState(null);

    useEffect(() => {
        console.log(map + "tttt");
        if (!map) {
            console.log(map + "i");
            return;
        } else {
            console.log(map + "e");
            map.addEventListener("click", (e) => {
                console.log(e.latlng.lat);
                setpop([e.latlng.lat, e.latlng.lng]);
                setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
            });
        }   
    }, [map]);

  
    const { lat, lng } = coords;
    console.log(pop);

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
               {cities.map((city, idx) => (
                <Marker 
                  position={[city.lat, city.lng]}
                
                  key={idx}
                >
                  <Popup>
                    <b>
                      {city.city}, {city.population}
                    </b>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {lat && (
                <div>
                    <b>latitude</b>: {lat?.toFixed(4)} <br />
                    <b>longitude</b>: {lng?.toFixed(4)}
                </div>
            )}
        </>
    );
}
