import React from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

const App = () => {
  const fireNotification = useNotification("Hello?", { body: "I noticed you" });
  return <button onClick={fireNotification}>Notification</button>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
