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

function AssignClass() {
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const options = [
        { value: " ", label: "Please Select" },
        { value: "Elephant", label: "Elephant" },
        { value: "Lion", label: "Lion" },
        { value: "Tiger", label: "Tiger" },
        { value: "Cheetah", label: "Cheetah" },
        { value: "SenSupport", label: "Sen Support" },
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
    // const SignupSchema = Yup.object().shape({
    //     class: Yup.string().required("Required"),
    //     subjects: Yup.string().required("Required"),
    // });

    return (
        <div>
            <button onClick={handleOpenEdit} style={{ background: "none" }}>
                {/* <EditIcon /> */}
                <AddIcon />
                Assign Class
            </button>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* <Box sx={style} >
        <Typography style={{marginTop:'10px',marginBottom:'20px',textAlign:'center'}}><p style={{fontSize:'22px',textShadow:'1px 1px grey'}}>Add Class - Pupil's Name</p></Typography>
          <Typography style={{marginTop:'30px',marginBottom:'30px'}}>
        <div style={{borderBottom:'1px solid grey'}}>
        <label for="Class">Class</label>
        </div>
        <div style={{gap:'10px',marginTop:'10px'}}>
        <select id="" style={{width:'100%',boxShadow:'1px 1px grey',borderRadius:'5px',height:'30px'}}>
            <option value="" name="Class">Please Select</option>
            <option value="Lion" name="Class">Lion</option>
            <option value="Tiger" name="Class">Tiger</option>
            <option value="Elephant" name="Class">Elephant</option>
            <option value="Cheetah" name="Class">Cheetah</option>
        </select>
        </div>
        </Typography>
        <Typography style={{marginTop:'30px',marginBottom:'30px'}}>
        <div style={{borderBottom:'1px solid grey'}}>
        <label for="Subject">Subject</label>
        </div>
        <div style={{gap:'10px',marginTop:'10px'}}>
        <select id="" style={{width:'100%',boxShadow:'1px 1px grey',borderRadius:'5px',height:'30px'}}>
            <option value="" name="Subject">Please Select</option>
            <option value="All" name="Subject">All</option>
            <option value="Maths" name="Subject">Maths</option>
            <option value="Science" name="Subject">Science</option>
            <option value="PE" name="Subject">PE</option>
            <option value="Reading" name="Subject">Reading</option>
            <option value="Writing" name="Subject">Writing</option>
        </select>
        </div>
        </Typography>
        <Typography  style={{marginTop:'10px'}}><Button type="submit" style={{border:'1px solid black',color:'black'}} onClick={()=>handleCloseEdit()}>Cancel</Button>
          <Button type="submit" style={{background:'green',marginLeft:'20px',color:'white'}} onClick={()=>AddClassForUser()}><AddIcon />Add Class</Button></Typography>
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
                            Add Class - Pupil's Name
                        </p>
                    </Typography>
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
                                        subjects: selectedOption.value,
                                        class: selectedOption2.value,
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
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
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
                                        defaultValue={selectedOption2}
                                        onChange={setSelectedOption2}
                                        options={options2}
                                        placeholder="please select"
                                    />
                                </div>
                                {errors.subjects &&
                                    touched.subjects &&
                                    errors.subjects}
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
                                        onClick={() => AddClassForUser()}
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

function AddClassForUser() {}

export default AssignClass;
