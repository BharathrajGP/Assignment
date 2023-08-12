import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import * as constants from "../../../helper/constants";
import * as messages from "../../../helper/messages";
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray } from "../../../util/utils";
import { styles } from '../'

import "../../../assets/stlyes/Modals.css";

const AssignClass = ({ isUserId, setAssignClass, getData }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const [classOptions, setClassOptions] = useState();
    const [classId, setClassId] = useState();
    const [classes, setClasses] = useState('');
    const [sub, setSub] = useState('');
    const [errMessage, setErrMessage] = useState(false);
    const [errMessage1, setErrMessage1] = useState(false);


    const getAllClassData = async () => {
        const adminClass = await commonApi.adminClass();
        if (!isEmptyArray(adminClass.Items)) {
            const responseData = adminClass.Items
            const array = [];
            responseData.map((item) => {
                array.push({ value: item.classId, label: item.className })
            })
            setClassOptions(array);
        } else {
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
            console.log({ subId })
            array.push({
                value: subId, label: 'All'
            })
            responseData.map((item) => {
                array.push({ value: item.id, label: item.subjectName })
            })
            setSelectedSujects(array);
        }
    }

    const AssignClasses = async (classData) => {
        const classDetails = await commonApi.assignClass(classData);
        getData();
    }



    console.log(isUserId);
    useEffect(() => {
        getAllClassData();
    }, [])
    return (
        <Formik
            initialValues={{
                selectClass: '',
                selectSubjects: [],
            }}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                if (classes === undefined || classes === '' || classes === null) {
                    setErrMessage(true)
                }
                else if (sub === undefined || sub === '' || sub === null) {
                    setErrMessage1(true)
                }
                else {
                    const classData = {
                        id: isUserId,
                        classId: classId,
                        subject: [selectedSujects.value].flat(),
                    }
                    AssignClasses(classData);
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
                        <label for="Class">{constants.Common.Class} </label>
                        <Select
                            defaultValue={selectedClass}
                            onChange={(e) => {
                                setSelectedClass(e)
                                getAllSubjectData(e)
                                setClasses(e.value);
                                setErrMessage(false)
                            }}
                            options={classOptions}
                            placeholder="please select"
                        />
                        {errMessage && (<small className="text-danger">{messages.VALIDATION.PLEASE_SELECT_A_CLASS}</small>)}
                    </Form.Group>

                    <Form.Group style={styles.radioMargin}>
                        <label for="Subjects">{constants.Common.Subjects} </label>

                        <Select
                            defaultValue={selectedSujects}
                            onChange={(e) => {
                                setSelectedSujects(e)
                                setSub(e.value);
                                setErrMessage1(false)
                            }}
                            options={selectedSujects}
                            placeholder="please select"
                            isDisabled={selectedClass === null}
                        />
                        {errMessage1 && (<small className="text-danger">{messages.VALIDATION.PLEASE_SELECT_A_SUBJECT}</small>)}
                    </Form.Group>
                    <Form.Group style={styles.button}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setAssignClass(false);
                            }}
                        >
                            {constants.Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                        >
                            {constants.Common.AddClass}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export { AssignClass };
