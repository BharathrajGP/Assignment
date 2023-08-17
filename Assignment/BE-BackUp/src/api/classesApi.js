import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper";

export const getTeachersInClass = async (data) => await apiClient.postAPICall(apiRoutes.getTeachersInClass, data).then((res) => res.data);