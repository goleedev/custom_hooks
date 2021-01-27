import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeIn = useFadeIn(3, 2);
  return (
    <div>
      <h1 {...fadeIn}>Hello</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
