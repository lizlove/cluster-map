import React from "react";
import "./app.css";
import Map from "./Map";
import { Grid, Row, Column } from "carbon-components-react";

import data from "./cluster-data.json";

export default function App() {
  return (
    <div className="app">
      <Grid>
        <Row className="row">
          <Column sm={4} md={6} lg={12}>
            <h1>Flatiron Cluster Computing</h1>
            <h2>Two Clusters, Three Locations, More than 130,000 Cores</h2>
          </Column>
          <Column sm={4} md={6} lg={12}>
            <Map mapSize="mapboxgl-lg-map" zoom={4} data={data} />
          </Column>
        </Row>
        <Row className="row">
          <Column sm={4} md={6} lg={5}>
            <h3>Rusty (Iron cluster)</h3>
            <p>
              Located at Flatiron Institute acorss two buildings on Fifth Avenue
              in NYC and CoreSite Data Center in Seacaucus, New Jersey
            </p>
          </Column>
          <Column sm={4} md={6} lg={7}>
            <p className="chart-title">Flatiron Cluster Locations</p>
            <Map mapSize="mapboxgl-map" zoom={4} data={data} />
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
