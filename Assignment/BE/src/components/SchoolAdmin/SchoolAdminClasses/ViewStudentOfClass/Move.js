import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import Form from "react-bootstrap/Form";
import { Common } from "../../../../helper/constants";
import "../../../../assets/stlyes/Modals.css";

const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: "1px 2px 9px black",
    p: 4,
};

function Move() {
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const SignupSchema = Yup.object().shape({
        // moveFrom: Yup.string().required("Required"),
        to: Yup.string().required("Required"),
    });

    return (
        <div>
            <button
                onClick={handleOpenEdit}
                style={{ width: "100%", background: "none" }}
            >
                Move <DriveFileMoveIcon />
            </button>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        style={{
                            marginTop: "10px",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "22px",
                                textShadow: "1px 1px grey",
                            }}
                        >
                            Move - Pupil's Name
                        </p>
                    </Typography>
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
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
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
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
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
                                        type="submit"
                                        style={{
                                            border: "1px solid black",
                                            color: "black",
                                        }}
                                        onClick={() => handleCloseEdit()}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        style={{
                                            background: "green",
                                            marginLeft: "20px",
                                            color: "white",
                                        }}
                                        onClick={() => movePupil()}
                                        disabled={isSubmitting}
                                    >
                                        Move Pupil
                                    </Button>
                                </Form.Group>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}

function movePupil() {}

export default Move;
