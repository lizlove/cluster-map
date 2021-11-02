import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxvdmVybyIsImEiOiJja3RvZ3pja3cwY3I3Mm9wOThyeTRiNG5hIn0.tBK7GERT9q0Ew9juN6Aa2w";

export default function Map() {
  const mapContainer = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  // See: https://github.com/mapbox/mapbox-react-examples/blob/master/react-tooltip/src/Map.js
  const map = useRef(null);
  const [lng, setLng] = useState(-96.35);
  const [lat, setLat] = useState(39.5);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/carbondesignsystem/ck7c8cfpp08h61irrudv7f1xg",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
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
