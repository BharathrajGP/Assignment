import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const fetchSubject = async (data) => await apiClient.postAPICall(apiRoutes.fetchSubject, data).then(res => res.data);
export const fetchCategoryMark = async (data) => await apiClient.postAPICall(apiRoutes.fetchCategoryMark, data).then(res => res.data);