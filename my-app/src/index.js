import animal from "./data.js";

const animal_name = animal.map((name) => name.name);
const animal_sound = animal.map((name) => name.sound);

console.log(animal_name);
console.log(animal_sound);








// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//        <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{tesla.TopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{honda.TopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
