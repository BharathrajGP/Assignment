import * as Yup from 'yup';

const RegValidationSchema = Yup.object().shape({
    email: Yup.string().trim().email().required()
});

export { RegValidationSchema };