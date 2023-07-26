import React from "react";

import "../../assets/stlyes/Login.css";

import logo from "../../assets/images/MappixLogo.png";
import NotVisible from "../../assets/images/IconNotVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";

import { Common, Roles,SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from '../../util/SessionStorage'

import * as commonApi from '../../api/commonApi';
import { AdminPages, CommonPages, SchoolPages } from '../../helper/apiRoutes'

function Authentication() {
  function OtpVisibilityToggle() {
    console.log("OtpVisibilityToggle");
    var x = document.getElementById("otp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  async function OAuth() {
    console.log("OAuth");
    var email = SessionStorage.getItem("email")
    var otp = document.getElementById("otp").value;
    const OtpAuth = await commonApi.user2FA({
      email: email, otp: otp
    });
    if (OtpAuth.error) {
      console.log(OtpAuth.error);
    } else {
      console.log(OtpAuth.data.Items)
      SessionStorage.setItem(SessionStorageKeys.SessionToken, OtpAuth.data.Items.jwt)
      SessionStorage.setItem(SessionStorageKeys.UserName, OtpAuth.data.Items.userName)
      switch (OtpAuth.data.Items.userType) {
        case Roles.Admin:
          window.location = AdminPages.schools;
          break;
        case Roles.SchoolAdmin:
          window.location = SchoolPages.classes;
          break;
        case Roles.LeadTeacher:
          window.location = SchoolPages.classes;
          break;
        case Roles.Teacher:
          window.location = SchoolPages.classes;
          break;
        default:
          window.location = CommonPages.login;
      }
    }
  }
  return (
    <div className="loginPage">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">{Common.beamEducationLink}</p>
        <a className="link" href="beam-education.co.uk">
          {Common.beamEducationLink}
        </a>
        <div className="social-media">
          <img src={facebookSquare} className="fb-logo" alt="Faceboook" />
          <img src={linkedin} className="linkedin-logo" alt="LinkedIm" />
        </div>
        <p className="copyright">{Common.beamCopyright}</p>
      </div>
      <div className="rightPart">
        <p className="welcome-title">{Common.PleaseEnterOTP}</p>
        <p className="welcome-subtitle">
          {Common.EnterValidOTPtoLogin}
        </p>
        <div className="logo-textbox">
          <input className="textbox1" id="otp" type="password" placeholder="OTP"></input>
          <img src={NotVisible} className="AcoountLogo" alt="eye-logo" onClick={OtpVisibilityToggle}></img>
        </div>
        <div className="login-forgot">
          <button class="login-button" type="button" onClick={OAuth} >
            <p className="login-button-text">{Common.Submit}</p>
            <img src={RightArrow} className="button-logo" alt="Submit"></img>
          </button>
        </div>
        <img
          src={HexagonCharacter}
          className="hexagon-logo"
          alt="hexagon-character"
        ></img>
      </div>
    </div>
  )
}

export default Authentication