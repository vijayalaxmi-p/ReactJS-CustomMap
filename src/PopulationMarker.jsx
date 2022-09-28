import React, { useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./styles.css";
import CitiesList from './citiesList';
import Optisol from './optisol';
import CitiesOptisol from './citiesOptisol';

export default function App() {
  const position = [20.5937, 78.9629];
  const [pop, setPop] = useState(null);
  const onPopulation = (e) => {
    setPop(e.target.value);
  };
  const onOptisol = (e) => {
    setPop(e.target.value);
  };
  return (
    <>
      <button onClick={onPopulation} value="population">population</button>
      <button onClick={onOptisol} value="optisol">Optisol</button>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "90vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {pop === 'population' ?  <CitiesList /> : pop === 'optisol' ? <Optisol />  : <CitiesOptisol />  }
      </MapContainer>

    </>
  );
}
