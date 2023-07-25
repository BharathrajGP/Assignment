import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../Styles/Navbar.css";
// import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {

    const [openLinks,setOpenLinks]=useState(false)

    function toggleNavbar(){
        setOpenLinks(!openLinks);
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? 'open':'close'}>
        <Header />
        <div className="hiddenLinks">
          <Link to="/check_bal">Check Balance</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/withdraw">Withdrawal</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/check_bal">Check Balance</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdrawal</Link>
        <Link to="/login">Log Out</Link>
        {/* <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
