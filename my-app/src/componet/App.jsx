import React ,{useState} from "react";
//import ReactDOM  from "react-dom";

function App() {
  //var count = 0;
  
  const [count,setCount]= useState(0);

  //console.log(count);
  // RGB_color
  // const [red,green,blue] = [9,132,227];
  // console.log(blue);

  function Increse(){
    //count++;
    setCount(count + 1)
  }      
  function Reduce(){
    setCount(count - 1)
  }
    return <div className="container">
  <h1>{count}</h1>
  <button onClick={Reduce}>-</button>
  <button onClick={Increse}>+</button>

</div>
 
}

export default App;
