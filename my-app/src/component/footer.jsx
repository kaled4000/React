import React from "react";
import ReactDom from "react-dom";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <p>Copywrite is Saved at {year}</p>
    </footer>
  );
}

export default Footer;
