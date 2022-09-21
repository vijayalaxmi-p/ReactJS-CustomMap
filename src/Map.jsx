import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";

class Map extends Component {
  state = { map: null };
  
componentDidMount()
{
  console.log('mount');
    map.addEventListener("click", (e) => {
      console.log(e.latlng.lat);
      
    });
     const { map } = this.state;
}
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('HI');
  //   map.addEventListener("click", (e) => {
  //     console.log(e.latlng.lat);
      
  //   });
  //    const { map } = this.state;
  //   // if (prevState.map !== map && map) {
  //   //   console.log('HIii');
  //   //   map.on('click', function (e) {
  //   //     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
  //   //   });
  //   // }
  // }
  

  render() {
    const DEFAULT_LATITUDE = 13.0827;
    const DEFAULT_LONGITUDE = 80.2707;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;
    const longitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LONGITUDE;

    return (
      <MapContainer
        className="leaflet-map"
        center={[latitude, longitude]}
        zoom={17}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        whenCreated={(map) => this.setState({ map }) }
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>Here you are ^_^</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;