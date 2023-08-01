  
  //1. Apply CSS styles to App.jsx component
  //to match the appearance on the completed app:
  //https://c6fkx.csb.app/
  //2. Extract the contact card as a reusable Card component.
  //3. Use props to render the default Beyonce contact card
  //so the Card component can be reused for other contacts.
  //4. Import the contacts.js file to create card components.



  import React from "react";
import ReactDOM from "react-dom";
import App from "./comonents/App.jsx";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name"> {props.name}</h2>
          <img
            className="circle-img"
            id="img"
            src={props.src}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.number}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <App />
    <Card
      name="Monkey D Luffy"
      src="https://i.pinimg.com/originals/53/1b/f2/531bf28ee274611ab3b887c9c301d88a.jpg"
      email="Yonko"
      number="Gear 5"
    />
  </div>,
  document.getElementById("root")
);
