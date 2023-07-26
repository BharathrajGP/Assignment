import React from "react";
import Header from "../Shared/Header";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Common } from "../../helper/constants";

function UpdateProfile() {
    const SignupSchema = Yup.object().shape({
        foreName: Yup.string().required(Common.Required),
        surName: Yup.string().required(Common.Required),
    });
    return (
        <div className="Page-layout">
            <div className="Page-header">
                <Header />
                <div style={{ marginTop: "100px" }}></div>
                <h3
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "purple",
                        textShadow: "2px 1px grey",
                    }}
                >
                    {Common.UpdateProfile}
                </h3>
                <Formik
                    initialValues={{
                        foreName: "",
                        surName: "",
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
                                    ForeName: values.foreName,
                                    SurName: values.surName,
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
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "20px",
                            }}
                        >
                            <Form
                                onSubmit={handleSubmit}
                                style={{
                                    width: "500px",
                                    border: "2px solid yellow",
                                    boxShadow: "inset 0 0 15px -2px yellow",
                                    borderRadius: "10px",
                                    padding: "15px",
                                }}
                            >
                                <h4>{Common.YourDetails}</h4>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>{Common.ForeName}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={Common.ForeName}
                                        name={Common.foreName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.foreName}
                                    />
                                    {errors.foreName &&
                                        touched.foreName &&
                                        errors.foreName && (
                                            <small style={{ color: "red" }}>
                                                {errors.foreName}
                                            </small>
                                        )}
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>{Common.SurName}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={Common.SurName}
                                        name={Common.surName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surName}
                                    />
                                    {errors.surName &&
                                        touched.surName &&
                                        errors.surName && (
                                            <small style={{ color: "red" }}>
                                                {errors.surName}
                                            </small>
                                        )}
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {Common.updateMyDetails}
                                </Button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default UpdateProfile;
