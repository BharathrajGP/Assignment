import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';
import { isEmptyArray } from "../../../util/utils";

import "../../../assets/stlyes/Modals.css";

const AssignClass = ({ isUserId, setAssignClass, getData }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSujects, setSelectedSujects] = useState(null);
    const [classOptions, setClassOptions] = useState();
    const [classId, setClassId] = useState();

    const style = {
        modal_form: {
            width: "100%",
        },
    };

    const SignupSchema = Yup.object().shape({
        select_class: Yup.string()
            .required('Required'),
        select_subjects: Yup.array()
            .min(1, 'Please select at least one option.'),
    });

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
                select_class: '',
                select_subjects: [],
            }}
            // validationSchema={SignupSchema}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const classData = {
                    id: isUserId,
                    classId: classId,
                    subject: [selectedSujects.value].flat(),
                }
                AssignClasses(classData);
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
                        <label for="Class">{constants.Common.Class} </label>

                        <Select
                            defaultValue={selectedClass}
                            onChange={(e) => {
                                setSelectedClass(e)
                                getAllSubjectData(e)
                            }}
                            id='select_class'
                            // onChange={setSelectedClass}
                            options={classOptions}
                            placeholder="please select"
                        />
                        {errors.select_class && touched.select_class && errors.select_class && (
                            <small style={{ color: "red" }}>
                                {errors.select_class}
                            </small>
                        )}
                    </Form.Group>

                    <Form.Group style={{ marginTop: "20px" }}>
                        <label for="Subjects">{constants.Common.Subjects} </label>

                        <Select
                            defaultValue={selectedSujects}
                            onChange={setSelectedSujects}
                            id='select_subjects'
                            // options={constants.AssignSubjects}
                            options={selectedSujects}
                            placeholder="please select"
                        />
                        {errors.select_subjects && touched.select_subjects && errors.select_subjects && (
                            <small style={{ color: "red" }}>
                                {errors.select_subjects}
                            </small>
                        )}
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
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
                            disabled={isSubmitting}
                        >
                            {constants.Common.AddClass}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export default AssignClass;
