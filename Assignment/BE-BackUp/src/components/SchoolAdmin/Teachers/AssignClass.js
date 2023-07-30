import React, { useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import {
    AssignClasses,
    AssignSubjects,
    Common,
} from "../../../helper/constants";

import "../../../assets/stlyes/Modals.css";

const AssignClass = ({ userId, setAssignClass }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const style = {
        modal_form: {
            width: "100%",
        },
    };
    return (
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
            }) => (
                <Form onSubmit={handleSubmit} style={style.modal_form}>
                    <Form.Group>
                        <label for="Class">Class </label>

                        <Select
                            defaultValue={selectedClass}
                            onChange={setSelectedClass}
                            options={AssignClasses}
                            placeholder="please select"
                        />
                        {errors.class && touched.class && errors.class}
                    </Form.Group>

                    <Form.Group style={{ marginTop: "20px" }}>
                        <label for="Subjects">Subjects </label>

                        <Select
                            defaultValue={selectedSujects}
                            onChange={setSelectedSujects}
                            options={AssignSubjects}
                            placeholder="please select"
                        />
                        {errors.subjects && touched.subjects && errors.subjects}
                    </Form.Group>
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
    );
}

export default AssignClass;
