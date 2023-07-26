import React, { useState } from "react";
import SchoolAdminClassesTables from "./SchoolAdminClassesTable";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Formik } from "formik";
import * as Yup from "yup";
import ViewStudentOfClass from "./ViewStudentOfClass/ViewStudentsOfClass";
import Form from "react-bootstrap/Form";
import * as constants from "../../../helper/constants";
import { Button, Modal } from "react-bootstrap";
import "../../../assets/stlyes/Modals.css";

function add() {}

function SchoolAdminClasses() {
    const [switchTab, setSwitchTab] = useState(false);
    const [createClass, setcreateClass] = useState(false);
    function switchTabs() {
        setSwitchTab(!switchTab);
    }

    const SignupSchema = Yup.object().shape({
        className: Yup.string().required(constants.Common.Required),
        myRadio: Yup.string().required(constants.Common.Required),
    });
    const style = {
        modal_form: {
            width: "100%",
        },
    };

    return (
        <div>
            {!switchTab ? (
                <>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            marginTop: "5px",
                            marginBottom: "10px",
                        }}
                    >
                        <Button
                            type="submit"
                            variant="success"
                            onClick={(e) => {
                                setcreateClass(true);
                            }}
                        >
                            <PersonAddIcon /> {constants.Common.AddClass}
                        </Button>
                    </div>
                    <SchoolAdminClassesTables switchTabs={switchTabs} />
                </>
            ) : (
                <ViewStudentOfClass />
            )}
            <Modal
                show={createClass}
                onHide={(e) => {
                    setcreateClass(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">
                        {constants.Common.AddClass}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <Form
                                onSubmit={handleSubmit}
                                style={style.modal_form}
                            >
                                <Form.Group
                                    className="mb-3 "
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>
                                        {constants.Common.ClassName}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={constants.Common.ClassName}
                                        name={constants.Common.className}
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
                                <Form.Group style={{ marginTop: "20px" }}>
                                    <div style={{ marginTop: "20px" }}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={constants.Common.myRadio}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="RegistrationGroup"
                                                style={{ padding: "5px" }}
                                            />
                                            {constants.Common.RegistrationGroup}
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name={constants.Common.myRadio}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="TeachingGroup"
                                                style={{
                                                    padding: "5px",
                                                    marginLeft: "7px",
                                                }}
                                            />
                                            {constants.Common.TeachingGroup}
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
                                            setcreateClass(false);
                                        }}
                                    >
                                        {constants.Common.Cancel}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="success"
                                        disabled={isSubmitting}
                                    >
                                        {constants.Common.AddClass}
                                    </Button>
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    );
}

export default SchoolAdminClasses;
