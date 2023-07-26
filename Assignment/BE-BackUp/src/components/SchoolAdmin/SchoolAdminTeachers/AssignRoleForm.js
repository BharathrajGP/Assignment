import React, { useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import "../../../assets/stlyes/Modals.css";
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
    const style = {
        modal_form: {
            width: "100%",
        },
    };
    return (
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
            }) => (
                <Form onSubmit={handleSubmit} style={style.modal_form}>
                    <Form.Group>
                        <label for="Class">Role </label>

                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={TeacherRoles}
                            placeholder="please select"
                        />
                        {errors.role && touched.role && errors.role}
                    </Form.Group>
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
    );
}

export default AssignRoleForm;
