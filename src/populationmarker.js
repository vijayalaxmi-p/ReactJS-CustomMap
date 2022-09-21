import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import all from "./cities_optisol.json";
import L from "leaflet";
import POP_LOGO from './resources/images/population_boy.jpg';
import OPTISOL_LOGO from './resources/images/optisol_img.png';
export default function App() {
  const position = [20.5937, 78.9629];
  const [map, setMap] = useState(null);
  const [pop, setpop] = useState(null);
  const PopulationIcon = L.icon({
    iconUrl: POP_LOGO,
    iconSize: [20, 20],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });
  const OptisolLogo = L.icon({
    iconUrl: OPTISOL_LOGO,
    iconSize: [20, 20],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });
  const onPopulation = (e) => {
    setpop(e.target.value);
  };
  const onOptisol = (e) => {
    setpop(e.target.value);
  };
  console.log(pop);
  return (

    <>

      <button onClick={onPopulation} value="population">population</button>
      <button onClick={onOptisol} value="optisol">Optisol</button>

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
        {pop == "population" ?
          all.map((city, idx) => (
            city.ispoplogo == "true" ?
              <Marker icon={PopulationIcon}
                position={[city.lat, city.lng]}

                key={idx}
              >
                <Popup>
                  <b>
                    {city.city}-{city.year}-{city.population}
                  </b>
                </Popup>
              </Marker> : null
          )) : pop == "optisol" ?
            all.map((optisol, idx) => (
              optisol.isoptilogo == "true" ?
                <Marker icon={OptisolLogo}
                  position={[optisol.lat, optisol.lng]}

                  key={idx}
                >

                  <Popup>
                    <b>
                      {optisol.address}
                    </b>
                  </Popup>
                </Marker> : null
            )) : all.map((all, idx) => (

              // optisol.map((opti,idxx) =>(
              //   idx==idxx ?
              all.isoptilogo == "true" ?
                //all.city == "Thiruvanmiyur" || all.city == "Chinna Chokikulam" || all.city == "Peelamedu" || all.city == "EC1V 2NX" || all.city == "Innovation Centre Sunshine Coast" || all.city == "Sheikh Zayed Road" ?
                <Marker icon={OptisolLogo}
                  position={[all.lat, all.lng]}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {all.address}
                    </b>
                  </Popup>
                </Marker> : <Marker icon={PopulationIcon}
                  position={[all.lat, all.lng]}
                  key={idx}
                >
                  <Popup>
                    <b>
                      {all.city}-{all.year}-{all.population}
                    </b>
                  </Popup>
                </Marker>))}
      </MapContainer>

    </>
  );
}
