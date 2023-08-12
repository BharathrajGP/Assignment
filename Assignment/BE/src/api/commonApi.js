import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const addClass = async (data) => await apiClient.postAPICall(apiRoutes.addClass, data).then(res => res.data);
export const adminClass = async () => await apiClient.postAPICall(apiRoutes.adminClass, {}).then(res => res.data);
export const adminPupil = async () => await apiClient.postAPICall(apiRoutes.adminPupil, {}).then(res => res.data);
export const adminTeachers = async () => await apiClient.postAPICall(apiRoutes.adminTeachers, {}).then(res => res.data);
export const assignRole = async (data) => await apiClient.postAPICall(apiRoutes.assignRole, data).then(res => res.data);
export const assignClass = async (data) => await apiClient.postAPICall(apiRoutes.assignClass, data).then(res => res.data);
export const deleteClass = async (data) => await apiClient.postAPICall(apiRoutes.deleteClass, data).then(res => res.data);
export const deletePupil = async (data) => await apiClient.postAPICall(apiRoutes.deletePupil, data).then(res => res.data);
export const getClassById = async (data) => await apiClient.postAPICall(apiRoutes.getClassById, data).then(res => res.data);
export const getNavBar = async (data) => await apiClient.postAPICall(apiRoutes.getNavBar, data).then(res => res.data);
export const getProfile = async (data) => await apiClient.postAPICall(apiRoutes.getProfile, data).then(res => res.data);
export const getPupil = async (data) => await apiClient.postAPICall(apiRoutes.getPupil, data).then(res => res.data);
export const getPupilsInClass = async (data) => await apiClient.postAPICall(apiRoutes.fetchPupilByClassId, data).then(res => res.data);
export const getSubjectByClassId = async (data) => await apiClient.postAPICall(apiRoutes.getSubjectByClassId, data).then(res => res.data);
export const inviteUser = async (data) => await apiClient.postAPICall(apiRoutes.inviteUser, data).then(res => res.data);
export const movePupil = async (data) => await apiClient.postAPICall(apiRoutes.movePupil, data).then(res => res.data);
export const removeClass = async (data) => await apiClient.postAPICall(apiRoutes.removeClass, data).then(res => res.data);
export const removeType = async (data) => await apiClient.postAPICall(apiRoutes.removeType, data).then(res => res.data);
export const renameClass = async (data) => await apiClient.postAPICall(apiRoutes.renameClass, data).then(res => res.data);
export const userLogin = async (data) => await apiClient.postAPICall(apiRoutes.userLogin, data).then(res => res.data);
export const updatePassword = async (data) => await apiClient.postAPICall(apiRoutes.updatePassword, data).then(res => res.data);
export const updateProfile = async (data) => await apiClient.postAPICall(apiRoutes.updateProfile, data).then(res => res.data);
export const updatePupil = async (data) => await apiClient.postAPICall(apiRoutes.updatePupil, data).then(res => res.data);
export const updateUserActiveStatus = async (data) => await apiClient.postAPICall(apiRoutes.updateUserActiveStatus, data).then(res => res.data);
export const user2FA = async (data) => await apiClient.postAPICall(apiRoutes.user2FA, data).then(res => res.data);
export const viewStudents = async (data) => await apiClient.postAPICall(apiRoutes.viewStudents, data).then(res => res.data);
