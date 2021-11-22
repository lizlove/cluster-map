import React from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";

const Popup = ({ cluster }) => {
  return (
    <div id={`popup-${cluster.id}`}>
      <strong>Title:</strong> {cluster.title}
      <br />
      <strong>Description:</strong> {cluster.description}
    </div>
  );
};

export default Popup;
