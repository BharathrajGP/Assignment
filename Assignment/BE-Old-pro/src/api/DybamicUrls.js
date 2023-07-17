// const baseUrl = "http://localhost:8000";
const baseUrl = "https://93vla56yqg.execute-api.ap-south-1.amazonaws.com/dev";
exports.apiUrl = {
    login : baseUrl + "/v1/login",
    authentication: baseUrl+ "/v1/twoFactorVerification",
}

exports.pageEndpoint = {
    login : "/",
    authentication : "/Authentication",
    registration : "/Registration",
    addPassword : "/Password",
    dashboard : "/Dashboard",
    classes : "/Classes",
    subjectOverview : "/Overview",
    subjectMarking : "/Marking",
    topicMarkEditor : "/MarkEditor"    
    
}

exports.AdminPageEndpoints = {
    schools: "/Schools",
    schoolData : "/School-Data"
}