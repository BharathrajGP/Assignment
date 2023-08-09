import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { CommentValidationSchema } from '../../../validators/commentValidator';
import { Common } from '../../../helper/constants';

import "../../../assets/stlyes/Common/Login.css";

const EditComment = (props) => {
    const {comment} = useState('');
    return (
        <Formik initialValues={{ comment: comment ? comment : "" }}
            isInitialValid
            validationSchema={CommentValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("setSubmitting");
                const formData = { comment: values.comment }
                console.log(formData);
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            as='textarea'
                            type='text'
                            name='comment'
                            placeholder={Common.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.comment}
                            className={touched.comment && errors.comment ? "array-answer" : "array-answer"}
                            autoComplete='off'
                        />
                        {touched.comment && errors.comment ? (<p className="error-message">{errors.comment}</p>) : <p>{''}&nbsp;</p>}
                    </Form.Group>
                    <div className='submit-button-div'>
                        <Button type='submit' className='submit-button'>{Common.Submit}</Button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default EditComment