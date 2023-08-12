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

    // Profile
    getProfile: 'v1/getProfile',
    updateProfile: 'v1/updateProfile',
    updatePassword: 'v1/changePassword',

    //Classes
    fetchPupilByClassId: 'v1/fetchPupilByClassId',
    fetchCategoryMark: '/v1/fetchCategoryMark',
    fetchDescriptionMark: '/v1/fetchDescriptionMark',
    fetchDescription: '/v1/fetchDescription',
    pupilCategoryUpdate: '/v1/pupilCategoryUpdate',
    pupilCategoryAttainment: '/v1/pupilCategoryAttainment',
    getTeachersInClass: '/v1/fetchUserByClassId',
    fetchDescription: '/v1/fetchDescription',

    // SchoolAdmin
    adminPupil: "/v1/getPupil",
    adminClass: "/v1/getAllClasses",
    adminTeachers: "/v1/fetchUserByType",
    viewStudents: '/v1/fetchPupilByPresentClassId',
    getPupil: "/v1/getPupilById",
    updatePupil: "/v1/editPupil",
    deletePupil: "/v1/deletePupil",
    addClass: '/v1/saveClass',
    getClassById: '/v1/getClass',
    renameClass: '/v1/updateClass',
    movePupil: '/v1/updatePupilClassId',
    deleteClass: '/v1/updateClassActiveStatus',
    assignRole: '/v1/updateUserType',
    updateUserActiveStatus: '/v1/updateUserActiveStatus',
    removeType: '/v1/removeUserRoleById',
    inviteUser: '/v1/inviteUser',
    getSubjectByClassId: '/v1/getSubjectByClassId',
    assignClass: '/v1/updateClassesbyUserId',
    removeClass: '/v1/removeClassesbyUserId',
}

