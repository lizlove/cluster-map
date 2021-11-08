import React from "react";

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
