import * as Yup from 'yup';
import { Common } from './constants';


export const LoginValidationSchema = Yup.object().shape({
    email : Yup.string()
    .trim()
    .email().required()
    .matches(Common.EmailRegExp),
    password : Yup.string()
    .required()
    .matches(Common.PasswordRegExp)
})
