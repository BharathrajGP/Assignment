import React, { useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

import { AssignClasses, AssignSubjects, Common } from "../../../helper/constants";

import "../../../assets/stlyes/Modals.css";

const InviteUser = ({ setInviteUser }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubjects, setSelectedSubjects] = useState(null);
    const SignupSchema = Yup.object().shape({
        email: Yup.string().required("Required"),
        // myCheck: Yup.string()
        // .oneOf(["Admin", "LeadTeacher", "Teacher", "SupportStaff"])
        // .required("Role is Required"),
        subjects: Yup.string().oneOf([
            "All",
            "Maths",
            "Science",
            "PE",
            "Writing",
            "Reading",
        ]),
        class: Yup.string().oneOf(["Elephant", "Lion", "Tiger", "Cheetah"]),
    });
    return (
        <Formik
            initialValues={{
                email: "",
                class: "",
                subjects: "",
                myCheck: "",
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
                            email: values.email,
                            class: selectedClass.value,
                            subjects: selectedSubjects.value,
                            role: values.myCheck,
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
                <Form
                    onSubmit={handleSubmit}
                    className="modal-form"
                >
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>{Common.Email}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Common.ClassName}
                            name={Common.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email &&
                            touched.email &&
                            errors.email && (
                                <small style={{ color: "red" }}>
                                    {errors.email}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group>
                        <p
                            style={{
                                borderBottom: "1px solid grey",
                            }}
                        >
                            Roles - Select Role(s) as agreed by
                            Headteacher
                        </p>
                        <Row>
                            <Col
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Admin"
                                        style={{ padding: "5px" }}
                                    />
                                    Admin
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="LeadTeacher"
                                    />
                                    Lead Teacher
                                </label>
                            </Col>
                            <Col
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Teacher"
                                    />
                                    Teacher
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="SupportingStaff"
                                    />
                                    Support Staff
                                </label>
                            </Col>
                        </Row>
                        {errors.myCheck &&
                            touched.myCheck &&
                            errors.myCheck}
                    </Form.Group>
                    <Form.Group>
                        <p
                            style={{
                                borderBottom: "1px solid grey",
                                marginTop: "30px",
                            }}
                        >
                            Classes - Select Classes that this user
                            will be teaching or supporting
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Form.Group
                                style={{
                                    width: "48%",
                                    marginRight: "20px",
                                }}
                            >
                                <label for="Class">Class </label>

                                <Select
                                    defaultValue={selectedClass}
                                    onChange={setSelectedClass}
                                    options={AssignClasses}
                                    placeholder="please select"
                                />
                                {errors.class &&
                                    touched.class &&
                                    errors.class}
                            </Form.Group>
                            <Form.Group
                                style={{
                                    width: "48%",
                                }}
                            >
                                <label for="Subjects">
                                    Subjects{" "}
                                </label>

                                <Select
                                    defaultValue={selectedSubjects}
                                    onChange={setSelectedSubjects}
                                    options={AssignSubjects}
                                    placeholder="please select"
                                />
                                {errors.subjects &&
                                    touched.subjects &&
                                    errors.subjects}
                            </Form.Group>
                        </div>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setInviteUser(false);
                            }}
                        >
                            {Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            disabled={isSubmitting}
                        >
                            Invite User
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default InviteUser
