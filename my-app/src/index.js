//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./componet/App.jsx";
import emojipedia from "./emojipedia.js";

// 1 log specfic array

//console.log(emojipedia);

// log secfic elemnt inside object inside array
// log only text
const mean=emojipedia.map(function (element)  {
    return element.meaning.substring(0,100)
});
console.log(mean)


