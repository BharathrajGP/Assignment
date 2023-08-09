export const AdminPages = {
    schools: "/Schools",
    schoolData: "/School-Data"

}
export const CommonPages = {
    dashboard: "/Dashboard",
    login: "/",
    authentication: "/Authentication",
    registration: "/Registration",
    addPassword: "/Password",
    updatePassword: '/UpdatePassword',
    UpdateProfile: '/Update-Profile',
}
export const SchoolPages = {
    classes: "/Classes",
    subjectOverview: "/Overview",
    subjectMarking: "/Marking",
    topicMarkEditor: "/MarkEditor/:categoryName/:subjectName/:_subjectClassId/:_classId/:year/:_description"
}

export const SchoolAdmin = {
    schoolAdmin: '/SchoolAdmin',
}

export const topicMarkEditor = (categoryName, subjectName, _subjectClassId, _classId, year, _description) => `/MarkEditor/${categoryName}/${subjectName}/${_subjectClassId}/${_classId}/${year}/${_description}`;