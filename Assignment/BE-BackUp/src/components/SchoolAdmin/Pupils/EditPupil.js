import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import { senStatusOptions } from "../../../helper/constants";
import { isEmptyObject, isEmptyArray } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";

import "../../../assets/stlyes/Modals.css";


const EditPupil = ({ isPupilId, setEditPupil, getData }) => {
    const [isSenStatus, setIsSenStatus] = useState();
    const [pupilDetails, setPupilDetails] = useState();
    const [defaultOption, setDefaultOption] = useState();
    const [isOtherNeeds, setIsOtherNeeds] = useState({});
    const [isCla, setIsCla] = useState();
    const [isFsm, setIsFsm] = useState();
    const [isFsm6, setIsFsm6] = useState();
    const [isEal, setIsEal] = useState();
    const [isSc, setIsSc] = useState();
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const style = {
        modal_form: {
            width: "100%",
        },
    };

    const SignupSchema = Yup.object().shape({
        foreName: Yup.string().required(constants.Common.Required),
        surName: Yup.string().required(constants.Common.Required),
    });

    const getSelectedValue = (event) => {
        setIsSenStatus(event.value);
    };

    const getPupilData = async () => {
        console.log("isPupilId", isPupilId);
        const getPupil = await commonApi.getPupil({
            id: isPupilId,
        });
        if (!isEmptyArray(getPupil.Items)) {
            const individualData = getPupil.Items;
            const found = senStatusOptions.find(
                (element) => element.value === individualData.senStatus
            );
            setDefaultOption(found);
            setIsFsm6(individualData.otherNeeds.freeSchoolMealsE6);
            setIsFsm(individualData.otherNeeds.freeSchoolMeals);
            setIsCla(individualData.otherNeeds.childLookedAfter);
            setIsEal(individualData.otherNeeds.eal);
            setIsSc(individualData.otherNeeds.serviceChild);
            setPupilDetails(individualData);
            setIsSenStatus(individualData.senStatus);
            setIsOtherNeeds(individualData.otherNeeds);
        } else {
        }
    };

    const updatePupil = async (pupilFormData) => {
        const updatePupil = await commonApi.updatePupil(
            pupilFormData
        );
        console.log(updatePupil);
        // if (updateIndividualPupil.status === 200) {
        //     setEditPupil(false);
        //     MySwal.fire({
        //         title: constants.Common.PupilUpdatedSuccessfully,
        //         icon: "success",
        //     }).then(() => {
        //         getData();
        //     });
        // }
        getData();
    };

    useEffect(() => {
        getPupilData();
    }, []);
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    foreName: pupilDetails && pupilDetails.firstName,
                    surName: pupilDetails && pupilDetails.lastName,
                    senStatus: pupilDetails && pupilDetails.senStatus,
                    myCheck: "",
                }}
                validationSchema={SignupSchema}
                validate={(values) => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const pupilFormData = {
                        id: isPupilId,
                        firstName: values.foreName,
                        lastName: values.surName,
                        senStatus: isSenStatus,
                        otherNeeds: {
                            childLookedAfter: isCla,
                            eal: isEal,
                            freeSchoolMeals: isFsm,
                            freeSchoolMealsE6: isFsm6,
                            serviceChild: isSc,
                        },
                    };
                    updatePupil(pupilFormData);
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
                        style={style.modal_form}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{constants.Common.ForeName}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={constants.Common.ForeName}
                                name={constants.Common.foreName}
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{constants.Common.SurName}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={constants.Common.SurName}
                                name={constants.Common.surName}
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
                            {console.log("defaultOption", defaultOption)}
                            <Form.Label for="Sen_Status">
                                {constants.Common.senStatus}
                            </Form.Label>
                            {defaultOption === undefined ? (
                                <Select
                                    defaultValue={defaultOption && defaultOption}
                                    onChange={(e) => {
                                        getSelectedValue(e);
                                    }}
                                    options={senStatusOptions}
                                    placeholder={constants.Common.pleaseSelect}
                                />
                            ) : (
                                <div>
                                    {defaultOption && (
                                        <Select
                                            defaultValue={defaultOption && defaultOption}
                                            onChange={(e) => {
                                                getSelectedValue(e);
                                            }}
                                            options={senStatusOptions}
                                            placeholder={constants.Common.pleaseSelect}
                                        />
                                    )}
                                </div>
                            )}


                            {errors.senStatus &&
                                touched.senStatus &&
                                errors.senStatus}
                        </Form.Group>
                        <Form.Group>
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
                                            name={constants.Common.myCheck}
                                            onChange={(e) => {
                                                setIsCla(!isCla);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                constants.Common.ChildLookedAfter
                                            }
                                            style={{ padding: "5px" }}
                                            checked={isCla && isCla}
                                        />
                                        {constants.Common.ChildLookedAfter}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={constants.Common.myCheck}
                                            onChange={(e) => {
                                                setIsFsm(!isFsm);
                                            }}
                                            onBlur={handleBlur}
                                            value={constants.Common.FreeSchoolMeals}
                                            checked={isFsm && isFsm}
                                        />
                                        {constants.Common.FreeSchoolMeals}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={constants.Common.myCheck}
                                            onChange={(e) => {
                                                setIsSc(!isSc);
                                            }}
                                            onBlur={handleBlur}
                                            value={constants.Common.ServiceChild}
                                            checked={isSc && isSc}
                                        />
                                        {constants.Common.ServiceChild}
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
                                            name={constants.Common.myCheck}
                                            onChange={(e) => {
                                                setIsEal(!isEal);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                constants.Common
                                                    .EnglishAsAnAdditionalLanguage
                                            }
                                            checked={isEal && isEal}
                                        />
                                        {
                                            constants.Common
                                                .EnglishAsAnAdditionalLanguage
                                        }
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={constants.Common.myCheck}
                                            onChange={(e) => {
                                                setIsFsm6(!isFsm6);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                constants.Common
                                                    .FreeSchoolMealsEver6
                                            }
                                            checked={isFsm6 && isFsm6}
                                        />
                                        {constants.Common.FreeSchoolMealsEver6}
                                    </label>
                                </Col>
                            </Row>

                            {errors.myCheck && touched.myCheck && errors.myCheck}
                        </Form.Group>

                        <Form.Group>
                            <Button
                                variant="light"
                                onClick={(e) => {
                                    setEditPupil(false);
                                }}
                            >
                                {constants.Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                {constants.Common.Update}
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </>

    );
}

export default EditPupil;
