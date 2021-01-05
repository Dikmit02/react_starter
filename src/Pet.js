import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h3", {}, props.breed)
//     ])
// }
export default function Pet({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h3", {}, breed),
  //   React.createElement("h3", {}, breed),
  // ]);

  //JSX
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  )
};
