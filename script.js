const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {},
      "i am an h1 tag, child of div child which is the child of div parent"
    ),
    React.createElement(
      "h2",
      {},
      "i am an h2 tag, child of div child which is child of div parent"
    ),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      {},
      "i am an h1 tag, child of div child which is the child of div parent"
    ),
    React.createElement(
      "h2",
      {},
      "i am an h2 tag, child of div child which is child of div parent"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (parent);
 