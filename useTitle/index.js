import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useTitle from "./useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div className="App"></div>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
