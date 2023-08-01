import  React  from "react";
import  ReactDOM  from "react-dom";

const fname ="Zoro vs ";
const lname ="King";
const age = 39;


ReactDOM.render(<div>
<h1>welcom to {fname+lname}</h1>
<h2>my age is {age}</h2>
<p>you can write any js expression isnside carlecrass {Math.floor(Math.random()*10)}</p>
</div>
,document.getElementById("root"));