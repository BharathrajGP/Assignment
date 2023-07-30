import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

import "../../assets/stlyes/Common/Login.css";

import HideVisibility from "../../assets/images/IconNotVisible.png";
import ShowVisibility from "../../assets/images/IconVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import LoadingSpinner from '../Shared/Loader/Loader';

import { dataType, Common, Roles, SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from '../../util/SessionStorage';
import { otpValidationSchema } from "../../validators/loginValidator";

import * as commonApi from '../../api/commonApi';
import { AdminPages, CommonPages } from '../../helper/routes'
import MappixDesign from "./MappixDesign";
import { errorMsg } from "../Shared/Notification/ToastNotification";
import { VALIDATION } from "../../helper/messages";


const { UserContext } = require('../../context')

function Authentication() {
  const navigate = useNavigate();
  const otpRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  let userContext = useContext(UserContext);

  async function OAuth(formData) {
    console.log("OAuth", formData);
    setIsLoading(true);
    var email = SessionStorage.getItem(SessionStorageKeys.Email);
    var otp = parseInt(formData.otp)
    if (isNaN(otp)) {
      console.log(isNaN(otp));
      errorMsg(VALIDATION.OTP_MUST_HAVE_6_DIGITS);
    } else {
      const OtpAuth = await commonApi.user2FA({ email: email, otp: otp });
      setIsLoading(false);
      if (OtpAuth.error) {
        console.log(OtpAuth.error);
      } else {
        console.log({OtpAuth})
        // userContext.setUserInfo(OtpAuth);
        userContext.setUserInfo({ ...OtpAuth });
        console.log(OtpAuth.Items)
        SessionStorage.clearAll();
        SessionStorage.setItem(SessionStorageKeys.SessionToken, OtpAuth.Items.jwt)
        SessionStorage.setItem(SessionStorageKeys.UserName, OtpAuth.Items.userName)

        if (OtpAuth.Items.userName.includes(Roles.Admin)) {
          navigate(AdminPages.schools);
        } else {
          navigate(CommonPages.dashboard);
        }
      }
    }
  }
  return (
    <div className="loginPage">
      {isLoading && <LoadingSpinner />}
      <div className="leftPart">
        <MappixDesign />
      </div>
      <div className="rightPart">
        <p className="welcome-title">{Common.PleaseEnterOTP}</p>
        <p className="welcome-subtitle">
          {Common.EnterValidOTPtoLogin}
        </p>
        <Formik initialValues={{ otp: "" }}
          validationSchema={otpValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("setSubmitting");
            const formData = {
              otp: values.otp
            }
            OAuth(formData);
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
                  <Form.Control type="text" pattern="[0-9]*" name="otp" id="userPasswordPlaceholder" placeholder={Common.otp} onChange={handleChange} onBlur={handleBlur} value={values.otp} className={touched.otp && errors.otp ? "user_password" : "user_password_active"} ref={otpRef} autoComplete="off" />
                </div>
                {touched.otp && errors.otp ? (<p className="error-message">{errors.otp}</p>) : <p>{''}&nbsp;</p>}
              </Form.Group>
              <div className='submit-button-div'>
                <Button type='submit' className='submit-button'>{Common.Login}
                  <img src={RightArrow} alt='' type="image"  width='65px' className="login-icon" />
                </Button>
                {/* <button className="reg-link" onClick={navigateToReg}>
                  {Common.NewtoMappix}
                </button> */}
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
  )
}

export default Authentication