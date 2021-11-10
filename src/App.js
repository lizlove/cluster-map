import React from "react";
import "./app.css";
import Map from "./Map";
import { Button, Grid, Row, Column } from "carbon-components-react";
import { FreeCameraOptions } from "mapbox-gl";

export default function App() {
  return (
    <div className="app">
      <Grid>
        <Row>
          <Column sm={2} md={4} lg={6}>
            <Button kind="primary">Button</Button>
          </Column>
          <Column sm={2} md={4} lg={6}>
            <Map />
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
