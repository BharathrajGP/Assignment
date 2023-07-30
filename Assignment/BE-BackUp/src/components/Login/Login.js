import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';

import "../../assets/stlyes/Common/Login.css";

import Account from "../../assets/images/IconAccount.png"
import HideVisibility from "../../assets/images/IconNotVisible.png";
import ShowVisibility from "../../assets/images/IconVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";

import { Common, dataType, SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from "../../util/SessionStorage";
import { LoginValidationSchema } from "../../validators/loginValidator";
import { MESSAGES } from "../../helper/messages";
import LoadingSpinner from '../Shared/Loader/Loader';

import * as commonApi from '../../api/commonApi';
import { CommonPages } from '../../helper/routes';
import MappixDesign from "./MappixDesign";
import { isEmptyObject } from "../../util/utils";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [show, setShow] = useState(false);
  const [btnImage, setBtnImage] = useState(HideVisibility);
  const [inputType, setInputType] = useState(dataType.password)

  const mouseEnter = () => { };
  const mouseOut = () => { };

  const _userLogin = async (formData) => {
    console.log({ formData });
    setIsLoading(true);
    SessionStorage.setItem(SessionStorageKeys.Email, formData.email)
    const userLogin = await commonApi.userLogin(formData);
    setIsLoading(false);
    console.log("userLogin Frontend", userLogin);
    if (isEmptyObject(userLogin)) {
      console.log("User Not Found");
    } else if (userLogin.Items === MESSAGES.OTPSent) {
      navigate(CommonPages.authentication)
    }
  }

  function _togglePasswordVisibility() {
    if (inputType === dataType.password) {
      setBtnImage(ShowVisibility);
      setInputType(dataType.text);
    }
    if (inputType === dataType.text) {
      setBtnImage(HideVisibility);
      setInputType(dataType.password)
    }
  }

  function navigateToReg() {
    navigate(CommonPages.registration);
  }

  return (
    <>
      <div className="loginPage">
        {isLoading && <LoadingSpinner />}
        <div className="leftPart">
          <MappixDesign />
        </div>
        <div className="rightPart">
          <p className="welcome-title">{Common.Welcome}</p>
          <p className="welcome-subtitle">
            {Common.PleaseEnterYourEmailAddressAndPassword}
          </p>
          <Formik initialValues={{ email: "", password: "" }}
            // validationSchema={LoginValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {

              console.log("email:", values.email);
              setSubmitting(true);
              // setTimeout(() => {
              //   const formData = {
              //     user_email: values.email.trim().toLowerCase(),
              //     user_password: values.password
              //   }
              //   _userLogin(formData);

              //   resetForm();
              //   setSubmitting(false);
              // }, 500);
              const formData = {
                email: values.email.trim().toLowerCase(),
                password: values.password
              }
              _userLogin(formData);
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
                  <div>
                    <Form.Control id="userNamePlaceholder" type="email" name="email" placeholder={Common.EmailExample} onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "user_email" : "user_email_active"} ref={emailRef} autoComplete="off" />
                    <img src={Account} alt="Acc" className="AcoountLogo" />
                  </div>
                  {touched.email && errors.email ? (<p className="error-message">{errors.email}</p>) : <p>{''}&nbsp;</p>}
                </Form.Group>

                <Form.Group>
                  <div>
                    <Form.Control type={inputType} name="password" id="userPasswordPlaceholder" placeholder={Common.password} onChange={handleChange} onBlur={handleBlur} value={values.password} className={touched.password && errors.password ? "user_password" : "user_password_active"} ref={passwordRef} autoComplete="off" />
                    <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                  </div>
                  {touched.password && errors.password ? (<p className="error-message">{errors.password}</p>) : <p>{''}&nbsp;</p>}
                </Form.Group>
                <div className='submit-button-div'>
                  <button type='submit' className='submit-button'>Login
                    <img src={RightArrow} alt='Submit' type="image" onMouseEnter={mouseEnter} onMouseOut={mouseOut} width='65px' className="login-icon" />
                  </button>
                  <button className="reg-link" onClick={navigateToReg}>
                    {Common.NewtoMappix}
                  </button>
                </div>
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
    </>

  );
}

export default Login;