import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const getTeachersInClass = async (data) => await apiClient.postAPICall(apiRoutes.getTeachersInClass, data).then((res) => res.data);