import React, { useState } from "react";
import Axios from "axios";

import "../../assets/stlyes/registration.css";

import logo from "../../assets/images/MappixLogo.png";
import Account from "../../assets/images/IconAccount.png";
import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";

function Registration() {
  const [isVerify, setIsVerify] = useState(true);

  function sendOtp() {
    var email = document.getElementById("email").value;
    setIsVerify(false);
    Axios.post(sessionStorage.getItem("connection_url") +"/send_otp", {
      email: email,
    })
      .then((response) => {
        console.log(response.data.otp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function verifyOtp() {
    var email = document.getElementById("email").value;
    var verify_otp = document.getElementById("verify_otp").value;
    sessionStorage.setItem("Email" , email);
    Axios.post(sessionStorage.getItem("connection_url") +"/verify_otp", {
      email: email,
      verify_otp: verify_otp,
    })
      .then((response) => {
        if (response.data === "OK") {
          window.location = "/Password";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Reg-Page">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">Truly informative assessment</p>
        <a className="link" href="beam-education.co.uk">
          beam-education.co.uk
        </a>
        <div className="social-media">
          <img src={facebookSquare} className="fb-logo" alt="Faceboook" />
          <img src={linkedin} className="linkedin-logo" alt="LinkedIm" />
        </div>
        <p className="copyright">© 2023 Beam Education</p>
      </div>
      <div className="rightPart">
        <p className="welcome-title">Registration.</p>
        <p className="welcome-subtitle">
          Please enter your email address to register.
        </p>
        <div className="logo-textbox">
          <input
            className="textbox1"
            placeholder="Email@address.co.uk"
            id="email"
          ></input>
          <img src={Account} className="AcoountLogo" alt="acc-logo"></img>
        </div>
        {isVerify ? (
          <>
            <div className="otp-btn">
              <button
                className="Otp-send-btn"
                onClick={(e) => {
                  sendOtp();
                }}
              >
                Send OTP
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="otp-verification">
              <input
                className="textbox1"
                placeholder="Enter the OTP sent to your mail"
                id="verify_otp"
              />
              <div className="otp-btn">
                <button className="Otp-send-btn" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Registration;
