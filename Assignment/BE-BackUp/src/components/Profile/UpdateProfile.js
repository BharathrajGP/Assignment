import { React, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

import "../../assets/stlyes/Profile/UpdatePassword.css";
import "../../assets/stlyes/Common/Login.css";

import { Header, LoadingSpinner } from "../Shared";
import { EditProfileConstants } from "../../helper";
import { isEmptyObject } from "../../util/utils";
import { profileUpdateValidationSchema } from "../../validators";
import * as commonApi from '../../api/commonApi';

function ProfileUpdate() {
    const navigate = useNavigate();
    const FirstNameRef = useRef(null);
    const LastNameRef = useRef(null);
    const [_firstName, _setFirstName] = useState("")
    const [_lastName, _setLastName] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const _getProfile = async () => {
        setIsLoading(true);
        const Profile = await commonApi.getProfile();
        console.log("Profile", Profile.Items);
        console.log("FirstName", Profile.Items.firstName);
        console.log("LastName", Profile.Items.lastName);
        if (isEmptyObject(Profile)) { navigate(0); }
        else { _setFirstName(Profile.Items.firstName); _setLastName(Profile.Items.lastName); setIsLoading(false); }
    };

    const _updateProfile = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData);
        const updateProfile = await commonApi.updateProfile(formData);
        console.log({ updateProfile });
        navigate(0)
    };

    useEffect(() => {
        _getProfile();
    }, []);
    return (
        <div className="Page-layout">
            {isLoading && <LoadingSpinner />}
            <div className="Page-header">
                <Header />
                <div className="change-password-page">
                    <h3 className="profileHeading">
                        {EditProfileConstants.UpdateProfile}
                    </h3>
                    <Formik enableReinitialize initialValues={{ FirstName: _firstName ? _firstName : '', LastName: _lastName ? _lastName : '' }}
                        validationSchema={profileUpdateValidationSchema}
                        validate={(values) => { const errors = {}; return errors; }}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            const formData = {
                                firstName: values.FirstName.trim(),
                                lastName: values.LastName.trim(),
                            }
                            _updateProfile(formData);
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting, }) => (
                            <div className="profile-form">
                                <Form onSubmit={handleSubmit} className="profileForm">
                                    <Form.Group className="form-group">
                                        <Form.Label>{EditProfileConstants.FirstName}</Form.Label>
                                        <div>
                                            <Form.Control type="text" name="FirstName" id="FirstName" placeholder={EditProfileConstants.FirstName} onChange={handleChange} onBlur={handleBlur} value={values.FirstName} className={touched.FirstName && errors.FirstName ? "user_password" : "user_password_active"} ref={FirstNameRef} autoComplete="off" />
                                        </div>
                                        {touched.FirstName && errors.FirstName ? (<p className="error-message">{errors.FirstName}</p>) : <p>{''}&nbsp;</p>}
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>{EditProfileConstants.LastName}</Form.Label>
                                        <div>
                                            <Form.Control type="text" name="LastName" id="LastName" placeholder={EditProfileConstants.LastName} onChange={handleChange} onBlur={handleBlur} value={values.LastName} className={touched.LastName && errors.LastName ? "user_password" : "user_password_active"} ref={LastNameRef} autoComplete="off" />
                                        </div>
                                        {touched.LastName && errors.LastName ? (<p className="error-message">{errors.LastName}</p>) : <p>{''}&nbsp;</p>}
                                    </Form.Group>
                                    <div className='submit-button-div'>
                                        <button type='submit' className='submit-button'>{EditProfileConstants.UpdateProfile}</button>
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

export { ProfileUpdate };
