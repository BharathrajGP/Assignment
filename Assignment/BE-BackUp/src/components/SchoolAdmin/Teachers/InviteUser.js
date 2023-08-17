import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { amplifyUrl, Common, MESSAGES, Roles, SUCCESS, VALIDATION } from '../../../helper';
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import { styles } from '../';


import "../../../assets/stlyes/Modals.css";

const InviteUser = ({ setInviteUser, getData }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedClassName, setSelectedClassName] = useState();
    const [selectedSubjects, setSelectedSubjects] = useState();
    const [classSub, setClassSub] = useState([{ class: '', sub: '' }]);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const [classOptions, setClassOptions] = useState();
    const [classId, setClassId] = useState();
    const [classSubjectNames, setClassSubjectNames] = useState([]);
    const [errMessage, setErrMessage] = useState(false);
    const [classes, setClasses] = useState('');
    const [sub, setSub] = useState('');
    const [errMessage2, setErrMessage2] = useState(false);
    const [errMessage1, setErrMessage1] = useState(false);
    const MySwal = withReactContent(Swal);



    const SignupSchema = Yup.object().shape({
        email: Yup.string().trim().email().required(),
    });

    const addItem = (event) => {
        setSelectedClassName(event.label)
        setClassSub(event);
    };
    const addSubject = (event) => {
        const data = [...classSubjectNames];
        if (isEmptyArray(classSubjectNames)) {
            data.push({ className: classSub, subjectName: event });
            setClassSubjectNames(data);
        }
        else {
            var count = 0;
            for (let i = 0; i < classSubjectNames.length; i++) {
                if (classSubjectNames[i].subjectName.value === event.value && classSubjectNames[i].className.value === selectedClass) {
                    count++;
                }
            }
            if (count === 0) {
                data.push({ className: classSub, subjectName: event })
                setClassSubjectNames(data);
                setErrMessage(false);
            }
            else {
                setErrMessage(true);
            }
        }
    }

    const finalClassSub = () => {
        var finalData = [];
        classSubjectNames.map((item) => {
            var arrData = [];
            var data = classSubjectNames.filter((e) => e.className.value === item.className.value);
            data.map(ele => arrData.push(ele.subjectName.value))
            finalData.push({ id: item.className.value, subject: arrData })
        })
        const finalarr = finalData.filter((ele, index) => finalData.findIndex((item) => item.id === ele.id) === index)
        return (finalarr);
    }


    const getAllClassData = async () => {
        const adminClass = await commonApi.adminClass();
        if (!isEmptyArray(adminClass.Items)) {
            const responseData = adminClass.Items
            const array = [];
            responseData.map((item) => {
                array.push({ value: item.classId, label: item.name })
            })
            setClassOptions(array);
        }
    }

    const getAllSubjectData = async (e) => {
        setClassId(e.value);
        const getSubjects = await commonApi.getSubjectByClassId({ classId: e.value });
        if (!isEmptyArray(getSubjects.Items)) {
            const responseData = getSubjects.Items;
            const array = [];
            const subId = [];
            responseData.map((idz) => { subId.push(idz.id) })
            responseData.map((item) => {
                array.push({ value: item.id, label: item.subjectName })
            })
            setSelectedSujects(array);
        }
    }

    const invite = async (userData) => {
        const inviteUser = await commonApi.inviteUser(userData);
        if (isEmptyObject(inviteUser)) {
            MySwal.fire({
                icon: "success",
                text: SUCCESS.User_Invited,
            }).then(() => getData());
        }
        setInviteUser(false);
    }

    useEffect(() => {
        getAllClassData();
    }, [])

    // var verificationLink = `${window.location.href.replace("/SchoolAdmin", "")}`;
    // verificationLink += "/NewUser";
    var verificationLink = `${amplifyUrl.devUrl}/NewUser`

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
                if (classes === undefined || classes === '' || classes === null) {
                    setErrMessage1(true)
                }
                else if (sub === undefined || sub === '' || sub === null) {
                    setErrMessage2(true)
                }
                else {
                    const userData = {
                        verificationLink: verificationLink,
                        email: values.email,
                        classes: finalClassSub(),
                        type: [values.myCheck].flat(),
                    };
                    invite(userData);
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
                <Form
                    onSubmit={handleSubmit}
                    className="modal-form"
                >
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>{Common.Email}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Common.email}
                            name={Common.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email &&
                            touched.email &&
                            errors.email && (
                                <small className='text-danger'>
                                    {errors.email}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group>
                        <p>
                            {MESSAGES.Roles_Select_Role_As_Agreed_By_Headteacher}
                            <hr />
                        </p>
                        <Row>
                            <Col style={styles.inviteUserCol}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Admin"
                                    />
                                    {Roles.Admin}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="LeadTeacher"
                                    />
                                    {Roles.LeadTeacher}
                                </label>
                            </Col>
                            <Col style={styles.inviteUserCol}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="Teacher"
                                    />
                                    {Roles.Teacher}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="myCheck"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value="SupportingStaff"
                                    />
                                    {Roles.SupportStaff}
                                </label>
                            </Col>
                        </Row>
                        {errors.myCheck &&
                            touched.myCheck &&
                            errors.myCheck}
                    </Form.Group>
                    <Form.Group style={styles.inviteUserMar}>
                        <p>
                            {MESSAGES.Classes_Select_Classes_That_This_User_Will_Be_Teaching_Or_Supporting}
                            <hr />
                        </p>
                        <div style={styles.inviteUserSelectDiv}>
                            <label for="Class" style={styles.inviteUserSelectClass}>{Common.Class} </label>
                            <label for="Subjects" style={styles.inviteUserSelectSub}>{Common.Subjects}{" "}</label>
                        </div>
                        <div>
                            {
                                classSubjectNames.map((item, index) => {
                                    return (
                                        <Row className='d-flex justify-content-between'>
                                            <Col>{item.className.label}</Col>
                                            <Col style={{ paddingLeft: '110px' }}>{item.subjectName.label}</Col>
                                            <Col> <button onClick={() => { classSubjectNames.splice(index, 1); console.log({ index }) }}>{Common.remove}</button></Col>
                                        </Row>
                                    )
                                })}
                            {errMessage && (<small className='text-danger'>{MESSAGES.This_Combination_Already_Exists}</small>)}
                        </div>
                        <div style={styles.inviteUserSelectDiv}>
                            <Form.Group style={styles.inviteUserSelectClass}>
                                <Select
                                    defaultValue={selectedClass}
                                    onChange={(e) => {
                                        setSelectedClass(e.value);
                                        addItem(e);
                                        getAllSubjectData(e);
                                        setErrMessage1(false);
                                        setClasses(e.value);
                                    }}
                                    options={classOptions}
                                    placeholder="please select"
                                />
                                {errMessage1 && (<small className="text-danger">{VALIDATION.PLEASE_SELECT_A_CLASS}</small>)}
                            </Form.Group>
                            <Form.Group style={styles.inviteUserSelectSub}>
                                <Select
                                    defaultValue={selectedSubjects}
                                    onChange={(e) => {
                                        setSelectedSubjects(e.value);
                                        addSubject(e);
                                        setErrMessage2(false);
                                        setSub(e.value);
                                    }}
                                    options={selectedSujects}
                                    placeholder="please select"
                                    isDisabled={selectedClass === null}
                                />
                                {errMessage2 && (<small className="text-danger">{VALIDATION.PLEASE_SELECT_A_SUBJECT}</small>)}
                            </Form.Group>
                        </div>



                    </Form.Group>
                    <Form.Group style={styles.inviteUserMar}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setInviteUser(false);
                            }}
                        >
                            {Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                        >
                            {Common.InviteUser}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export { InviteUser };
