import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
