import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useFullScreen from "./useFullScreen";

const App = () => {
  const onFullScr = (isFull) => {
    console.log(isFull ? "Full" : "Small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullScr);
  return (
    <div>
      <div ref={element}>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25A6%25AC%25EC%2595%25A1%25ED%258A%25B8_(%25EC%259B%25B9_%25ED%2594%2584%25EB%25A0%2588%25EC%259E%2584%25EC%259B%258C%25ED%2581%25AC)&psig=AOvVaw144shhgOvPj8PG9MPAXGvG&ust=1611919551645000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjX-LPCvu4CFQAAAAAdAAAAABAD"
          alt="react"
        />
        <button onClick={exitFull}>Exit Screen</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
