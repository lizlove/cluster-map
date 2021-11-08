import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Popup from "./Popup";
import data from "./cluster-data.json";

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
    // Create popup nodes
    data.clusters.forEach((cluster) => {
      console.log("♣️", cluster.id);
      let popupNode = document.createElement("div");
      let clusterInfo = {
        title: cluster.title,
        description: cluster.description,
        id: cluster.id,
        lngLat: cluster.lngLat,
      };
      ReactDOM.render(<Popup cluster={clusterInfo} />, popupNode);

      popupRef.current
        .setLngLat(cluster.lngLat)
        .setDOMContent(popupNode)
        .addTo(map.current);
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
