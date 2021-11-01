import React, { Component } from "react";
import "./map.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <h1> I'm a Map </h1>
      </div>
    );
  }
}

export default Map;