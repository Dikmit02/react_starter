import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
const App = () => {

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
  // return React.createElement("div", { id: "somethimg-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cocatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Heelo",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  // ]);
};



// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
