import React from "react";
import bank_icon from "../Assets/bank_icon.png";

function Header() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={bank_icon} />
        <h1 style={{ color: "white" }}>Bank Of Mysore</h1>
      </div>
    </div>
  );
}

export default Header;
