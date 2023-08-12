import { React, useRef } from "react";
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import "../../assets/stlyes/Common/Login.css";
import "../../assets/stlyes/Common/registration.css";

import Account from "../../assets/images/IconAccount.png";
import RightArrow from "../../assets/images/RightArrow.png";

import { Common, SessionStorageKeys } from '../../helper/constants';
import { RegValidationSchema } from "../../validators/registrationValidator";
import { SessionStorage } from "../../util/SessionStorage";

import { MappixDesign } from "./";


function Registration() {
  const navigate = useNavigate();
  const emailRef = useRef(null)
  const mouseEnter = () => { }
  const mouseOut = () => { }

  const sendOtp = async(formData) => {
    var email = formData.email;
    SessionStorage.setItem(SessionStorageKeys.Email, email)
  }
  const navigateToLogin = async() => {
    navigate("/")
  }

  return (
    <div className="Reg-Page">
      <div className="leftPart">
        <MappixDesign />
      </div>
      <div className="rightPart">
        <p className="welcome-title">{Common.Registration}</p>
        <p className="welcome-subtitle">
          {Common.Pleaseenteryouremailaddresstoregister}
        </p>
        <Formik initialValues={{ email: "" }}
          validationSchema={RegValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {

            console.log("email:", values.email);
            setSubmitting(true);
            const formData = {
              email: values.email.trim().toLowerCase(),
              password: values.password
            }
            sendOtp(formData);
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


              <div className='submit-button-div'>
                <button type='submit' className='submit-button'>{Common.SendOtp}
                  <img src={RightArrow} alt='Submit' type="image" onMouseEnter={mouseEnter} onMouseOut={mouseOut} width='65px' className="login-icon" />
                </button>
              </div>
              <div >
                {Common.AlreadyHaveAnAccount}
                <button className="reg-link" onClick={navigateToLogin}>
                  {Common.ClicktoLogin}
                </button>
              </div>
            </Form>
          )}

        </Formik>
      </div>
    </div>
  );
}

export { Registration };
