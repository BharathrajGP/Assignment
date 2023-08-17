import * as Yup from 'yup';
import { VALIDATION } from '../helper';

const CommentValidationSchema = Yup.object().shape({
    comment: Yup.string().trim().required(VALIDATION.COMMENT_IS_REQUIRED)
});
export { CommentValidationSchema };