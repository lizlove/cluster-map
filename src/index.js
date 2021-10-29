import React from "react";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
