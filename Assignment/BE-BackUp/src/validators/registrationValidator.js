import * as Yup from 'yup';

export const RegValidationSchema = Yup.object().shape({
    email : Yup.string().trim().email().required()
});