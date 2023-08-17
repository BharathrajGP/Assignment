import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common, senStatusOptions } from "../../../helper";
import { isEmptyObject, isEmptyArray } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";
import { styles } from "../";

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
    const [isEHCP, setIsEHCP] = useState();
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const style = {
        modal_form: {
            width: "100%",
        },
    };

    const SignupSchema = Yup.object().shape({
        foreName: Yup.string().trim(' ').required(Common.Required),
        surName: Yup.string().trim(' ').required(Common.Required),
    });

    const getSelectedValue = (event) => {
        setIsSenStatus(event.value);
    };

    const getPupilData = async () => {
        const getPupil = await commonApi.getPupil({
            id: isPupilId,
        });
        if (!isEmptyObject(getPupil.Items)) {
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
            setIsEHCP(individualData.ehcp);
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
        //         title: Common.PupilUpdatedSuccessfully,
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
                        ehcp: isEHCP
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
                            <Form.Label>{Common.ForeName}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={Common.ForeName}
                                name={Common.foreName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.foreName}
                            />
                            {errors.foreName &&
                                touched.foreName &&
                                errors.foreName && (
                                    <small style={styles.error_message}>
                                        {errors.foreName}
                                    </small>
                                )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{Common.SurName}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={Common.SurName}
                                name={Common.surName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surName}
                            />
                            {errors.surName &&
                                touched.surName &&
                                errors.surName && (
                                    <small style={styles.error_message}>
                                        {errors.surName}
                                    </small>
                                )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label for="Sen_Status">
                                {Common.senStatus}
                            </Form.Label>
                            {defaultOption === undefined ? (
                                <Select
                                    defaultValue={defaultOption && defaultOption}
                                    onChange={(e) => {
                                        getSelectedValue(e);
                                    }}
                                    options={senStatusOptions}
                                    placeholder={Common.pleaseSelect}
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
                                            placeholder={Common.pleaseSelect}
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
                                <Col className="d-flex flex-column">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsCla(!isCla);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                Common.ChildLookedAfter
                                            }
                                            checked={isCla && isCla}
                                        />
                                        {Common.ChildLookedAfter}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsFsm(!isFsm);
                                            }}
                                            onBlur={handleBlur}
                                            value={Common.FreeSchoolMeals}
                                            checked={isFsm && isFsm}
                                        />
                                        {Common.FreeSchoolMeals}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsSc(!isSc);
                                            }}
                                            onBlur={handleBlur}
                                            value={Common.ServiceChild}
                                            checked={isSc && isSc}
                                        />
                                        {Common.ServiceChild}
                                    </label>
                                </Col>
                                <Col className="d-flex flex-column">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsEal(!isEal);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                Common
                                                    .EnglishAsAnAdditionalLanguage
                                            }
                                            checked={isEal && isEal}
                                        />
                                        {
                                            Common
                                                .EnglishAsAnAdditionalLanguage
                                        }
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsFsm6(!isFsm6);
                                            }}
                                            onBlur={handleBlur}
                                            value={
                                                Common
                                                    .FreeSchoolMealsEver6
                                            }
                                            checked={isFsm6 && isFsm6}
                                        />
                                        {Common.FreeSchoolMealsEver6}
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name={Common.myCheck}
                                            onChange={(e) => {
                                                setIsEHCP(!isEHCP);
                                            }}
                                            onBlur={handleBlur}
                                            value={Common.EHCP}
                                            checked={isEHCP && isEHCP}
                                        />
                                        {Common.EHCP}
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
                                {Common.Cancel}
                            </Button>
                            <Button
                                type="submit"
                                variant="success"
                                disabled={isSubmitting}
                            >
                                {Common.Update}
                            </Button>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </>

    );
}

export { EditPupil };
