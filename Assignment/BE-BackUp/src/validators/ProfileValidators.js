import * as Yup from 'yup';
import { VALIDATION } from '../helper';

const PasswordUpdateValidationSchema = Yup.object().shape({
    newPassword: Yup.string().required(VALIDATION.PASSWORD_MUST_MATCH).min(8, VALIDATION.PASSWORD_MUST_HAVE_MINIMUM_8_CHARACTERS),
    confirmPassword: Yup.string().required(VALIDATION.PASSWORD_MUST_MATCH).min(8, VALIDATION.PASSWORD_MUST_HAVE_MINIMUM_8_CHARACTERS),
});

const profileUpdateValidationSchema = Yup.object().shape({
    FirstName: Yup.string().required(VALIDATION.FIRST_NAME_IS_REQUIRED).min(2, VALIDATION.NAME_SHOULD_CONTAIN_ATLEAST_3_CHARACTERS),
    LastName: Yup.string().required(VALIDATION.LAST_NAME_IS_REQUIRED).min(2, VALIDATION.NAME_SHOULD_CONTAIN_ATLEAST_3_CHARACTERS)

})

export { PasswordUpdateValidationSchema, profileUpdateValidationSchema };