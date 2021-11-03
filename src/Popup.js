import React from "react";

const Popup = ({ location }) => {
  const { id } = location.id;

  return (
    <div id={`popup-${id}`}>
      <strong>Title:</strong> {location.title}
      <br />
      <strong>Description:</strong> {location.description}
    </div>
  );
};

export default Popup;
