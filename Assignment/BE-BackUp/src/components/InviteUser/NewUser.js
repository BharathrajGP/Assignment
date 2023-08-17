import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

import "../../assets/stlyes/InviteUser.css";

import Account from "../../assets/images/IconAccount.png";
import RightArrow from "../../assets/images/RightArrow.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";

import { Common, InviteUser, MESSAGES, SessionStorageKeys } from '../../helper';
import { errorMsg, LoadingSpinner } from '../Shared';
import * as commonApi from '../../api/commonApi';
import { MappixDesign } from "../Login/index";
import { isEmptyObject } from "../../util/utils";
import { SessionStorage } from '../../util/SessionStorage';

const NewUser = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef(null);
    const otpRef = useRef(null);



    const LoginValidationSchema = Yup.object().shape({
        otp: Yup.string().required(Common.Required).min(6),

    });

    const _newUserLogin = async (formData) => {
        console.log({ formData });
        setIsLoading(true);
        var email = formData.email;
        var otp = parseInt(formData.otp)
        console.log({ email });
        console.log({ otp })
        const OtpAuth = await commonApi.user2FA({ email: email, otp: otp });
        if (isEmptyObject(OtpAuth)) {
            errorMsg(MESSAGES.LOGIN_FAILED)
        } else {
            SessionStorage.clearAll();
            SessionStorage.setItem(SessionStorageKeys.SessionToken, OtpAuth.Items.jwt)
            navigate(InviteUser.setPassword)
        }
        setIsLoading(false);
    }

    return (
        <>
            <div className="main">
                {isLoading && <LoadingSpinner />}
                <div className="invite-leftPart">
                    <MappixDesign />
                </div>
                <div className="invite-rightPart justify-content-center align-items-center">
                    <p className="welcome-title">{Common.Welcome}</p>
                    <Formik initialValues={{ email: "", otp: "" }}
                        validationSchema={LoginValidationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            const formData = {
                                email: values.email.trim().toLowerCase(),
                                otp: values.otp,
                            }
                            _newUserLogin(formData);
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
                                    <Form.Control id="userNamePlaceholder" type="email" name="email" placeholder={Common.EmailExample} onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "user_email" : "user_email_active"} ref={emailRef} autoComplete="off" />
                                    <img src={Account} alt="Acc" className="AcoountLogo" />
                                    {touched.email && errors.email ? (<p className="error-message">{errors.email}</p>) : <p>{''}&nbsp;</p>}
                                </Form.Group>

                                <Form.Group>
                                    <p className="welcome-subtitle">
                                        Please Enter Otp sent to your mail
                                    </p>
                                    <Form.Control type="text" pattern="[0-9]*" name="otp" id="userPasswordPlaceholder" placeholder={Common.otp} onChange={handleChange} onBlur={handleBlur} value={values.otp} className={touched.otp && errors.otp ? "user_password" : "user_password_active"} ref={otpRef} autoComplete="off" />
                                    {touched.otp && errors.otp ? (<p className="error-message">{errors.otp}</p>) : <p>{''}&nbsp;</p>}
                                </Form.Group>
                                <Form.Group className='submit-button-div justify-content-center'>
                                    <button type='submit' className='submit-button'>Sign In
                                        <img src={RightArrow} alt='Submit' type="image" width='65px' className="login-icon" />
                                    </button>
                                </Form.Group>
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

export { NewUser };