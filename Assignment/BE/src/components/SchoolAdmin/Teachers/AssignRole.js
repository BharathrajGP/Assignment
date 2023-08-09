import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray } from "../../../util/utils";

import "../../../assets/stlyes/Modals.css";


const AssignRole = ({ isUserId, setAssignRole, getData }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isRole, setIsRole] = useState();
    const SignupSchema = Yup.object().shape(
        // console.log(isRole)
        // {

        //     isRole: Yup.string().min(2).required("Role is Required"),
        // }
    );
    const style = {
        modal_form: {
            width: "100%",
        },
    };
    const AssignRoles = async (assignRoleData) => {
        console.log(assignRoleData);
        const assignRole = await commonApi.assignRole(assignRoleData);
        console.log(assignRole);
        getData();
    }
    console.log(isUserId);

    const getSelectedValue = (event) => {
        setIsRole(event.value);
    };
    return (
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
                const assignRoleData = {
                    // id: '39e3cdb2-febc-4e11-9b9d-ed806049b929',
                    id: isUserId,
                    type: isRole,
                };
                AssignRoles(assignRoleData);
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
                        <label for="Class">{constants.Common.Role} </label>

                        <Select
                            defaultValue={selectedOption}
                            // onChange={setSelectedOption}
                            onChange={(e) => {
                                getSelectedValue(e);
                            }}
                            options={constants.TeacherRoles}
                            placeholder="please select"
                        />
                        {errors.role && touched.role && errors.role}
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setAssignRole(false);
                            }}
                        >
                            {constants.Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            disabled={isSubmitting}
                        >
                            {constants.Common.AddRole}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export default AssignRole;
