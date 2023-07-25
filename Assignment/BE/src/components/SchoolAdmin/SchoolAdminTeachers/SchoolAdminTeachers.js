import React, { useState } from "react";
import SchoolAdminTeachersTables from "./SchoolAdminTeachersTable";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { Common } from "../../../helper/constants";

const style = {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: "1px 2px 9px black",
    p: 4,
};

function invite() {
    // return (window.location = "/SchoolAdmin");
}
function SchoolAdminTeachers() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const options = [
        { value: " ", label: "Please Select" },
        { value: "Elephant", label: "Elephant" },
        { value: "Lion", label: "Lion" },
        { value: "Tiger", label: "Tiger" },
        { value: "Cheetah", label: "Cheetah" },
    ];
    const options2 = [
        { value: " ", label: "Please Select" },
        { value: "All", label: "All" },
        { value: "Maths", label: "Maths" },
        { value: "Science", label: "Science" },
        { value: "PE", label: "PE" },
        { value: "Writing", label: "Writing" },
        { value: "Reading", label: "Reading" },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
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
        <div>
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
                    className="btn-sm btn-round has-ripple ml-2 btn btn-success"
                    onClick={handleOpen}
                    style={{ background: "green", color: "whitesmoke" }}
                >
                    <PersonAddIcon /> Invite User
                </Button>
            </div>
            <SchoolAdminTeachersTables />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <Box sx={style} >
          <Typography style={{marginTop:'10px',marginBottom:'20px',textAlign:'center'}}><p style={{fontSize:'22px',textShadow:'1px 1px grey',borderBottom:'1px solid grey',boxShadow:'1px grey'}}>Create Invite</p></Typography>
          <Typography><label>Email :</label><br /><input type="email" style={{marginTop:'3px',width:'100%',boxShadow:'1px 1px -1px -1px grey',borderRadius:'7px'}}/></Typography>
          <Typography style={{marginTop:'30px',justifyContent:'space-between'}}>
            <p style={{borderBottom:'1px solid grey'}}>Roles - Select Role(s) as agreed by Headteacher</p>
            <label>
          <input type="checkbox" name="check" value="Admin" style={{padding:'5px'}}/>
          Admin
        </label>
        <label>
          <input type="checkbox" name="check" value="Lead Teacher" style={{padding:'5px',marginLeft:'17px'}}/>
          Lead Teacher
        </label>
        <label>
          <input type="checkbox" name="check" value="Teacher" style={{padding:'5px',marginLeft:'17px'}}/>
          Teacher
        </label>
        <label>
          <input type="checkbox" name="check" value="Supporting Staff" style={{padding:'5px',marginLeft:'17px'}}/>
          Supporting Staff
        </label>
        </Typography>
        <Typography style={{marginTop:'30px',marginBottom:'30px'}}>
        <div style={{borderBottom:'1px solid grey'}}>
        <label for="Classes">Classes  </label>
        <label for="Subject" style={{marginLeft:'35%'}}>Subject  </label>
        </div>
        <div style={{gap:'10px',marginTop:'10px'}}>
        <select id="" style={{width:'45%',boxShadow:'1px 1px grey',borderRadius:'5px',height:'30px'}}>
            <option value="" name="Classes">Please Select</option>
            <option value="Elephant" name="Classes">Elephant</option>
            <option value="Lion" name="Classes">Lion</option>
            <option value="Tiger" name="Classes">Tiger</option>
            <option value="Cheetah" name="Classes">Cheetah</option>
        </select>
        
        <select id="" style={{width:'45%',marginLeft:'15px',boxShadow:'1px 1px grey',borderRadius:'5px',height:'30px'}}>
            <option value="" name="Subject">Please Select</option>
            <option value="All" name="Subject">All</option>
            <option value="Maths" name="Subject">Maths</option>
            <option value="PE" name="Subject">PE</option>
            <option value="Science" name="Subject">Science</option>
            <option value="Reading" name="Subject">Reading</option>
            <option value="Writing" name="Subject">Writing</option>
        </select>
        </div>
        </Typography>
        <Typography  style={{marginTop:'10px'}}><Button type="submit" style={{border:'1px solid black',color:'black'}} onClick={()=>handleClose()} >Cancel</Button>
          <Button type="submit" style={{background:'green',marginLeft:'20px',color:'white'}} onClick={()=>invite()}>Invite User</Button></Typography>
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
                            Create Invite
                        </p>
                    </Typography>
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
                                        class: selectedOption.value,
                                        subjects: selectedOption2.value,
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
                            <Form onSubmit={handleSubmit}>
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
                                <div style={{ marginTop: "20px" }}>
                                    <p
                                        style={{
                                            borderBottom: "1px solid grey",
                                        }}
                                    >
                                        Roles - Select Role(s) as agreed by
                                        Headteacher
                                    </p>
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
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        Lead Teacher
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="myCheck"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="Teacher"
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
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
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        Support Staff
                                    </label>
                                </div>
                                {errors.myCheck &&
                                    touched.myCheck &&
                                    errors.myCheck}
                                <p
                                    style={{
                                        borderBottom: "1px solid grey",
                                        marginTop: "30px",
                                    }}
                                >
                                    Roles - Select Role(s) as agreed by
                                    Headteacher
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <div
                                        style={{
                                            borderBottom: "1px solid grey",
                                            marginRight: "20px",
                                            width: "48%",
                                        }}
                                    >
                                        <label for="Class">Class </label>

                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            placeholder="please select"
                                        />
                                    </div>
                                    {errors.class &&
                                        touched.class &&
                                        errors.class}
                                    <div
                                        style={{
                                            borderBottom: "1px solid grey",
                                            width: "48%",
                                        }}
                                    >
                                        <label for="Subjects">Subjects </label>

                                        <Select
                                            defaultValue={selectedOption2}
                                            onChange={setSelectedOption2}
                                            options={options2}
                                            placeholder="please select"
                                        />
                                    </div>
                                    {errors.subjects &&
                                        touched.subjects &&
                                        errors.subjects}
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <Button
                                        type="submit"
                                        style={{
                                            border: "1px solid black",
                                            color: "black",
                                        }}
                                        onClick={() => handleClose()}
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
                                        onClick={() => invite()}
                                        disabled={isSubmitting}
                                    >
                                        Invite User
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}

export default SchoolAdminTeachers;
