//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const c = d.getHours();
let dyStyle = { color: "" };
let text;
if (c < 12) {
  text = "Good Morining";
  dyStyle.color = "red";
} else if (18 > c && c >= 12) {
  text = "Good Afternoon";
  dyStyle.color = "green";
} else {
  text = "Good Night";
  dyStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={dyStyle}>
      {" "}
      {text}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
