import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import "../../../assets/stlyes/Modals.css";
import { Common } from "../../../helper/constants";

function RenameClassForm({ isClassId, setEditClass }) {
    const SignupSchema = Yup.object().shape({
        className: Yup.string().required(Common.Required),
        myRadio: Yup.string().required(Common.Required),
    });
    const style = {
        modal_form: {
            width: "100%",
        },
    };
    function updateClass() {}

    return (
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
            }) => (
                <Form onSubmit={handleSubmit} style={style.modal_form}>
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
    );
}

export default RenameClassForm;
