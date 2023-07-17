import "../../assets/stlyes/Login.css";
import React from "react";
import logo from "../../assets/images/MappixLogo.png";
import NotVisible from "../../assets/images/IconNotVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";
import constantStrings from "../../constants/constants";
import { OtpVerification } from "../../api/apihelper";
const Urls = require("../../api/DybamicUrls");

function Authentication() {
  function OtpVisibilityToggle() {
    var x = document.getElementById("otp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  async function OtpValidation() {
    let otp = document.getElementById("otp").value;
    if (otp.length === 6) {
      console.log(otp);
      let user_email = sessionStorage.getItem("email");
      // let jwt = sessionStorage.getItem("sessionToken");
      let otpverify = await OtpVerification({ otp: otp, email: user_email });
      if (otpverify.error) {
        console.log(otpverify.error);
      } else {
        console.log("----------Authentication--------------");
        console.log(otpverify);
        console.log(otpverify[0].userName);
        switch (otpverify[0].userType) {
          case "Admin":
            window.location = Urls.AdminPageEndpoints.schools;
            break;
          case "Teacher":
            window.location = Urls.pageEndpoint.classes;
            break;
          default:
            window.location = Urls.pageEndpoint.login;
        }
      }
    } else {
      console.log("OTP must be 6 digits");
    }
  }

  return (
    <div className="loginPage">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">{constantStrings.strings.beamEducationLink}</p>
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
        <p className="welcome-title">
          {constantStrings.strings.PleaseEnterOTP}
        </p>
        <p className="welcome-subtitle">
          {constantStrings.strings.EnterValidOTPtoLogin}
        </p>
        <div className="logo-textbox">
          <input
            className="textbox1"
            id="otp"
            type="password"
            placeholder="OTP"
            maxLength="6"
          ></input>
          <img
            src={NotVisible}
            className="AcoountLogo"
            alt="eye-logo"
            onClick={OtpVisibilityToggle}
          ></img>
        </div>
        <div className="login-forgot">
          <button class="login-button" type="button">
            <p className="login-button-text">
              {constantStrings.strings.Submit}
            </p>
            <img
              src={RightArrow}
              className="button-logo"
              onClick={OtpValidation}
              alt="Submit"
            ></img>
          </button>
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

export default Authentication;
