import React, { useState } from "react";

function App() {
    const [name,setName]=useState("");
    const [fullname,setfullname]= useState("");

    function HandleChange(event){
        console.log(event.target.value);
        setName(event.target.value)
    }
    function HandleClick(){
      setfullname(name);
    }
    //console.log(HandleClick)
  return (
    <div className="container">
      <h1>Hello {fullname} </h1>
      <input value={name} onChange={HandleChange} type="text" placeholder="What's your name?" />
      <button onClick={HandleClick}>Submit</button>
    </div>
  );
}

export default App;
