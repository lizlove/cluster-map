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
  const sites = [];

  console.log("🙅‍♂️", props);

  for (const clust of props.data.clusters) {
    for (const site of clust.children) {
      sites.push(site);
      markerRefs.push(useRef(new mapboxgl.Marker({})));
      popupRefs.push(useRef(new mapboxgl.Popup({ offset: 25 })));
    }
  }

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

  useEffect(() => {
    console.log("SITES", sites);
  });

  // Add markers and popups
  useEffect(() => {
    if (!map.current) return;
    // Create popup nodes
    props.data.clusters.forEach((cluster, i) => {
      cluster.children.forEach((site, i) => {
        let markerNode = document.createElement("div");
        markerNode.id = `marker-${site.id}`;

        let popupNode = document.createElement("div");
        let siteInfo = {
          title: site.title,
          description: site.description,
          id: site.id,
          lngLat: site.lngLat,
        };
        ReactDOM.render(<Popup cluster={siteInfo} />, popupNode);

        popupRefs[i].current.setDOMContent(popupNode);

        markerRefs[i].current
          .setLngLat(site.lngLat)
          .setPopup(popupRefs[i].current)
          .addTo(map.current);
      });
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
