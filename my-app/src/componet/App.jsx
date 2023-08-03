import React, { useState } from "react";
//import react-dom from "react-dom";

function App() {
  // function sayHi() {
  //   console.log("Hey");
  // }
  setInterval(Times, 1000);
  let now = new Date().toLocaleTimeString();

  const [time, Update] = useState(now);
  //console.log(now);
  function Times() {
    const current_time = new Date().toLocaleTimeString();
    Update(current_time);
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={Times}>Get Time</button>
    </div>
  );
}

export default App;
