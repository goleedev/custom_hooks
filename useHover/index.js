import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useHover from "./useHover";

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useHover(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
