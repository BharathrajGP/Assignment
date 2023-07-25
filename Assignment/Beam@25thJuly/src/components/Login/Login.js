import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';


import "../../assets/stlyes/Login.css";

import logo from "../../assets/images/MappixLogo.png";
import Account from "../../assets/images/IconAccount.png";
import NotVisible from "../../assets/images/IconNotVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";

import { Common, ExternalLinks, SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from "../../util/SessionStorage";
import { LoginValidationSchema } from "../../helper/validator";
import { MESSAGES } from "../../helper/messages";

import * as commonApi from '../../api/commonApi';
import { CommonPages } from '../../helper/apiRoutes';

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [show, setShow] = useState(false);
  const [btnImage, setBtnImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [staySignedIn, setStaySignedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeModalHandler = () => handleClose();

  const onButtonClick = () => setBtnImage()
  const mouseEnter = () => setBtnImage()
  const mouseOut = () => setBtnImage()

  const _userLogin = async () => {
    SessionStorage.setItem(SessionStorageKeys.Email, "")
    const userLogin = await commonApi.userLogin()
    console.log("userLogin Frontend", userLogin);
    if (userLogin.Items === MESSAGES.OTPSent) {
      window.location = CommonPages.authentication;
    }
  }
  function navigateToReg() {
    window.location = CommonPages.registration;
  }
  return (
    <div className="loginPage">
      <div className="leftPart">
        <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
        <p className="logo-text">{Common.TrulyInformativeAssessment}</p>
        <a className="link" href={ExternalLinks.BeamEduWebsite}>
          {Common.beamEducationLink}
        </a>
        <div className="social-media">
          <img src={facebookSquare} className="fb-logo" alt="Faceboook" />
          <img src={linkedin} className="linkedin-logo" alt="LinkedIn" />
        </div>
        <p className="copyright">{Common.beamCopyright}</p>
      </div>
      <div className="rightPart">
        <p className="welcome-title">{Common.Welcome}</p>
        <p className="welcome-subtitle">
          {Common.PleaseEnterYourEmailAddressAndPassword}
        </p>
        <Formik initialValues={{ email: "", password: "" }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            setTimeout(() => {
              const formData = {
                user_email: values.email.trim().toLowerCase(),
                user_password: values.password
              }
              _userLogin(formData);

              resetForm();
              setSubmitting(false);
            }, 500);
          }}>
          {({ values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            
            isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control id="userNamePlaceholder" type="email" name="email" placeholder={Common.EmailExample} onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "user_email" : "user_email"} ref={emailRef} autoComplete="off" />
                {touched.email && errors.email ? (<p className="error-message">{errors.email}</p>) : <p>{''}&nbsp;</p>}
              </Form.Group>
              
              <Form.Group>
                  <Form.Control type="password" name="password" id="userPasswordPlaceholder" placeholder={Common.password} onChange={handleChange} onBlur={handleBlur} value={values.password} className={touched.password && errors.password ? "user_password" : "user_password"} ref={passwordRef} autoComplete="off" />
                {touched.password && errors.password ? (<p className="error-message">{errors.password}</p>) : <p>{''}&nbsp;</p>}
              </Form.Group>
              <br />
              <div className='submit-button-div'>
                <button type='submit' className='submit-button' onClick={onButtonClick}>
                  <img src={btnImage} alt='submit' type="image" onMouseEnter={mouseEnter} onMouseOut={mouseOut} width='65px' />
                </button>
              </div>
              <button className="reg-link" onClick={navigateToReg}>
                {Common.NewtoMappix}
              </button>
            </Form>
          )}

        </Formik>
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
