import React, { useState } from "react";


function App() {

  const [fname,SetNname] =useState("");
  const [lname,SetLname] =useState("");

  function handlechange(e){
    SetNname(e.target.value)
  }
  function handl(e){
    SetLname(e.target.value)
  }
  
 
  return (
    <div className="container">
      <h1>Hello {fname}{lname}</h1>
      <form>
        <input name="fName" onChange={handlechange} placeholder="First Name"
        // for sure the only thing will change in our varable
         value={fname}   />
        <input name="lName" onChange={handl} placeholder="Last Name" 
        value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
