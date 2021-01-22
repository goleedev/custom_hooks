import React, { useState } from "react";
import ReactDOM from "react-dom";
import useTabs from "./useTabs";

const content = [
  {
    tab: "section 1",
    content: "This is section 1",
  },
  {
    tab: "section 2",
    content: "This is section 2",
  },
  {
    tab: "section 3",
    content: "This is section 3",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
