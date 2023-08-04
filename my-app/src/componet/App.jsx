import React, { useState } from "react";


function App() {

  const [inputText,SetinputText] =useState("");
  const [items,SetItems] = useState([])
  function HandleChange(event){
   const newvalue =event.target.value;
   SetinputText(newvalue);
  }
  function AddItem(){
    SetItems((prevItems) => {
     return [...prevItems,inputText]
    });
    SetinputText("")
  }
 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} 
        onChange={HandleChange} />
        <button
        onClick={AddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((to_do_item) => <li>{to_do_item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
