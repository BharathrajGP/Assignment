import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common } from "../../../../helper/constants";
import * as commonApi from "../../../../api/commonApi"
import { isEmptyArray, isEmptyObject } from "../../../../util/utils";
import * as constants from '../../../../helper/constants';

import "../../../../assets/stlyes/Modals.css";


const MoveForm = ({ isPupilId, setMove, pupilClassID, getData }) => {
    const [classOptions, setClassOptions] = useState();
    const [presentClass, setPresentClass] = useState();
    const [selectedClass, setSelectedClass] = useState('');
    const [errMessage, setErrMessage] = useState(false);
    const MySwal = withReactContent(Swal);


    const style = {
        modal_form: {
            width: "100%",
        },
    };
    const getAllClassData = async () => {
        const adminClass = await commonApi.adminClass();
        if (!isEmptyArray(adminClass.Items)) {
            const responseData = adminClass.Items
            const found = responseData.find(element => element.classId === pupilClassID);
            setPresentClass(found);
            const array = [];
            responseData.map((item) => {
                if (pupilClassID !== item.classId) {
                    array.push({ value: item.classId, label: item.className })
                }
            })
            setClassOptions(array);
        } else {
            console.log("adminClass", adminClass);
        }
    }

    const movePupilClass = async (formData) => {
        const movePupil = await commonApi.movePupil(formData);
        console.log(movePupil)
        getData();
        // if (movePupil.status === 200) {
        //     setMove(false);
        //     MySwal.fire({
        //         title: constants.Common.PupilMovedSuccessfully,
        //         icon: "success",
        //     }).then(() => {
        //         getData();
        //     });
        // }
    }

    useEffect(() => {
        getAllClassData()
    }, [])
    return (
        <Formik
            enableReinitialize
            initialValues={{
                moveFrom: presentClass && presentClass.className,
                to: "",
            }}

            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                if (selectedClass === undefined || selectedClass === '' || selectedClass === null) {
                    setErrMessage(true)
                } else {
                    const formData = {
                        id: isPupilId,
                        present_class_id: selectedClass
                    }
                    console.log({ formData });
                    movePupilClass(formData)
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
                <Form onSubmit={handleSubmit} style={style.modal_form}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{Common.MoveFrom}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Common.MoveFrom}
                            name={Common.moveFrom}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.moveFrom}
                            disabled={true}
                        />
                        {errors.moveFrom &&
                            touched.moveFrom &&
                            errors.moveFrom && (
                                <small style={{ color: "red" }}>
                                    {errors.moveFrom}
                                </small>
                            )}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label for="to">
                            {Common.To}
                        </Form.Label>
                        <Select
                            onChange={(e) => {
                                setSelectedClass(e.value);
                                setErrMessage(false);
                            }}
                            options={classOptions}
                            placeholder={Common.To}
                        />
                        {errMessage && (<small className="text-danger">{constants.Common.pleaseSelectClassToMove}</small>)}
                    </Form.Group>
                    <Form.Group style={{ marginTop: "20px" }}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setMove(false);
                            }}
                        >
                            {Common.Cancel}
                        </Button>&nbsp;
                        <Button
                            type="submit"
                            variant="success"
                            disabled={isSubmitting}
                        >
                            {constants.Common.Move}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export default MoveForm;
