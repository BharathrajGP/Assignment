import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

import * as constants from '../../../helper/constants';
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray } from "../../../util/utils";

import "../../../assets/stlyes/Modals.css";

const InviteUser = ({ setInviteUser }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubjects, setSelectedSubjects] = useState(null);
    const [classSub, setClassSub] = useState([{ class: '', sub: '' }]);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const [classOptions, setClassOptions] = useState();
    const [classId, setClassId] = useState();


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

    const addItem = (event, e1) => {
        console.log("selectedClass", selectedClass && selectedClass);
        console.log({ selectedSubjects });
        console.log({ event })
        console.log({ e1 });
        let newItem = { class: selectedClass && selectedClass.value, sub: selectedSubjects && selectedSubjects.value };
        console.log({ newItem })
        setClassSub([...classSub, newItem]);
        console.log({ classSub })
    };
    const addSub = (event) => {
        const newItem = { sub: event.value };
        console.log({ newItem })
        // setClassSub([...classSub, newItem]);
        // console.log({ classSub })
    }
    // setClassSub({ class: addItem, sub: addSub })


    const getAllClassData = async () => {
        const adminClass = await commonApi.adminClass();
        if (!isEmptyArray(adminClass.Items)) {
            const responseData = adminClass.Items
            // const found = responseData.find(element => element.classId === pupilClassID);
            // setPresentClass(found);
            const array = [];
            responseData.map((item) => {
                // if (pupilClassID !== item.classId) {
                array.push({ value: item.classId, label: item.className })
                // }
            })
            setClassOptions(array);
        } else {
            console.log("adminClass", adminClass);
        }
    }

    const getAllSubjectData = async (e) => {
        console.log("selectedClass", selectedClass && selectedClass)
        console.log({ e });
        setClassId(e.value);
        const getSubjects = await commonApi.getSubjectByClassId({ classId: e.value });
        if (!isEmptyArray(getSubjects.Items)) {
            const responseData = getSubjects.Items;
            const array = [];
            const subId = [];
            responseData.map((idz) => { subId.push(idz.id) })
            console.log({ subId })
            array.push({
                value: subId, label: 'All'
            })
            responseData.map((item) => {
                array.push({ value: item.id, label: item.subjectName })
            })
            setSelectedSujects(array);
        }
        console.log({ selectedSujects })
    }

    const invite = async (userData) => {
        const inviteUser = await commonApi.inviteUser(userData);
        console.log(inviteUser)
    }

    useEffect(() => {
        getAllClassData();
        // invite();
    }, [])

    return (
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
                const userData = {
                    email: values.email,
                    class: selectedClass.value,
                    subjects: selectedSubjects.value,
                    type: values.myCheck,
                };
                invite(userData);
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
                    className="modal-form"
                >
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>{constants.Common.Email}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={constants.Common.ClassName}
                            name={constants.Common.email}
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
                    <Form.Group>
                        <p
                            style={{
                                borderBottom: "1px solid grey",
                            }}
                        >
                            Roles - Select Role(s) as agreed by
                            Headteacher
                        </p>
                        <Row>
                            <Col
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Admin"
                                        style={{ padding: "5px" }}
                                    />
                                    {constants.Roles.Admin}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="LeadTeacher"
                                    />
                                    {constants.Roles.LeadTeacher}
                                </label>
                            </Col>
                            <Col
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Teacher"
                                    />
                                    {constants.Roles.Teacher}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="SupportingStaff"
                                    />
                                    {constants.Roles.SupportStaff}
                                </label>
                            </Col>
                        </Row>
                        {errors.myCheck &&
                            touched.myCheck &&
                            errors.myCheck}
                    </Form.Group>
                    <Form.Group>
                        <p
                            style={{
                                borderBottom: "1px solid grey",
                                marginTop: "30px",
                            }}
                        >
                            Classes - Select Classes that this user
                            will be teaching or supporting
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Form.Group
                                style={{
                                    width: "48%",
                                    marginRight: "20px",
                                }}
                            >
                                <label for="Class">{constants.Common.Class} </label>

                                <Select
                                    defaultValue={selectedClass}
                                    onChange={(e) => {
                                        setSelectedClass(e);
                                        addItem(e);
                                        getAllSubjectData(e);
                                    }}
                                    options={classOptions}
                                    placeholder="please select"
                                />
                                {errors.class &&
                                    touched.class &&
                                    errors.class}
                            </Form.Group>
                            <Form.Group
                                style={{
                                    width: "48%",
                                }}
                            >
                                <label for="Subjects">
                                    {constants.Common.Subjects}{" "}
                                </label>

                                <Select
                                    defaultValue={selectedSubjects}
                                    onChange={(e1) => {
                                        setSelectedSubjects(e1);
                                        addItem(e1)
                                    }}
                                    // options={constants.AssignSubjects}
                                    options={selectedSujects}
                                    placeholder="please select"
                                />
                                {errors.subjects &&
                                    touched.subjects &&
                                    errors.subjects}
                                {console.log(selectedClass && selectedClass)}
                                {console.log(selectedSubjects && selectedSubjects)}
                                {/* {setClassSub({ class: selectedClass && selectedClass, subject: selectedSubjects && selectedSubjects })} */}
                            </Form.Group>
                            {console.log("classSublength", classSub.length)}
                            {console.log("classSublength", classSub)}
                            {/* {classSub.class !== '' && classSub.sub !== '' ? (classSub.map((item) => {
                                return (item.sub.map((subs) => {
                                    return (item.class + "  " + subs);
                                }))
                            })) : ''} */}
                        </div>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setInviteUser(false);
                            }}
                        >
                            {constants.Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                            disabled={isSubmitting}
                        >
                            {constants.Common.InviteUser}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export default InviteUser
