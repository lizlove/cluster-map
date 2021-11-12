import React from "react";
import "./app.css";
import Map from "./Map";
import { Grid, Row, Column } from "carbon-components-react";

export default function App() {
  return (
    <div className="app">
      <Grid>
        <Row>
          <Column sm={4} md={6} lg={5}>
            <h2>Flatiron Cluster Computing</h2>
          </Column>
          <Column sm={4} md={6} lg={7}>
            <Map />
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
