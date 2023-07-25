import React from "react";
import Header from "../Shared/Header";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Common } from "../../helper/constants";
import { EditProfileConstants } from "../../helper/constants";
import "../../assets/stlyes/ProfileStyles.css";

function ChangePassword() {
    const SignupSchema = Yup.object().shape({
        currentPassword: Yup.string().required(Common.Required),
        newPassword: Yup.string().required(Common.Required),
        confirmNewPassword: Yup.string()
            .required(Common.Required)
            .oneOf(
                [Yup.ref(Common.newPassword), null],
                Common.Passwordsmustmatch
            ),
    });
    return (
        <div className="Page-layout">
            <div className="Page-header">
                <Header />
                <div style={{ marginTop: "100px" }}></div>
                <h3 className="profileHeading">
                    {EditProfileConstants.ChangePassword}
                </h3>
                <Formik
                    initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmNewPassword: "",
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
                                    currentPassword: values.currentPassword,
                                    newPassword: values.newPassword,
                                    confirmNewPassword:
                                        values.confirmNewPassword,
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
                        <div className="profileFormDiv">
                            <Form
                                onSubmit={handleSubmit}
                                className="profileForm"
                            >
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        {Common.CurrentPassword}
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder={Common.CurrentPassword}
                                        name={Common.currentPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.currentPassword}
                                    />
                                    {errors.currentPassword &&
                                        touched.currentPassword &&
                                        errors.currentPassword && (
                                            <small style={{ color: "red" }}>
                                                {errors.currentPassword}
                                            </small>
                                        )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        {EditProfileConstants.NewPassword}
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder={
                                            EditProfileConstants.NewPassword
                                        }
                                        name={Common.newPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.newPassword}
                                    />
                                    {errors.newPassword &&
                                        touched.newPassword &&
                                        errors.newPassword && (
                                            <small style={{ color: "red" }}>
                                                {errors.newPassword}
                                            </small>
                                        )}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        {Common.ConfirmNewPassword}
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder={Common.ConfirmNewPassword}
                                        name={Common.confirmNewPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmNewPassword}
                                    />
                                    {errors.confirmNewPassword &&
                                        touched.confirmNewPassword &&
                                        errors.confirmNewPassword && (
                                            <small style={{ color: "red" }}>
                                                {errors.confirmNewPassword}
                                            </small>
                                        )}
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {EditProfileConstants.ChangePassword}
                                </Button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ChangePassword;
