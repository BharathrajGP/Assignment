import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import * as commonApi from "../../../api/commonApi";


const CreateClass = ({ setcreateClass, getData }) => {
    const MySwal = withReactContent(Swal);
    const SignupSchema = Yup.object().shape({
        className: Yup.string().required(constants.Common.Required),
        myRadio: Yup.string().required(constants.Common.Required),
    });
    const style = {
        modal_form: {
            width: "100%",
        },
    };

    const addClass = async (newClass) => {
        console.log({ newClass });
        const addClass = await commonApi.addClass(newClass);
        console.log(addClass);
        getData();
        // if (addClass.status === 200) {
        //     MySwal.fire({
        //         title: constants.Common.ClassCreatedSuccessfully,
        //         icon: "success",
        //     }).then(() => {
        //         getData();
        //     });
        // }
    }

    return (
        <Formik
            initialValues={{ className: "", myRadio: "" }}
            validationSchema={SignupSchema}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const newClass = {
                    className: values.className,
                    isRegistrationGroup: values.myRadio === constants.Common.registrationGroup ? true : false,
                };
                addClass(newClass);
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
                <Form
                    onSubmit={handleSubmit}
                    style={style.modal_form}
                >
                    <Form.Group
                        className="mb-3 "
                        controlId="formBasicEmail"
                    >
                        <Form.Label>
                            {constants.Common.ClassName}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={constants.Common.ClassName}
                            name={constants.Common.className}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.className}
                        />
                        {errors.className &&
                            touched.className &&
                            errors.className && (
                                <small style={{ color: "red" }}>
                                    {errors.className}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <div style={{ marginTop: "20px" }}>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={constants.Common.registrationGroup}
                                    style={{ padding: "5px" }}
                                />
                                {constants.Common.RegistrationGroup}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={constants.Common.teachingGroup}
                                    style={{
                                        padding: "5px",
                                        marginLeft: "7px",
                                    }}
                                />
                                {constants.Common.TeachingGroup}
                            </label>
                        </div>
                        {errors.myRadio &&
                            touched.myRadio &&
                            errors.myRadio && (
                                <small style={{ color: "red" }}>
                                    {errors.myRadio}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setcreateClass(false);
                            }}
                        >
                            {constants.Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            disabled={isSubmitting}
                        >
                            {constants.Common.AddClass}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default CreateClass
