
import "../../assets/stlyes/Login.css";
import React from "react";
import logo from "../../assets/images/MappixLogo.png";
import Account from "../../assets/images/IconAccount.png";
import NotVisible from "../../assets/images/IconNotVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";
import * as apiHelper from '../../api/apihelper';
import constantStrings from '../../constants/constants';
const Urls = require('../../api/DybamicUrls');

function Login() {
  function passwordVisibilityToggle() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function loginValidation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;
    /* Upper Case - atleast 1 
    Lower Case - atleast 1
    Numeric - atleast 1
    Special Char - atleast 1
    Total characters - atleast 8*/
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailRegex.test(email)) {
      if (passwordRegex.test(password)) {
        Login()
      } else {
        console.log("Enter Valid Password");
      }
    } else {
      console.log("Enter Valid Email");
    }
  }

  async function Login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    sessionStorage.setItem("email", email)
    const userLogin = await apiHelper.userLogin({
      email: email, password: password
    })
    if (userLogin.error) {
      console.log(userLogin.error);
    } else {
      console.log(userLogin)
      window.location = Urls.pageEndpoint.authentication;
      // switch (userLogin[0].userType) {
      //   case "Admin":
      //     window.location = Urls.AdminPageEndpoints.schools;
      //     break;
      //   case "Teacher":
      //     window.location = Urls.pageEndpoint.classes;
      //     break;
      //   default:
      //     window.location = Urls.pageEndpoint.login;
      // }
    }
  }
  function navigateToReg() {
    window.location = Urls.pageEndpoint.registration;
  }
  return (
    <div className="loginPage">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">{constantStrings.strings.TrulyInformativeAssessment}</p>
        <a className="link" href="beam-education.co.uk">
          {constantStrings.strings.beamEducationLink}
        </a>
        <div className="social-media">
          <img src={facebookSquare} className="fb-logo" alt="Faceboook" />
          <img src={linkedin} className="linkedin-logo" alt="LinkedIm" />
        </div>
        <p className="copyright">{constantStrings.strings.beamCopyright}</p>
      </div>
      <div className="rightPart">
        <p className="welcome-title">{constantStrings.strings.Welcome}</p>
        <p className="welcome-subtitle">
          {constantStrings.strings.PleaseEnterYourEmailAddressAndPassword}
        </p>
        <div className="logo-textbox">
          <input className="textbox1" id="email" placeholder="Email@address.co.uk"></input>
          <img src={Account} className="AcoountLogo" alt="acc-logo"></img>
        </div>
        <div className="logo-textbox">
          <input className="textbox1" id="password" type="password" placeholder="Password"></input>
          <img src={NotVisible} className="AcoountLogo" alt="eye-logo" onClick={passwordVisibilityToggle} ></img>
        </div>
        <div className="login-forgot">
          <button class="login-button" type="button" onClick={loginValidation}>
            <p className="login-button-text">{constantStrings.strings.Login}</p>
            <img src={RightArrow} className="button-logo" alt="login"></img>
          </button>
          <p className="forgot-password">{constantStrings.strings.ForgotYourPassword}</p>
        </div>
        <button className="reg-link" onClick={navigateToReg}>
          {constantStrings.strings.NewtoMappix}
        </button>
        <img
          src={HexagonCharacter}
          className="hexagon-logo"
          alt="hexagon-character"
        ></img>
      </div>
    </div>
  );
}

export default Login;
