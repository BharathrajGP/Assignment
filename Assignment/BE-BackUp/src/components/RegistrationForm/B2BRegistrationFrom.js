import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';

import "../../assets/stlyes/Registration/B2BRegistration.css";


import HexagonCharacter from "../../assets/images/HexagonCharacter.png";
import Account from "../../assets/images/IconAccount.png";
import School from "../../assets/images/SchoolIcon.png";
import Gmail from "../../assets/images/mail.png";
import HideVisibility from "../../assets/images/IconNotVisible.png";
import ShowVisibility from "../../assets/images/IconVisible.png";
import RightArrow from "../../assets/images/RightArrow.png";

import { LoadingSpinner } from '../Shared';
import { MappixDesign } from "./MappixDesign";

import { Common, dataType, optionsss, termsConditions } from '../../helper';

const B2BRegistrationFrom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [btnImage, setBtnImage] = useState(HideVisibility);
    const [inputType, setInputType] = useState(dataType.password)


    const _togglePasswordVisibility = async () => {
        if (inputType === dataType.password) {
            setBtnImage(ShowVisibility);
            setInputType(dataType.text);
        }
        if (inputType === dataType.text) {
            setBtnImage(HideVisibility);
            setInputType(dataType.password)
        }
    }
    return (
        <>
            <div className="RegPage">
                {isLoading && <LoadingSpinner />}
                <Col xs={4}>
                    <div className="_leftPart">
                        <MappixDesign />
                    </div>
                </Col>
                <Col xs={8}>
                    <div className="_rightPart">
                        <p className="_welcome-title">{Common.Welcome}</p>
                        <p className="_welcome-subtitle">
                            {Common.PleaseCreateYourUniqueUserLogin}
                        </p>
                        <Formik initialValues={{ firstName: "", lastName: "", email: '', schoolName: '', password: '' }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {

                                console.log("email:", values.email);
                                setSubmitting(true);
                                const formData = {
                                    email: values.email.trim().toLowerCase(),
                                    password: values.password
                                }
                                // _userLogin(formData);
                            }}>
                            {({ values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,

                                isSubmitting }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="userNamePlaceholder" type="text" name="firstName" placeholder='First Name' onChange={handleChange} onBlur={handleBlur} value='' autoComplete="off" className={touched.firstName && errors.firstName ? "user_name" : "user_name_active"} />
                                                <img src={Account} alt="Acc" className="AcoountLogo" />
                                                {touched.firstName && errors.firstName ? (<p className="error-message">{errors.firstName}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control id="userNamePlaceholder" type="text" name="email" placeholder='Email@address.co.uk' onChange={handleChange} onBlur={handleBlur} value='' autoComplete="off" className={touched.email && errors.email ? "user_name" : "user_name_active"} />
                                                <img src={Gmail} alt="School" className="mailLogo" />
                                                {touched.email && errors.email ? (<p className="error-message">{errors.email}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control id="userNamePlaceholder" type="text" name="schoolName" placeholder='School Name' onChange={handleChange} onBlur={handleBlur} value='' autoComplete="off" className={touched.schoolName && errors.schoolName ? "user_name" : "user_name_active"} />
                                                <img src={School} alt="Acc" className="schoolLogo" />
                                                {touched.schoolName && errors.schoolName ? (<p className="error-message">{errors.schoolName}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                            <Form.Group>
                                                <div>
                                                    <Form.Control type={inputType} name="password" id="userPasswordPlaceholder" placeholder='Password' onChange={handleChange} onBlur={handleBlur} value={values.password} className={touched.password && errors.password ? "user_password" : "user_password_active"} autoComplete="off" />
                                                    <img src={btnImage} alt="Acc" className="visibleLogo" onClick={_togglePasswordVisibility} />
                                                </div>
                                                {touched.password && errors.password ? (<p className="error-message">{errors.password}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="userNamePlaceholder" type="text" name="lastName" placeholder='Last Name' onChange={handleChange} onBlur={handleBlur} value='' autoComplete="off" className={touched.firstName && errors.firstName ? "user_name" : "user_name_active"} />
                                                <img src={Account} alt="Acc" className="AcoountLogo" />
                                                {touched.lastName && errors.lastName ? (<p className="error-message">{errors.lastName}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                            <Form.Group>
                                                <select
                                                    // defaultValue={''}
                                                    // options={ProfileRoles}
                                                    name="role" placeholder='Your Role'
                                                    className={touched.role && errors.role ? "user_name" : "user_name_active"}
                                                // formatGroupLabel={formatGroupLabel}
                                                >
                                                    {optionsss.map((item) => {
                                                        return <option value={item.value}>{item.label}</option>
                                                    })}
                                                </select>
                                                {touched.role && errors.role ? (<p className="error-message">{errors.role}</p>) : <p>{''}</p>}
                                            </Form.Group>
                                            {/* <Form.Group>
                                                <Form.Control id="userNamePlaceholder" type="text" name="firstName" placeholder='First Name' onChange={handleChange} onBlur={handleBlur} value='' autoComplete="off" className={touched.firstName && errors.firstName ? "user_name" : "user_name_active"} />
                                                <img src={Account} alt="Acc" className="AcoountLogo" />
                                                {touched.firstName && errors.firstName ? (<p className="error-message">{errors.firstName}</p>) : <p>{''}</p>}
                                            </Form.Group> */}
                                        </Col>
                                    </Row>

                                    <Row className="checkBox">
                                        <Col className="d-flex flex-row">
                                            <input type="checkbox" className="checkeddd" /><p className="termCondition">{termsConditions.tc}</p></Col>
                                    </Row>
                                    <Form.Group className="submit-button-div">
                                        <button type='submit' className='submit-button'>{Common.Register}
                                            <img src={RightArrow} alt='Submit' type="image" width='65px' className="login-icon" />
                                        </button>
                                        <button className="_reg-link" >
                                            {Common.AlreadyRegisteredLogin}
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
                </Col>
            </div>
        </>
    )
}
export { B2BRegistrationFrom };
