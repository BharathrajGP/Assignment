import React, { useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import {
    AssignClasses,
    AssignSubjects,
    Common,
} from "../../../helper/constants";
import { Button } from "react-bootstrap";

function AssignClassForm({ userId, setAssignClass }) {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSujects, setSelectedSujects] = useState(null);
    return (
        <div>
            <Formik
                initialValues={{
                    class: "",
                    subjects: "",
                }}
                // validationSchema={SignupSchema}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(
                            JSON.stringify({
                                subjects: selectedSujects.value,
                                class: selectedClass.value,
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
                            <label for="Class">Class </label>

                            <Select
                                defaultValue={selectedClass}
                                onChange={setSelectedClass}
                                options={AssignClasses}
                                placeholder="please select"
                            />
                        </div>
                        {errors.class && touched.class && errors.class}
                        <div
                            style={{
                                borderBottom: "1px solid grey",
                                marginTop: "20px",
                            }}
                        >
                            <label for="Subjects">Subjects </label>

                            <Select
                                defaultValue={selectedSujects}
                                onChange={setSelectedSujects}
                                options={AssignSubjects}
                                placeholder="please select"
                            />
                        </div>
                        {errors.subjects && touched.subjects && errors.subjects}
                        <Form.Group style={{ marginTop: "20px" }}>
                            <Button
                                variant="light"
                                onClick={(e) => {
                                    setAssignClass(false);
                                }}
                            >
                                {Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                Add Class
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AssignClassForm;
