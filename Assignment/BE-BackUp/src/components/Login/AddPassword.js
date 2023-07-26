import React from "react";
import  Axios  from "axios";

import '../../assets/stlyes/Login.css'

import logo from "../../assets/images/MappixLogo.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";

function AddPassowrd() {
    function setPassword(){
        var password  = document.getElementById("password").value;
        var email = sessionStorage.getItem("Email");
        console.log(email , password);
        Axios.post(sessionStorage.getItem("connection_url") + "/set_password" , {email : email , pwd :password}).then((response)=>{
          console.log(response);
          window.location = "/Classes"
        }).catch((error)=>{
          console.log(error);
        })
    }
    return (
        <div className="loginPage">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">Truly informative assessment</p>
        <a className="link" href="beam-education.co.uk">
          beam-education.co.uk
        </a>
        
        <p className="copyright">© 2023 Beam Education</p>
      </div>
      <div className="rightPart">
        <p className="welcome-title">Welcome.</p>
        <p className="welcome-subtitle">
          Please enter a new password
        </p>
        <div className="logo-textbox">
          <input className="textbox1" id="password" type="password" placeholder="Password"></input>
        </div>
        <div className="login-forgot">
          <button class="login-button" type="button" onClick={setPassword}>
            <p className="login-button-text">Continue</p>
            <img src={RightArrow} className="button-logo" alt=""></img>
          </button>
          <p className="forgot-password">Forgot your password?</p>
        </div>
        <img
          src={HexagonCharacter}
          className="hexagon-logo"
          alt="hexagon-character"
        ></img>
      </div>
    </div>
    );
}

export default AddPassowrd;