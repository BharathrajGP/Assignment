import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { Common } from "../../../helper/constants";

function RenameClassForm({ isClassId, setEditClass }) {
    const SignupSchema = Yup.object().shape({
        className: Yup.string().required(Common.Required),
        myRadio: Yup.string().required(Common.Required),
    });

    function updateClass() {}

    return (
        <div>
            <Formik
                initialValues={{ className: "", myRadio: "" }}
                validationSchema={SignupSchema}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(
                            JSON.stringify({
                                className: values.className,
                                myRadio: values.myRadio,
                            })
                        );
                        setSubmitting(false);
                    }, 400);
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
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{Common.ClassName}</Form.Label>
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
                                    <small style={{ color: "red" }}>
                                        {errors.className}
                                    </small>
                                )}
                        </Form.Group>
                        <Form.Group>
                            <div style={{ marginTop: "20px" }}>
                                <label>
                                    <input
                                        type="radio"
                                        name="myRadio"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="RegistrationGroup"
                                        style={{ padding: "5px" }}
                                    />
                                    Registration Group
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="myRadio"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="TeachingGroup"
                                        style={{
                                            padding: "5px",
                                            marginLeft: "7px",
                                        }}
                                    />
                                    Teaching Group
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
                                    setEditClass(false);
                                }}
                            >
                                {Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                {Common.Update}
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RenameClassForm;
