import React from "react";
import King from "./King";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p>This is an {props.Id}</p>
        <h2 className="name">{props.name}</h2>
        <King img={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
