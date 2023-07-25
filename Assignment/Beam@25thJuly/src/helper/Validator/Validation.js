import * as Yup from "yup";
import { Common } from "../constants";

export const EditPupilValidator = Yup.object().shape({
    foreName: Yup.string().required(Common.Required),
    surName: Yup.string().required(Common.Required),
});
