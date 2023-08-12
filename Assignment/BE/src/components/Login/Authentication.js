import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';

import "../../assets/stlyes/Common/Login.css";

import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import LoadingSpinner from '../Shared/Loader/Loader';
import { MappixDesign } from "./";

import * as commonApi from '../../api/commonApi';
import { AdminPages, CommonPages } from '../../helper/routes'
import { Common, Roles, SessionStorageKeys } from '../../helper/constants';
import { errorMsg } from "../Shared/Notification/ToastNotification";
import { isEmptyObject } from "../../util/utils";
import { MESSAGES } from "../../helper/messages";
import { otpValidationSchema } from "../../validators/loginValidator";
import { SessionStorage } from '../../util/SessionStorage';

const { UserContext } = require('../../context')

function Authentication() {
  const navigate = useNavigate();
  const otpRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  let userContext = useContext(UserContext);

  const OAuth = async (formData) => {
    setIsLoading(true);
    var email = SessionStorage.getItem(SessionStorageKeys.Email);
    var otp = parseInt(formData.otp)
    const OtpAuth = await commonApi.user2FA({ email: email, otp: otp });
    if (isEmptyObject(OtpAuth)) {
      errorMsg(MESSAGES.LOGIN_FAILED)
    } else {
      userContext.setUserInfo({ ...OtpAuth });
      SessionStorage.clearAll();
      SessionStorage.setItem(SessionStorageKeys.SessionToken, OtpAuth.Items.jwt)
      SessionStorage.setItem(SessionStorageKeys.UserName, OtpAuth.Items.userName)
      SessionStorage.setItem(SessionStorageKeys.userType, OtpAuth.Items.userType)
      if (OtpAuth.Items.userName.includes(Roles.Admin)) {
        navigate(AdminPages.schools);
      } else {
        navigate(CommonPages.dashboard)
        window.location.reload();
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
                  <img src={RightArrow} alt='' type="image" width='65px' className="login-icon" />
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

export { Authentication }
