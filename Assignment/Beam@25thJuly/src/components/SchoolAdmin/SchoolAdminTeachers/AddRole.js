import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { TeacherRoles } from "../../../helper/constants";

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

function AddRole() {
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [selectedOption, setSelectedOption] = useState(null);
    const SignupSchema = Yup.object().shape({
        role: Yup.string()
            .oneOf(["Admin", "Lead Teacher", "Teacher", "Support Staff"])
            .required("Role is Required"),
    });

    return (
        <div>
            <button onClick={handleOpenEdit}>
                {/* <EditIcon /> */}
                <AddIcon />
                Add Role
            </button>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <Box sx={style} >
        <Typography style={{marginTop:'10px',marginBottom:'20px',textAlign:'center'}}><p style={{fontSize:'22px',textShadow:'1px 1px grey'}}>Add Role - Pupil's Name</p></Typography>
          <Typography style={{marginTop:'30px',marginBottom:'30px'}}>
        <div style={{borderBottom:'1px solid grey'}}>
        <label for="Role">Role</label>
        </div>
        <div style={{gap:'10px',marginTop:'10px'}}>
        <select id="" style={{width:'100%',boxShadow:'1px 1px grey',borderRadius:'5px',height:'30px'}}>
            <option value="" name="Role">Please Select</option>
            <option value="Admin" name="Role">Admin</option>
            <option value="Lead Teacher" name="Role">Lead Teacher</option>
            <option value="Teacher" name="Role">Teacher</option>
            <option value="Support Staff" name="Role">Support Staff</option>
        </select>
        </div>
        </Typography>
        
        <Typography  style={{marginTop:'10px'}}><Button type="submit" style={{border:'1px solid black',color:'black'}} onClick={()=>handleCloseEdit()}>Cancel</Button>
          <Button type="submit" style={{background:'green',marginLeft:'20px',color:'white'}} onClick={()=>AddRoleForUser()}><AddIcon />Add Role</Button></Typography>
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
                            Add Role - Pupil's Name
                        </p>
                    </Typography>
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
                                        onClick={() => AddRoleForUser()}
                                        disabled={isSubmitting}
                                    >
                                        Add Class
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

function AddRoleForUser() {}

export default AddRole;
