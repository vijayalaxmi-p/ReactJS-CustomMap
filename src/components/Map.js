import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
  '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



export default class Maps extends Component {
  state = {
    lat: 13.0827,
    lng: 80.2707,
    zoom: 8,
  }


  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <MapContainer center={position} zoom={this.state.zoom} style={{ height: '90vh', width: '100vw' }}  >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Son Konum
          </Popup>
        </Marker>
      </MapContainer>
    )
  }
}