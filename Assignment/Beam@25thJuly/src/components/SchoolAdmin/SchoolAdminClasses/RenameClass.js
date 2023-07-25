import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { Common } from "../../../helper/constants";

const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: "1px 2px 9px black",
    p: 4,
};

function updateClass() {}

function RenameClass() {
    const [openRename, setOpenRename] = useState(false);
    const handleOpenRename = () => setOpenRename(true);
    const handleCloseRename = () => setOpenRename(false);

    const SignupSchema = Yup.object().shape({
        className: Yup.string().required("Required"),
        myRadio: Yup.string().required("Required"),
    });

    return (
        <div>
            <button onClick={() => handleOpenRename()}>
                <BorderColorOutlinedIcon />
                Rename
            </button>
            <Modal
                open={openRename}
                onClose={handleCloseRename}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <Box sx={style} >
          <Typography style={{marginTop:'10px',marginBottom:'20px',textAlign:'center'}}><p style={{fontSize:'22px',textShadow:'1px 1px grey'}}>Add Class</p></Typography>
          <Typography><label>ClassName :</label><br /><input type="text" style={{marginTop:'3px',width:'100%',boxShadow:'1px 1px -1px -1px grey',borderRadius:'7px'}}/></Typography>
          <Typography style={{marginTop:'10px'}}><label>
          <input type="radio" name="myRadio" value="RegistrationGroup " style={{padding:'5px'}}/>
          Registration Group 
        </label>
        <label>
          <input type="radio" name="myRadio" value="TeachingGroup" style={{padding:'5px',marginLeft:'7px'}}/>
          Teaching Group
        </label></Typography>
        <Typography  style={{marginTop:'10px'}}><Button type="submit" style={{border:'1px solid black',color:'black'}} onClick={()=>handleCloseRename()}>Cancel</Button>
          <Button type="submit" style={{background:'green',marginLeft:'20px',color:'white'}} onClick={()=>updateClass()}>Update Class</Button></Typography>
        </Box> */}
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
                            Edit Class
                        </p>
                    </Typography>
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
                            /* and other goodies */
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>{Common.ClassName}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={Common.ClassName}
                                        name={Common.className}
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
                                <Form.Group>
                                    <div style={{ marginTop: "20px" }}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="myRadio"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="RegistrationGroup"
                                                style={{ padding: "5px" }}
                                            />
                                            Registration Group
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="myRadio"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value="TeachingGroup"
                                                style={{
                                                    padding: "5px",
                                                    marginLeft: "7px",
                                                }}
                                            />
                                            Teaching Group
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
                                        type="submit"
                                        style={{
                                            border: "1px solid black",
                                            color: "black",
                                        }}
                                        onClick={() => handleCloseRename()}
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
                                        onClick={() => updateClass()}
                                        disabled={isSubmitting}
                                    >
                                        Update Class
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

export default RenameClass;
