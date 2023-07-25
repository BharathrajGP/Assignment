import React, { useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { AssignClasses, AssignSubjects } from "../../../helper/constants";
import { Button } from "react-bootstrap";
import { TeacherRoles, Common } from "../../../helper/constants";

function AssignRoleForm({ userId, setAssignRole }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const SignupSchema = Yup.object().shape({
        role: Yup.string()
            .oneOf(["Admin", "Lead Teacher", "Teacher", "Support Staff"])
            .required("Role is Required"),
    });
    return (
        <div>
            <Formik
                initialValues={{
                    role: "",
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
                                role: selectedOption.value,
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
                        <div
                            style={{
                                borderBottom: "1px solid grey",
                                marginTop: "20px",
                            }}
                        >
                            <label for="Class">Role </label>

                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={TeacherRoles}
                                placeholder="please select"
                            />
                        </div>
                        {errors.role && touched.role && errors.role}
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Button
                                variant="light"
                                onClick={(e) => {
                                    setAssignRole(false);
                                }}
                            >
                                {Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                Add Role
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AssignRoleForm;
