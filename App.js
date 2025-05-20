const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React"
);

{
  /* <div id="parent">
  <div id="child1">
    <h1>I'm an H1 tag</h1>
    <h2>I'm an H2 tag</h2>
  </div>
  <div id="child12">
    <h1>I'm an H1 tag</h1>
    <h2>I'm an H2 tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child12",
      },
      [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag"),
      ]
    ),
  ]
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent);
