
// console.log(animal);
// const [cat,dog] =animal;
// console.log(cat);
// const {name:catName,sound:catSound ,Yonko:oldYonko}=cat;
// console.log(oldYonko);
// CHALLENGE: uncomment the code below and see the car stats rendered

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [Honda,Tesl] = cars;

const {
    speedStats:{topSpeed : hondaTopSpeed}
} = Honda;

const {speedStats : {topSpeed : teslTopSpeed } }= Tesl

const {
    coloursByPopularity:[hondaTopColour]
} = Honda;
const {
    coloursByPopularity:[teslTopColour]
} = Tesl;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
       <th>Top Colour</th>
    </tr>
    <tr>
      <td>{Tesl.model}</td>
      <td>{teslTopSpeed}</td>
      <td>{teslTopColour}</td>
    </tr>
    <tr>
      <td>{Honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
