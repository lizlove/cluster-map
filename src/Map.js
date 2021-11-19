import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Popup from "./Popup";

require("mapbox-gl/dist/mapbox-gl.css");
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxvdmVybyIsImEiOiJja3RvZ3pja3cwY3I3Mm9wOThyeTRiNG5hIn0.tBK7GERT9q0Ew9juN6Aa2w";

export default function Map(props) {
  const mapContainer = useRef(null);
  const popupRefs = [];
  const markerRefs = [];

  console.log("🙅‍♂️", props);

  for (const clust of props.data.clusters) {
    markerRefs.push(useRef(new mapboxgl.Marker({})));
    popupRefs.push(useRef(new mapboxgl.Popup({ offset: 25 })));
  }

  console.log("markerRefs", markerRefs);

  // See: https://github.com/mapbox/mapbox-react-examples/blob/master/react-tooltip/src/Map.js

  const map = useRef(null);
  const [lng, setLng] = useState(-96.35);
  const [lat, setLat] = useState(39.5);
  const [zoom, setZoom] = useState(props.zoom);

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

  // Add markers and popups
  useEffect(() => {
    if (!map.current) return;
    // Create popup nodes
    props.data.clusters.forEach((cluster, i) => {
      let markerNode = document.createElement("div");
      markerNode.id = `marker-${cluster.id}`;

      let popupNode = document.createElement("div");
      let clusterInfo = {
        title: cluster.title,
        description: cluster.description,
        id: cluster.id,
        lngLat: cluster.lngLat,
      };
      ReactDOM.render(<Popup cluster={clusterInfo} />, popupNode);

      popupRefs[i].current.setDOMContent(popupNode);

      markerRefs[i].current
        .setLngLat(cluster.lngLat)
        .setPopup(popupRefs[i].current)
        .addTo(map.current);
    });
  });

  return (
    <div>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className={props.mapSize} />
    </div>
  );
}
