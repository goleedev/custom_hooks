import React from "react";
import ReactDOM from "react-dom";
import useConfirm from "./useConfirm";

const App = () => {
  const deleteWorld = () => console.log("Delete all");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
