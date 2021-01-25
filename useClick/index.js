import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useClick from "./useClick";

const App = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
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
