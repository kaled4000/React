import React, { useState } from "react";


function App() {

  const [fname,SetNname] =useState("");
  const [lname,SetLname] =useState("");
  const [lname_2,SetLname_2]=useState(lname);

  function handlechange(e){
    SetNname(e.target.value)
  }
  function handl(e){
    SetLname(e.target.value)
  }
  function HandleSubmit(event){
   SetLname_2(lname)
   event.preventDefault();
  }

 
  return (
    <div className="container">
      <h1>Hello {fname} {lname_2}</h1>
      <form>
        <input name="fName" onChange={handlechange} placeholder="First Name" />
        <input name="lName" onChange={handl} placeholder="Last Name" />
        <button onClick={HandleSubmit}  >Submit</button>
      </form>
    </div>
  );
}

export default App;
