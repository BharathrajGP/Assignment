import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common } from "../../../helper/constants";
import * as commonApi from "../../../api/commonApi";
import { isEmptyObject } from "../../../util/utils";
import * as constants from "../../../helper/constants";
import { styles } from '../'

import "../../../assets/stlyes/Modals.css";



const RenameClass = ({ isClassId, setEditClass, getData }) => {
    const MySwal = withReactContent(Swal);
    const [isGroup, setIsGroup] = useState();
    const [isClassData, setIsClassData] = useState();
    const SignupSchema = Yup.object().shape({
        className: Yup.string().required(Common.Required),
    });

    const updateClass = async (formData) => {
        const getClassById = await commonApi.renameClass(formData);
        // if (getClassById.status === 200) {
        //     MySwal.fire({
        //         title: constants.Common.ClassUpdatedSuccessfully,
        //         icon: "success",
        //     }).then(() => {
        //         getData();
        //     });
        // }
        getData();
    }

    const getClassData = async () => {
        console.log("isClassId", isClassId);
        const getClassById = await commonApi.getClassById({
            id: isClassId,
        });
        if (!isEmptyObject(getClassById)) {
            const resultData = getClassById.Items
            setIsClassData(resultData);
            setIsGroup(resultData.isRegistrationGroup)
        }

    };

    useEffect(() => {
        getClassData();
    }, []);
    return (
        <Formik
            enableReinitialize
            initialValues={{ className: isClassData && isClassData.className, myRadio: "" }}
            validationSchema={SignupSchema}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

                const formData = {
                    id: isClassId,
                    className: values.className,
                    isRegistrationGroup: isGroup
                }
                updateClass(formData);
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{Common.ClassName}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Common.ClassName}
                            name={Common.className}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.className}
                        />
                        {errors.className &&
                            touched.className &&
                            errors.className && (
                                <small style={styles.error_message}>
                                    {errors.className}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group>
                        <div style={styles.radioMargin}>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={(e) => { setIsGroup(!isGroup) }}
                                    onBlur={handleBlur}
                                    value={constants.Common.registrationGroup}
                                    style={styles.radioPadding}
                                    checked={isGroup && isGroup}
                                />
                                {constants.Common.RegistrationGroup}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="myRadio"
                                    onChange={(e) => { setIsGroup(!isGroup) }}
                                    onBlur={handleBlur}
                                    value={constants.Common.teachingGroup}
                                    style={styles.radioPadding}
                                    checked={!isGroup}
                                />
                                {constants.Common.TeachingGroup}
                            </label>
                        </div>
                        {errors.myRadio && touched.myRadio && errors.myRadio && (<small style={styles.error_message}>{errors.myRadio}</small>)}
                    </Form.Group>
                    <Form.Group style={styles.radioMargin}>
                        <Button
                            variant="light"
                            onClick={(e) => {
                                setEditClass(false);
                            }}
                        >
                            {Common.Cancel}
                        </Button>
                        <Button
                            type="submit"
                            variant="success"
                        >
                            {Common.Update}
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}

export { RenameClass };
