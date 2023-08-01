import  React  from "react";
import  ReactDOM  from "react-dom";

const name = "king of hell ";
const cureent_year= new Date().getFullYear();;

ReactDOM.render(<div>
<h2> created by {name}</h2>
<h3>copyright &copy; {cureent_year}</h3>
</div>
,document.getElementById("root"));