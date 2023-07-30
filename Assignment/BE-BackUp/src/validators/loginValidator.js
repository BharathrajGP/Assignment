import * as Yup from 'yup';
import { VALIDATION } from '../helper/messages';

export const LoginValidationSchema = Yup.object().shape({
    email : Yup.string().trim().email().required(),
    password : Yup.string().required(VALIDATION.PASSWORD_MUST_HAVE_MINIMUM_8_CHARACTERS).min(8 , VALIDATION.PASSWORD_MUST_HAVE_MINIMUM_8_CHARACTERS)
});

export const otpValidationSchema = Yup.object().shape({
    otp : Yup.string().required(VALIDATION.OTP_IS_REQUIRED)
});