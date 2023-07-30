export const Url = {
    // baseApiUrl: "http://localhost:8000",
    baseApiUrl: "https://znkm0f852h.execute-api.ap-south-1.amazonaws.com/dev",
}


export const apiRoutes = {
    // Common
    userLogin: '/v1/userLogin',
    user2FA: '/v1/twoFactorVerification',
    userRegister: '/v1/user_register',
    getNavBar: '/v1/fetchClass',
    fetchSubject: '/v1/fetchSubject',
    fetchCategoryMark: '/v1/fetchCategoryMark',

    // Profile
    getProfile: 'v1/getProfile',
    updateProfile: 'v1/updateProfile',
    updatePassword: 'v1/changePassword',

    //Classes
    fetchPupilByClassId: 'v1/fetchPupilByClassId',

    // SchoolAdmin
    adminUser: "/v1/getPupil",
    adminClass: "/v1/getAllClasses",
    adminTeachers: "",
    viewStudents: '/v1/fetchPupilByPresentClassId',
    getPupil: "/v1/getPupilById",
    updatePupil: "/v1/editPupil",
    deletePupil: "/v1/deletePupil",
    addClass: '/v1/saveClasses',
    getClassById: '/v1/getClass',
    renameClass: '/v1/updateClass',
    movePupil: '/v1/updatePupilClassId',
}

