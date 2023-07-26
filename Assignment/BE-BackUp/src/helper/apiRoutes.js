const baseUrl = "https://znkm0f852h.execute-api.ap-south-1.amazonaws.com/dev";
// const baseUrl = "https://localhost:8000";
export const Url = {
    // baseApiUrl: "http://localhost:8000",
    baseApiUrl: "https://znkm0f852h.execute-api.ap-south-1.amazonaws.com/dev",
};

// export const apiS3Routes = {
//     profiles: `${Url.baseS3Url}/profiles/`,
//     uploads: `${Url.baseS3Url}/uploads/`,
//     offer: `${Url.baseS3Url}/offer/`
// }

// export const Controllers = {
//     Module1: "/Admin",
//     Module2: "/SchoolAdmin",
//     Module3: "/LeadTeacher",
//     Module4: "/Teacher"
// }

export const apiRoutes = {
    // Common
    userLogin: "/v1/userLogin",
    user2FA: "/v1/twoFactorVerification",
    userRegister: "/v1/userRegister",
    tokenValidation: "",
    navBar: "/v1/classDataNavbar",
    schoolAdminUser: "/v1/getPupil",
    schoolAdminClassView: "",
    schoolAdminTeachersView: "",
    getIndividualPupil: "/v1/getPupilById",
    updateIndividualPupil: "/v1/editPupil",
    deleteIndividualPupil: "/v1/deletePupil",
    getNavBar: "/v1/classDataNavbar",

    // Module1

    // Module2
};
export const apiUrl = {
    login: baseUrl + apiRoutes.userLogin,
};
export const AdminPages = {
    schools: "/Schools",
    schoolData: "/School-Data",
};
export const CommonPages = {
    login: "/",
    authentication: "/Authentication",
    registration: "/Registration",
    addPassword: "/Password",
    updateProfile: "/UpdateProfile",
};
export const SchoolPages = {
    dashboard: "/Dashboard",
    classes: "/Classes",
    subjectOverview: "/Overview",
    subjectMarking: "/Marking",
    topicMarkEditor: "/MarkEditor",
};
