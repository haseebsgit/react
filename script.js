import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child-1" },
    [
      React.createElement("h1", { key: "h1-1" }, "Haseeb Farooq"),
      React.createElement("h2", { key: "h2-1" }, "React"),
      React.createElement("h3", { key: "h3-1" }, "JavaScript"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child-2" },
    [
      React.createElement("h1", { key: "h1-2" }, "Haseeb"),
      React.createElement("h2", { key: "h2-2" }, "React"),
      React.createElement("h3", { key: "h3-2" }, "JavaScript"),
    ]
  ),
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);