import React, { useState } from "react";

function App() {
    const [headingText, setHeadingText] =useState("King of Hell")
    const [isMouseOver , setMouseOver] = useState(false);
    function HandelClick(){
        //console.log("clicked")
    setHeadingText("King")    
    }

    function HandleMouseOver(){
     //console.log("White");
    setMouseOver(true) 
    }

     function HandleMouseOut(){
        setMouseOver(false);
     }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}} 
      onClick={HandelClick}
      onMouseOver={HandleMouseOver}
      onMouseOut={HandleMouseOut}>Submit</button>
    </div>
  );
}

export default App;
