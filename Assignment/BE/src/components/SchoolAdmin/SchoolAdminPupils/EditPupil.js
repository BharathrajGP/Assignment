import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import Form from "react-bootstrap/Form";
import { Common } from "../../../helper/constants";

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

function Update() {}
function EditPupil({ pupilId }) {
    const [pupilDetails, setPupilDetails] = useState("");
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const options = [
        { value: " ", label: "Please Select" },
        { value: "Not SEN", label: "--" },
        { value: "SA", label: "SA" },
        { value: "SA+", label: "SA+" },
        { value: "Statement", label: "Statement" },
        { value: "SenSupport", label: "Sen Support" },
        { value: "Education", label: "Education, Health and Care Plan" },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const SignupSchema = Yup.object().shape({
        foreName: Yup.string().required(Common.Required),
        surName: Yup.string().required(Common.Required),
    });
    const idForPupildata = async () => {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        const getIndividualPupil = await commonApi.getIndividualPupil({
            id: pupilId,
        });
        console.log(email);
        console.log(getIndividualPupil);
        console.log(isEmptyArray(getIndividualPupil));
        console.log(isEmptyObject(getIndividualPupil));
        if (!isEmptyObject(getIndividualPupil)) {
            console.log({ getIndividualPupil });
            console.log(getIndividualPupil.data);
            setPupilDetails(getIndividualPupil.data);
            console.log(pupilDetails);
            console.log(pupilDetails.Items.id);
            console.log(pupilDetails.Items.firstname);
            console.log(pupilDetails.Items.sen_status);
        } else {
        }
    };

    // useEffect(() => {
    //     idForPupildata();
    // }, []);

    return (
        <div>
            <button
                onClick={() => {
                    handleOpenEdit();
                    idForPupildata();
                }}
            >
                <EditIcon />
                {Common.EditPupil}
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
                            {Common.EditPupil}
                        </p>
                    </Typography>
                    <Formik
                        initialValues={{
                            // foreName: pupilDetails.Items.firstname,
                            // surName: pupilDetails.Items.lastname,
                            // foreName: "",
                            // surName: "",
                            // senStatus: pupilDetails.Items.sen_status,
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
                                        foreName: values.foreName,
                                        surName: values.surName,
                                        senStatus: selectedOption.value,
                                        myCheck: values.myCheck,
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
                                    <Form.Label>{Common.ForeName}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={Common.ForeName}
                                        name={Common.foreName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.foreName}
                                    />
                                    {errors.foreName &&
                                        touched.foreName &&
                                        errors.foreName && (
                                            <small style={{ color: "red" }}>
                                                {errors.foreName}
                                            </small>
                                        )}
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>{Common.SurName}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={Common.SurName}
                                        name={Common.surName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surName}
                                    />
                                    {errors.surName &&
                                        touched.surName &&
                                        errors.surName && (
                                            <small style={{ color: "red" }}>
                                                {errors.surName}
                                            </small>
                                        )}
                                </Form.Group>
                                <Form.Group>
                                    <div
                                        style={{
                                            borderBottom: "1px solid grey",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <Form.Label for="Sen_Status">
                                            {Common.senStatus}
                                        </Form.Label>
                                    </div>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        placeholder={Common.pleaseSelect}
                                    />
                                    {errors.senStatus &&
                                        touched.senStatus &&
                                        errors.senStatus}
                                </Form.Group>
                                <Form.Group>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={Common.ChildLookedAfter}
                                            style={{ padding: "5px" }}
                                        />
                                        {Common.ChildLookedAfter}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={Common.FreeSchoolMeals}
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        {Common.FreeSchoolMeals}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={Common.ServiceChild}
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        {Common.ServiceChild}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={
                                                Common.EnglishAsAnAdditionalLanguage
                                            }
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        {Common.EnglishAsAnAdditionalLanguage}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={Common.FreeSchoolMealsEver6}
                                            style={{
                                                padding: "5px",
                                                marginLeft: "7px",
                                            }}
                                        />
                                        {Common.FreeSchoolMealsEver6}
                                    </label>

                                    {errors.myCheck &&
                                        touched.myCheck &&
                                        errors.myCheck}
                                </Form.Group>
                                <Form.Group>
                                    <Button
                                        type="submit"
                                        style={{
                                            border: "1px solid black",
                                            color: "black",
                                        }}
                                        onClick={() => handleCloseEdit()}
                                    >
                                        {Common.Cancel}
                                    </Button>
                                    <Button
                                        type="submit"
                                        style={{
                                            background: "green",
                                            marginLeft: "20px",
                                            color: "white",
                                        }}
                                        onClick={() => Update()}
                                        disabled={isSubmitting}
                                    >
                                        {Common.Update}
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

export default EditPupil;
