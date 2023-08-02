import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
function CreatingInfoEmoji(emoji){
   return <Card 
    name={emoji.name}
    emoji={emoji.emoji}
    info={emoji.meaning}
    key={emoji.id}
   />
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary" >
     
        {emojipedia.map(CreatingInfoEmoji)}

      </dl>

      
        </div>
  );
}

export default App;
