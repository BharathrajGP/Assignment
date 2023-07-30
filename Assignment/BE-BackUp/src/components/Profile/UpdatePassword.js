import { React, useRef, useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

import "../../assets/stlyes/Profile/UpdatePassword.css";
import "../../assets/stlyes/Common/Login.css";

import Header from "../Shared/Header";
import LoadingSpinner from "../Shared/Loader/Loader";
import HideVisibility from "../../assets/images/IconNotVisible.png";
import ShowVisibility from "../../assets/images/IconVisible.png";

import { Common, dataType } from "../../helper/constants";
import { PasswordUpdateValidationSchema } from "../../validators/ProfileValidators";
import { EditProfileConstants } from "../../helper/constants";
import * as commonApi from '../../api/commonApi';
import { useNavigate } from "react-router";

function ChangePassword() {
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [inputType, setInputType] = useState(dataType.password)
    const [btnImage, setBtnImage] = useState(HideVisibility);

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
    const _updatePassword = async(formData)=>{
        console.log(formData);
        setIsLoading(true);
        if(formData.newPassword === formData.confirmPassword){
            const updatePassword = await commonApi.updatePassword({password : formData.newPassword});
            console.log({updatePassword});
            navigate(0)
        }
        setIsLoading(false);
    }
    
    return (
        <div className="Page-layout">
            {isLoading && <LoadingSpinner />}
            <div className="Page-header">
                <Header />
                <div className="change-password-page">
                    <h3 className="profileHeading">
                        {EditProfileConstants.ChangePassword}
                    </h3>
                    <Formik initialValues={{ newPassword: "", confirmPassword: "", }}
                        validationSchema={PasswordUpdateValidationSchema}
                        validate={(values) => { const errors = {}; return errors; }}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            const formData = {
                                newPassword: values.newPassword,
                                confirmPassword: values.confirmPassword,
                            }
                            _updatePassword(formData);
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
                                        <Form.Label>{Common.EnterNewPassword}</Form.Label>
                                        <div>
                                            <Form.Control type={inputType} name="newPassword" id="newPassword" placeholder={Common.NewPassword} onChange={handleChange} onBlur={handleBlur} value={values.newPassword} className={touched.newPassword && errors.newPassword ? "user_password" : "user_password_active"} ref={newPasswordRef} autoComplete="off" />
                                            <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                                        </div>
                                        {touched.newPassword && errors.newPassword ? (<p className="error-message">{errors.newPassword}</p>) : <p>{''}&nbsp;</p>}
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>{Common.EnterConfirmpassword}</Form.Label>
                                        <div>
                                            <Form.Control type={inputType} name="confirmPassword" id="confirmPassword" placeholder={Common.confirmPassword} onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} className={touched.confirmPassword && errors.confirmPassword ? "user_password" : "user_password_active"} ref={confirmPasswordRef} autoComplete="off" />
                                            <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                                        </div>
                                        {touched.confirmPassword && errors.confirmPassword ? (<p className="error-message">{errors.confirmPassword}</p>) : <p>{''}&nbsp;</p>}
                                    </Form.Group>
                                    <div className='submit-button-div'>
                                        <button type='submit' className='submit-button'>{EditProfileConstants.UpdatePassword}</button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
