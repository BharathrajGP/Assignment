import * as apiClient from "./httpCommon";
import { apiRoutes } from "../helper/apiRoutes";

export const userLogin = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.userLogin, data)
        .then((res) => res.data);
export const user2FA = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.user2FA, data)
        .then((res) => res.data);
export const TokenValidation = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.tokenValidation, data)
        .then((res) => res.data);
// export const navBar = async (data) => await apiClient.postAPICall(apiRoutes.navBar, data).then(res => res.data);
export const schoolAdminUser = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.schoolAdminUser, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });
export const schoolAdminClassView = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.schoolAdminClassView, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });
export const schoolAdminTeachersView = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.schoolAdminTeachersView, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });
export const getIndividualPupil = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.getIndividualPupil, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });
export const updateIndividualPupil = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.updateIndividualPupil, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });
export const deleteIndividualPupil = async (data) =>
    await apiClient
        .postAPICall(apiRoutes.deleteIndividualPupil, data)
        .then((res) => res)
        .catch((err) => {
            return err;
        });

// export const user2FA = async (data) => await apiClient.postAPICall(apiRoutes.user2FA, data).then(res => res);
export const getNavBar = async (data) =>
    await apiClient.postAPICall(apiRoutes.getNavBar, data).then((res) => res);
