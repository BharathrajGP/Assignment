import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper";

export const fetchSubject = async (data) => await apiClient.postAPICall(apiRoutes.fetchSubject, data).then(res => res.data);
export const fetchCategoryMark = async (data) => await apiClient.postAPICall(apiRoutes.fetchCategoryMark, data).then(res => res.data);
export const fetchDescriptionMark = async (data) => await apiClient.postAPICall(apiRoutes.fetchDescriptionMark, data).then(res => res.data);
export const fetchDescription = async (data) => await apiClient.postAPICall(apiRoutes.fetchDescription, data).then(res => res.data);
export const pupilCategoryAttainment = async (data) => await apiClient.postAPICall(apiRoutes.pupilCategoryAttainment, data).then(res => res.data);
export const pupilCategoryUpdate = async (data) => await apiClient.postAPICall(apiRoutes.pupilCategoryUpdate, data).then(res => res.data);