import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common } from "../../../helper";
import * as commonApi from "../../../api/commonApi";
import { styles } from '../'


const CreateClass = ({ setcreateClass, getData }) => {
    const MySwal = withReactContent(Swal);
    const SignupSchema = Yup.object().shape({
        className: Yup.string().trim(' ').required(Common.Required),
        myRadio: Yup.string().required(Common.Required),
    });

    const addClass = async (newClass) => {
        console.log({ newClass });
        const addClass = await commonApi.addClass(newClass);
        console.log(addClass);
        getData();
        // if (addClass.status === 200) {
        //     MySwal.fire({
        //         title: Common.ClassCreatedSuccessfully,
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
                    name: values.className,
                    isRegistrationGroup: values.myRadio === Common.registrationGroup ? true : false,
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
                    style={styles.modal_form}
                >
                    <Form.Group
                        className="mb-3 "
                        controlId="formBasicEmail"
                    >
                        <Form.Label>
                            {Common.ClassName}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Common.ClassName}
                            name={Common.className}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.className}
                        />
                        {errors.className &&
                            touched.className &&
                            errors.className && (
                                <small style={styles.error_message}>
                                    {errors.className}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group style={styles.radioMargin}>
                        <div style={styles.radioMargin}>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={Common.registrationGroup}
                                    style={styles.radioPadding}
                                />
                                {Common.RegistrationGroup}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={Common.teachingGroup}
                                    style={styles.radioPadding}
                                />
                                {Common.TeachingGroup}
                            </label>
                        </div>
                        {errors.myRadio &&
                            touched.myRadio &&
                            errors.myRadio && (
                                <small style={styles.error_message}>
                                    {errors.myRadio}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group style={styles.button}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setcreateClass(false);
                            }}
                        >
                            {Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                        >
                            {Common.AddClass}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export { CreateClass };
