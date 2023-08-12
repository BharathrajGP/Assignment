import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

import * as constants from '../../../helper/constants';
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray, isEmptyObject } from "../../../util/utils";

import "../../../assets/stlyes/Modals.css";

const InviteUser = ({ setInviteUser, getData }) => {
    const [selectedClass, setSelectedClass] = useState();
    const [selectedClassName, setSelectedClassName] = useState();
    const [selectedSubjects, setSelectedSubjects] = useState();
    const [selectedSubName, setSelectedSubName] = useState();
    const [classSub, setClassSub] = useState([{ class: '', sub: '' }]);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const [classOptions, setClassOptions] = useState();
    const [classId, setClassId] = useState();
    const [classSubjectNames, setClassSubjectNames] = useState([]);
    const [selectedClassSub, setSelectedClassSub] = useState([]);
    const [errMessage, setErrMessage] = useState(false);


    const SignupSchema = Yup.object().shape({
        email: Yup.string().trim().email().required(),
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

    const addItem = (event) => {
        console.log("event", event.label);
        setSelectedClassName(event.label)
        setClassSub(event);
    };
    const addSubject = (event) => {
        const data = [...classSubjectNames];
        console.log(isEmptyArray(classSubjectNames))
        console.log({ event })
        if (isEmptyArray(classSubjectNames)) {
            console.log('1st ')
            data.push({ className: classSub, subjectName: event });
            setClassSubjectNames(data);
        }
        else {

            console.log(classSubjectNames.length);
            var count = 0;
            for (let i = 0; i < classSubjectNames.length; i++) {
                console.log(classSubjectNames[i].subjectName.value)
                console.log(classSubjectNames[i].className.value)
                console.log(event.value);
                console.log({ selectedClass })
                if (classSubjectNames[i].subjectName.value === event.value && classSubjectNames[i].className.value === selectedClass) {
                    console.log(classSubjectNames[i].subjectName.value !== event.value);
                    count++;
                }
            }
            if (count === 0) {
                data.push({ className: classSub, subjectName: event })
                setClassSubjectNames(data);
                setErrMessage(false);
            }
            else {
                console.log({ count })
                setErrMessage(true);
            }
        }
    }

    const finalClassSub = () => {
        let data = [];
        let classData = {};
        let subData = [];
        let classzz = '';
        console.log({ classSubjectNames })
        let dataName = classSubjectNames;
        for (let i = 0; i < classSubjectNames.length; i++) {
            let c = 0;
            for (let j = 0; j < classSubjectNames.length; j++) {
                if (classSubjectNames[i].className.value === classSubjectNames[j].className.value) {
                    console.log(classSubjectNames[i].subjectName.value)
                    // subData.push(classSubjectNames[i].subjectName.value);
                    // classSubjectNames[j].className.value = ''
                    if (classSubjectNames[i].subjectName.value !== classSubjectNames[j].subjectName.value && classSubjectNames[i].className.value === classSubjectNames[j].className.value) {
                        subData.push(classSubjectNames[i].classSubjectNames.value);
                        c++;
                        // classSubjectNames[j].className.value = '';
                        break;
                    }

                }
            }
            if (c >= 1) {
                // subData.push(classSubjectNames[i].subjectName.value);
                data.push({ id: classSubjectNames[i].className.value, subject: subData })
                // subData = [];
            }
            // subData = [];

            // data.push([classSubjectNames[i].className.value, subData]);
            // console.log({ data })
            // classSubjectNames[i].className.value = '';
        }
        console.log({ subData });
        console.log({ data })
        return (data)

    }
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
            responseData.map((item) => {
                array.push({ value: item.id, label: item.subjectName })
            })
            setSelectedSujects(array);
        }
        console.log({ selectedSujects })
    }

    const invite = async (userData) => {
        const inviteUser = await commonApi.inviteUser(userData);
        console.log(isEmptyObject(inviteUser))
        console.log(isEmptyArray(inviteUser))
        console.log({ inviteUser });
        getData();
        setInviteUser(false);
    }

    // const remove=(idx)=>{
    //     array.splice(index, 1)
    // }

    useEffect(() => {
        getAllClassData();
        // invite();
    }, [])
    var verificationLink = `${window.location.href.replace("/SchoolAdmin", "")}`;
    verificationLink += "/NewUser";
    let i = 0;
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
                    verificationLink: verificationLink,
                    email: values.email,
                    classes: finalClassSub(),
                    type: values.myCheck,
                };
                invite(userData);
                // finalClassSub();
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
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <label for="Class" style={{
                                width: "48%",
                                marginRight: "40px",
                                fontWeight: 'bold'
                            }}>{constants.Common.Class} </label>
                            <label for="Subjects" style={{
                                width: "48%",
                                marginRight: "20px", fontWeight: 'bold'
                            }}>
                                {constants.Common.Subjects}{" "}
                            </label></div>
                        <div>
                            {
                                classSubjectNames.map((item, index) => {
                                    return (
                                        <Row style={{ display: 'flex', justifyContent: "space-between" }}>
                                            <Col>{item.className.label}</Col>
                                            <Col style={{ paddingLeft: '110px' }}>{item.subjectName.label}</Col>
                                            <Col> <button onClick={() => { classSubjectNames.splice(index, 1); console.log({ index }) }}>remove</button></Col>
                                        </Row>
                                    )
                                })}
                            {errMessage && (<small className='text-danger'>This combination Already Exists</small>)}
                        </div>
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


                                <Select
                                    defaultValue={selectedClass}
                                    onChange={(e) => {
                                        setSelectedClass(e.value);
                                        addItem(e);
                                        getAllSubjectData(e);
                                    }}
                                    options={classOptions}
                                    placeholder="please select"
                                // value={selectedClass}
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


                                <Select
                                    defaultValue={selectedSubjects}
                                    onChange={(e) => {
                                        setSelectedSubjects(e.value);
                                        addSubject(e);

                                    }}
                                    // options={constants.AssignSubjects}
                                    options={selectedSujects}
                                    placeholder="please select"
                                    // value={selectedSubName}
                                    isDisabled={selectedClass === null || selectedClass === ''}
                                />
                                {errors.subjects &&
                                    touched.subjects &&
                                    errors.subjects}
                            </Form.Group>
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
                        // onClick={(e) => {
                        //     setInviteUser(false);
                        // }}
                        >
                            {constants.Common.InviteUser}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    )
}

export { InviteUser };
