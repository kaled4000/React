import  React  from "react";
import  ReactDOM  from "react-dom";


import pi,{doublepi,thridenpi} from "./math";
ReactDOM.render(
<div>
   <h1>Import & Export </h1>
   <ul>
      <li>{pi}</li>
      <li>{doublepi}</li>
      <li>{thridenpi}</li>
   </ul>
</div>
,document.getElementById("root"));