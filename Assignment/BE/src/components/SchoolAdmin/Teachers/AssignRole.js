import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import * as constants from "../../../helper/constants";
import * as messages from "../../../helper/messages";
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray } from "../../../util/utils";
import { styles } from '../'

import "../../../assets/stlyes/Modals.css";


const AssignRole = ({ isUserId, setAssignRole, getData }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isRole, setIsRole] = useState();
    const [role, setRole] = useState('');
    const [errMessage, setErrMessage] = useState(false);

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
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                if (role === undefined || role === '' || role === null) {
                    setErrMessage(true)
                }
                else {
                    const assignRoleData = {
                        id: isUserId,
                        type: isRole,
                    };
                    AssignRoles(assignRoleData);
                }
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
                <Form onSubmit={handleSubmit} style={styles.modal_form}>
                    <Form.Group>
                        <label for="Class">{constants.Common.Role} </label>

                        <Select
                            defaultValue={selectedOption}
                            onChange={(e) => {
                                getSelectedValue(e);
                                setRole(e.value);
                                setErrMessage(false)
                            }}
                            options={constants.TeacherRoles}
                            placeholder="please select"
                        />
                        {errMessage && (<small className="text-danger">{messages.VALIDATION.PLEASE_SELECT_A_ROLE}</small>)}
                    </Form.Group>
                    <Form.Group style={styles.button}>
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
                        >
                            {constants.Common.AddRole}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export { AssignRole };
