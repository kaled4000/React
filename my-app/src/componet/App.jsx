import React ,{useState}from "react";
//import ReactDOM  from "react";
function App(){

  const [count, setCount] = useState[0];
  function Up(){
    return setCount(count + 1);
  }
  function Down (){
    return setCount (count - 1);
  }
    return( <div className="container">
  <h1>{count}</h1>
  <button onClick={Up}>-</button>
  <button onClick={Down}>+</button>

</div>
    );
 
}

export default App;
