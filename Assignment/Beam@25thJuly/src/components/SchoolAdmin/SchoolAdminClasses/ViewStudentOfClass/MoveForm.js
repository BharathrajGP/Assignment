import React, { useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { Form, Button } from "react-bootstrap";
import { Common } from "../../../../helper/constants";

function MoveForm({ isPupilId, setMove }) {
    const SignupSchema = Yup.object().shape({
        // moveFrom: Yup.string().required("Required"),
        to: Yup.string().required(Common.Required),
    });
    return (
        <div>
            <Formik
                initialValues={{
                    moveFrom: "",
                    to: "",
                }}
                validationSchema={SignupSchema}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(
                            JSON.stringify({
                                moveFrom: values.moveFrom,
                                to: values.to,
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{Common.MoveFrom}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={Common.MoveFrom}
                                name={Common.moveFrom}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.moveFrom}
                                readOnly
                            />
                            {errors.moveFrom &&
                                touched.moveFrom &&
                                errors.moveFrom && (
                                    <small style={{ color: "red" }}>
                                        {errors.moveFrom}
                                    </small>
                                )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{Common.To}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={Common.To}
                                name={Common.to}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.to}
                            />
                            {errors.to && touched.to && errors.to && (
                                <small style={{ color: "red" }}>
                                    {errors.to}
                                </small>
                            )}
                        </Form.Group>
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Button
                                variant="light"
                                onClick={(e) => {
                                    setMove(false);
                                }}
                            >
                                {Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                Move
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default MoveForm;
