import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

import { Common } from "../../../helper/constants";
import { senStatusOptions } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";

function EditPupilForm({ isPupilId, setEditPupil }) {
    const [selectedOption, setSelectedOption] = useState();
    const [pupilDetails, setPupilDetails] = useState();
    const [defaultOption, setDefaultOption] = useState();
    const [isOtherNeeds, setIsOtherNeeds] = useState();

    const SignupSchema = Yup.object().shape({
        foreName: Yup.string().required(Common.Required),
        surName: Yup.string().required(Common.Required),
    });

    const getOtherNeeds = (event, type) => {
        console.log("evenr-----------", event.target.checked, type);
        var data = [...isOtherNeeds];
        console.log("data[0].type", data[0][type]);
        if (event.target.checked === true) {
            data[0][type] = "Y";
        } else {
            data[0][type] = "N.A.";
        }
        setIsOtherNeeds(data);
    };

    const getSelectedValue = (event) => {
        console.log("event------------", event);
        setSelectedOption(event.value);
    };

    const getPupilData = async () => {
        const getIndividualPupil = await commonApi.getIndividualPupil({
            id: isPupilId,
        });
        if (!isEmptyObject(getIndividualPupil)) {
            console.log(getIndividualPupil.data.Items);
            const individualData = getIndividualPupil.data.Items;
            setPupilDetails(individualData);
            setIsOtherNeeds(individualData.other_needs);
            const found = senStatusOptions.find(
                (element) => element.value === individualData.sen_status
            );
            setDefaultOption(found);
        } else {
        }
    };

    const updatePupil = (pupilFormData) => {};

    useEffect(() => {
        getPupilData();
    }, []);
    return (
        <Formik
            enableReinitialize
            initialValues={{
                foreName: pupilDetails && pupilDetails.firstname,
                surName: pupilDetails && pupilDetails.lastname,
                senStatus: pupilDetails && pupilDetails.sen_status,
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
                    firstname: values.foreName,
                    lastname: values.surName,
                    sen_status: selectedOption,
                    other_needs: isOtherNeeds,
                };
                console.log({ pupilFormData });
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
                <Form onSubmit={handleSubmit}>
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
                                <small style={{ color: "red" }}>
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
                                <small style={{ color: "red" }}>
                                    {errors.surName}
                                </small>
                            )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="Sen_Status">
                            {Common.senStatus}
                        </Form.Label>

                        {console.log("defaultOption", defaultOption)}
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
                        {errors.senStatus &&
                            touched.senStatus &&
                            errors.senStatus}
                    </Form.Group>
                    <Form.Group>
                        {console.log(
                            "other_needs----------------",
                            isOtherNeeds && isOtherNeeds[0].service_child
                        )}
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
                                        name={Common.myCheck}
                                        onChange={(e) => {
                                            getOtherNeeds(
                                                e,
                                                "child_looked_after"
                                            );
                                        }}
                                        onBlur={handleBlur}
                                        value={Common.ChildLookedAfter}
                                        style={{ padding: "5px" }}
                                        checked={
                                            isOtherNeeds &&
                                            isOtherNeeds[0]
                                                .child_looked_after !== "N.A."
                                                ? true
                                                : false
                                        }
                                    />
                                    {Common.ChildLookedAfter}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={Common.myCheck}
                                        onChange={(e) => {
                                            getOtherNeeds(
                                                e,
                                                "free_school_meals"
                                            );
                                        }}
                                        onBlur={handleBlur}
                                        value={Common.FreeSchoolMeals}
                                        checked={
                                            isOtherNeeds &&
                                            isOtherNeeds[0]
                                                .free_school_meals !== "N.A."
                                                ? true
                                                : false
                                        }
                                    />
                                    {Common.FreeSchoolMeals}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={Common.myCheck}
                                        onChange={(e) => {
                                            getOtherNeeds(e, "service_child");
                                        }}
                                        onBlur={handleBlur}
                                        value={Common.ServiceChild}
                                        checked={
                                            isOtherNeeds &&
                                            isOtherNeeds[0].service_child !==
                                                "N.A."
                                                ? true
                                                : false
                                        }
                                    />
                                    {Common.ServiceChild}
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
                                        name={Common.myCheck}
                                        onChange={(e) => {
                                            getOtherNeeds(e, "eal");
                                        }}
                                        onBlur={handleBlur}
                                        value={
                                            Common.EnglishAsAnAdditionalLanguage
                                        }
                                        checked={
                                            isOtherNeeds &&
                                            isOtherNeeds[0].eal !== "N.A."
                                                ? true
                                                : false
                                        }
                                    />
                                    {Common.EnglishAsAnAdditionalLanguage}
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={Common.myCheck}
                                        onChange={(e) => {
                                            getOtherNeeds(
                                                e,
                                                "free_school_meals_e6"
                                            );
                                        }}
                                        onBlur={handleBlur}
                                        value={Common.FreeSchoolMealsEver6}
                                        checked={
                                            isOtherNeeds &&
                                            isOtherNeeds[0]
                                                .free_school_meals_e6 !== "N.A."
                                                ? true
                                                : false
                                        }
                                    />
                                    {Common.FreeSchoolMealsEver6}
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
    );
}

export default EditPupilForm;
