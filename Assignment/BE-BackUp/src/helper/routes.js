const AdminPages = {
    schools: "/Schools",
    schoolData: "/School-Data"

}

const CommonPages = {
    dashboard: "/Dashboard",
    login: "/",
    authentication: "/Authentication",
    registration: "/Registration",
    addPassword: "/Password",
    updatePassword: '/UpdatePassword',
    UpdateProfile: '/Update-Profile',
}

const SchoolPages = {
    classes: "/Classes",
    subjectOverview: "/Overview",
    subjectMarking: "/Marking",
    subjectMarkings: "/Markings",
    topicMarkEditor: "/MarkEditor/:categoryName/:subjectName/:_subjectClassId/:_classId/:year/:_description/:identifier"
}

const SchoolAdmin = {
    schoolAdmin: '/SchoolAdmin',
}

const InviteUser = {
    newUser: '/NewUser',
    setPassword: '/SetPassword'
}

const RegistrationProcess = {
    b2bRegister: '/B2BRegister',
    b2cRegister: '/B2CRegister'
}

const topicMarkEditor = (categoryName, subjectName, _subjectClassId, _classId, year, _description, identifier) => `/MarkEditor/${categoryName}/${subjectName}/${_subjectClassId}/${_classId}/${year}/${_description}/${identifier}`;

export { AdminPages, CommonPages, SchoolPages, SchoolAdmin, InviteUser, RegistrationProcess, topicMarkEditor };