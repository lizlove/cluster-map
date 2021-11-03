import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Popup from "./Popup";

import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxvdmVybyIsImEiOiJja3RvZ3pja3cwY3I3Mm9wOThyeTRiNG5hIn0.tBK7GERT9q0Ew9juN6Aa2w";

export default function Map() {
  const mapContainer = useRef(null);
  const popupRef = useRef(new mapboxgl.Popup({ offset: 25 }));
  // See: https://github.com/mapbox/mapbox-react-examples/blob/master/react-tooltip/src/Map.js

  const map = useRef(null);
  const [lng, setLng] = useState(-96.35);
  const [lat, setLat] = useState(39.5);
  const [zoom, setZoom] = useState(4);

  // Initialize map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/carbondesignsystem/ck7c8cfpp08h61irrudv7f1xg",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // Plot long / lat and zoom in top corner
  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  // Add markers and popups
  useEffect(() => {
    if (!map.current) return;
    // Create popup node
    const popupNode = document.createElement("div");
    ReactDOM.render(<Popup location={location} />, popupNode);

    popupRef.current
      .setText("Yo Yo YO")
      .setLngLat([-73.99102684603675, 40.74121894384252])
      .setDOMContent(popupNode)
      .addTo(map.current);
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
