import  React  from "react";
import  ReactDOM  from "react-dom";

const style ={ 
  color: "red",
  fontSize:"50px",
  border:"10px solid black"
}

ReactDOM.render(<div>
<h1 style= {style}>Hello world !</h1>
</div>
,document.getElementById("root"));