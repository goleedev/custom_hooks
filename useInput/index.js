import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms. ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
