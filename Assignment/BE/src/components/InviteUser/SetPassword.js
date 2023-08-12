import { React, useRef, useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from 'yup';
import { useNavigate } from "react-router";

import "../../assets/stlyes/InviteUser.css";

import LoadingSpinner from "../Shared/Loader/Loader";
import HideVisibility from "../../assets/images/IconNotVisible.png";
import ShowVisibility from "../../assets/images/IconVisible.png";
import HexagonCharacter from "../../assets/images/HexagonCharacter.png";

import { Common, dataType } from "../../helper/constants";
import { VALIDATION } from '../../helper/messages';
import { EditProfileConstants } from "../../helper/constants";
import * as commonApi from '../../api/commonApi';
import { MappixDesign } from "../Login/index";
import { CommonPages } from '../../helper/routes';


const SetPassword = () => {
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [inputType, setInputType] = useState(dataType.password)
    const [btnImage, setBtnImage] = useState(HideVisibility);

    const PasswordUpdateValidationSchema = Yup.object().shape({
        newPassword: Yup.string().required(Common.Required).min(8, VALIDATION.PASSWORD_MUST_HAVE_MINIMUM_8_CHARACTERS),
        confirmPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], VALIDATION.PASSWORD_MUST_MATCH).required()
    });

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
    const password = async (formData) => {
        console.log(formData);
        setIsLoading(true);
        if (formData.newPassword === formData.confirmPassword) {
            const updatePassword = await commonApi.updatePassword(formData);
            //     console.log({ updatePassword });
            // navigate(0)
        }
        navigate(CommonPages.login)
        setIsLoading(false);
    }


    return (
        // <div className="Page-layout">
        //     {isLoading && <LoadingSpinner />}
        //     <div className="Page-header">
        //         <Header />
        //         <div className="change-password-page">
        //             <h3 className="align-items-center">
        //                 Set Password
        //             </h3>
        //             <Formik initialValues={{ newPassword: "", confirmPassword: "", }}
        //                 validationSchema={PasswordUpdateValidationSchema}
        //                 validate={(values) => { const errors = {}; return errors; }}
        //                 onSubmit={(values, { setSubmitting }) => {
        //                     setSubmitting(true);
        //                     const formData = {
        //                         password: values.newPassword,
        //                         // confirmPassword: values.confirmPassword,
        //                     }
        //                     password(formData);
        //                 }}
        //             >
        //                 {({
        //                     values,
        //                     errors,
        //                     touched,
        //                     handleChange,
        //                     handleBlur,
        //                     handleSubmit,
        //                     isSubmitting,
        //                 }) => (
        //                     <div className="profile-form">
        //                         <Form onSubmit={handleSubmit} className="profileForm">
        //                             <Form.Group className="form-group">
        //                                 <Form.Label>Enter Password</Form.Label>
        //                                 <Form.Control type={inputType} name="newPassword" id="newPassword" placeholder='Password' onChange={handleChange} onBlur={handleBlur} value={values.newPassword} className={touched.newPassword && errors.newPassword ? "user_password" : "user_password_active"} ref={newPasswordRef} autoComplete="off" />
        //                                 <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
        //                                 {touched.newPassword && errors.newPassword ? (<p className="error-message">{errors.newPassword}</p>) : <p>{''}&nbsp;</p>}
        //                             </Form.Group>
        //                             <Form.Group className="form-group">
        //                                 <Form.Label>Confirm Password</Form.Label>
        //                                 <Form.Control type={inputType} name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} className={touched.confirmPassword && errors.confirmPassword ? "user_password" : "user_password_active"} ref={confirmPasswordRef} autoComplete="off" />
        //                                 <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
        //                                 {touched.confirmPassword && errors.confirmPassword ? (<p className="error-message">{errors.confirmPassword}</p>) : <p>{''}&nbsp;</p>}
        //                             </Form.Group>
        //                             <div className='submit-button-div'>
        //                                 <button type='submit' className='submit-button'>{EditProfileConstants.UpdatePassword}</button>
        //                             </div>
        //                         </Form>
        //                     </div>
        //                 )}
        //             </Formik>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="main">
                {isLoading && <LoadingSpinner />}
                <div className="invite-leftPart">
                    <MappixDesign />
                </div>
                <div className="invite-rightPart justify-content-center align-items-center">
                    <h3 className="welcome-title">
                        Set Password
                    </h3>
                    <Formik initialValues={{ newPassword: "", confirmPassword: "", }}
                        validationSchema={PasswordUpdateValidationSchema}
                        validate={(values) => { const errors = {}; return errors; }}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            const formData = {
                                password: values.newPassword,
                                // confirmPassword: values.confirmPassword,
                            }
                            password(formData);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <div className="profile-form">
                                <Form onSubmit={handleSubmit} className="profileForm">
                                    <Form.Group className="form-group">
                                        <Form.Label>Enter Password</Form.Label>
                                        <Form.Control type={inputType} name="newPassword" id="newPassword" placeholder='Password' onChange={handleChange} onBlur={handleBlur} value={values.newPassword} className={touched.newPassword && errors.newPassword ? "user_password" : "user_password_active"} ref={newPasswordRef} autoComplete="off" />
                                        <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                                        {/* {touched.newPassword && errors.newPassword ? (<p className="error-message">{errors.newPassword}</p>) : <p>{''}&nbsp;</p>} */}
                                        {touched.newPassword && errors.newPassword && (<p className="error-message">{errors.newPassword}</p>)}
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type={inputType} name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} className={touched.confirmPassword && errors.confirmPassword ? "user_password" : "user_password_active"} ref={confirmPasswordRef} autoComplete="off" />
                                        <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                                        {/* {touched.confirmPassword && errors.confirmPassword ? (<p className="error-message">{errors.confirmPassword}</p>) : <p>{''}&nbsp;</p>} */}
                                        {touched.confirmPassword && errors.confirmPassword && (<p className="error-message">{errors.confirmPassword}</p>)}
                                    </Form.Group>
                                    <Form.Group className='submit-button-div '>
                                        <button type='submit' className='submit-button'>{EditProfileConstants.UpdatePassword}</button>
                                    </Form.Group>
                                </Form>
                            </div>
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

export { SetPassword };