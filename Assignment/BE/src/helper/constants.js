import tickmark from '../assets/images/tickCheckbox.png'

export const Common = {
    MARK: 'MARK',
    Confirm: "Confirm",
    SignIn: "Sign In",
    SignOut: "Sign Out",
    AlreadyHaveAnAccount: "Already have an account?",
    CreateAnAccount: "Create an account",

    Save: "Save",
    Delete: "Delete",
    YesDelete: "Yes, Delete",
    Publish: "Publish",
    Close: "Close",
    Cancel: "Cancel",
    OK: "OK",
    Yes: "Y",
    No: "N",
    _Yes: "Yes",
    _No: "No",
    loading: "loading...",
    PasswordUpdatedSuccessfully: "password updated successfully!",
    UserNameRegex: /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/,
    // 1) test[space]ing - Should be allowed 
    // 2) testing - Should be allowed 
    // 3) [space]testing - Should not be allowed 
    // 4) testing[space] - Should be allowed but have to trim it 
    // 5) testing[space][space] - should be allowed but have to trim it 
    PasswordRegExp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    EmailRegExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    PhoneNumberRegExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    // the phone number regex accepts (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 formats
    UrlRegex: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    CommaSeperatedValueRegex: `^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$`,
    Decline: "Decline",
    Accept: "Accept",
    Send: "Send",
    Hashtag: "",
    DateFormat_dd_MM_yyyy: "dd/MM/yyyy",
    DateFormat_DD_MM_YYYY: "DD/MM/YYYY",
    DateFormat_YYYY_MM_DD: "YYYY/MM/DD",
    DateFormat_dd_MM_yyyy_hh_mm_a: "dd/MM/yyyy hh:mm a",
    DateFormat_DD_MM_YYYY_hh_mm_a: "DD/MM/YYYY hh:mm a",
    TZ_Formate: "YYYY-MM-DDTHH:mm:ss[Z]",
    TimeFormat_hh_mm_A: "HH:mm A",
    TimeFormat_hh_mm: "HH:mm",
    TimeFormat_LT: "LT",
    Submit: "Submit",
    Year: "Year",
    className: 'className',
    subjectName: 'subjectName',
    categoryName: 'categoryName',
    eKey: 'eKey',

    Login: "Login",
    beamEducationLink: "beam-education.co.uk",
    beamCopyright: "© 2023 Beam Education",
    TrulyInformativeAssessment: "Truly informative assessment",
    Welcome: "Welcome.",
    PleaseEnterYourEmailAddressAndPassword: "Please enter your email address & password.",
    EmailExample: "Email@address.co.uk",
    ForgotYourPassword: "Forgot your password?",
    NewtoMappix: "New to Mappix? Click Here!!",
    //Registration Page
    Registration: "Registration.",
    Pleaseenteryouremailaddresstoregister: "Please enter your email address to register.",
    SendOtp: "Send OTP",
    ClicktoLogin: "Click here to Login",

    //Authentication Page
    EnterValidOTPtoLogin: "Enter Valid OTP to Login",
    PleaseEnterOTP: "Please Enter OTP.",
    //Classes Page
    UploadEvidenceforClass: "Upload Evidence for Class",
    Pupils: "Pupils",
    Actions: "Actions",
    Class: "Class",
    Marking: "Marking",
    PlaceValue: "Place Value",
    HelpIcon: " Help",
    ClassAverage: "Class Average",
    PredictedPassRate: "Predicted Pass Rate",
    Actual: "Actual",
    Predicted: "Predicted",
    Summaryinfo: "Summary information about performance in every subject.",
    Staffwithmarkingpermissions: "Staff with marking permissions:",
    CurrentPassword: "Current Password",
    NewPassword: "New password",
    Confirmpassword: "Confirm Password",
    EnterCurrentPassword: "Enter your Current Password",
    EnterNewPassword: "Enter New password",
    EnterConfirmpassword: "Re-enter New Password",

    //SchoolAdmin

    newPassword: "newPassword",
    Passwordsmustmatch: "Passwords must match",
    ConfirmNewPassword: "Confirm New Password",
    currentPassword: "currentPassword",
    confirmNewPassword: "confirmNewPassword",
    UpdateProfile: "Update Profile",
    YourDetails: "Your Details",
    updateMyDetails: "Update my details",
    SurName: "Sur Name",
    ForeName: "Fore Name",
    surName: "surName",
    foreName: "foreName",
    Required: "Required",
    LogOut: "Log Out",
    Characteristics: "Characteristics",
    Upn: "UPN",
    schoolYear: "School Year",
    gender: "Gender",
    dob: "DoB",
    ethnicity: "Ethnicity",
    senStatus: "Sen Status",
    ks1Result: "KS1 Result",
    eal: "EAL",
    cla: "CLA",
    FSM: "FSM",
    FSM6: "FSM6",
    SC: "SC",
    NoPupilFound: "No Pupil's Data Found",
    Success: "Success!",
    DeletePupil: "Delete Pupil",
    Page: "Page",
    PupilDeletedSuccesfully: "Pupil Deleted Succesfully!",
    PupilUpdatedSuccessfully: "Pupil Updated successfully!",
    ClassCreatedSuccessfully: 'Class Created Successfully!',
    ClassUpdatedSuccessfully: 'Class Updated Successfully!',
    NotDeleted: "Not Deleted!",
    ViewProgress: " View Progress",
    RemovePupil: "Remove Pupil",
    RowsPerPage: "Rows per page :",
    EditPupil: "Edit Pupil",
    ChildLookedAfter: "Child: Looked After",
    FreeSchoolMeals: "Free School Meals",
    ServiceChild: "Service Child",
    EnglishAsAnAdditionalLanguage: "English as an additional language",
    FreeSchoolMealsEver6: "Free School Meals Ever 6",
    Update: "Update",
    pleaseSelect: "Please Select",
    myCheck: "myCheck",
    ClassName: "Class Name",
    className: "className",
    email: "email",
    Email: "Email",
    moveFrom: "moveFrom",
    MoveFrom: "Move From",
    to: "to",
    To: "To",
    NA: "N.A.",
    isRegistration: "Is Registration Group",
    Subjects: "Subjects",
    ClassSize: "Class Size",
    AddClass: "Add Class",
    Rename: 'Rename',
    RegistrationGroup: "Registration Group",
    TeachingGroup: "Teaching Group",
    registrationGroup: 'RegistrationGroup',
    teachingGroup: "TeachingGroup",
    NoClassesFound: 'No Classes Found',
    View: "View",
    RenameClass: 'RenameClass',
    DeleteClass: 'DeleteClass',
    PupilMovedSuccessfully: 'Pupil Moved Successfully!',
    ClassDataDeletedSuccessfully: 'Class data deleted Successfully',
    pleaseSelectClassToMove: 'Please Select Class To Move Pupil',
    Move: 'Move',
    MovePupil: 'Move Pupil',
    deleteClass: 'Delete Class',
    Role: 'Role',
    AddRole: 'Add Role',
    Roles: 'Roles',
    Classes: 'Classes',
    InviteUser: 'Invite User',
    EnableUser: 'Enable User',
    AssignClass: 'Assign Class',
    AssignRole: 'Assign Role',
    DisableUser: 'Disable User',
    RemoveRole: 'Remove Role',
    RemoveClass: 'Remove Class',
    remove: 'remove',
    NoUserFound: 'No User Found',
    EHCP: 'Education, Health and Child Care',
    PerformaceProgress: "Performace Progress",
    Trend: "Trend",
    KS1Result: "KS1 Result",
    Progress: "Progress",
    PlaceValue: "Place Value"
}
export const Accessors = {
    lastName: "lastName",
    firstName: "firstName",
    upn: "upn",
    schoolYear: "schoolYear",
    year: 'year',
    gender: "gender",
    dob: "dob",
    ethnicity: "ethnicity",
    senStatus: "senStatus",
    action: "action",
    otherNeeds: "otherNeeds",
    ksResults: "ksResults",
    ks1Results: "ks1Results",
    isRegistrationGroup: 'isRegistrationGroup',
    Subjects: 'Subjects',
    className: 'className',
    classSize: 'classSize',
    email: 'email',
    type: 'type',
    classes: 'classes',
};

export const AssignSubjects = [
    // { value: " ", label: "Please Select" },
    { value: ["Maths", "Science", "PE", "Writing", "Reading"], label: "All" },
    { value: "Maths", label: "Maths" },
    { value: "Science", label: "Science" },
    { value: "PE", label: "PE" },
    { value: "Writing", label: "Writing" },
    { value: "Reading", label: "Reading" },
];
export const senStatusOptions = [
    // { value: " ", label: "Please Select" },
    // { value: "Not SEN", label: "--" },
    // { value: "SA", label: "SA" },
    // { value: "SA+", label: "SA+" },
    // { value: "Statement", label: "Statement" },
    // { value: "Sen Support", label: "Sen Support" },
    // { value: "EHCP", label: "Education, Health and Care Plan" },
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
];

export const TeacherRoles = [
    { value: "Admin", label: "Admin" },
    { value: "Lead Teacher", label: "Lead Teacher" },
    { value: "Teacher", label: "Teacher" },
    { value: "Support Staff", label: "Support Staff" },
];

export const AssignClasses = [
    { value: " ", label: "Please Select" },
    { value: "Elephant", label: "Elephant" },
    { value: "Lion", label: "Lion" },
    { value: "Tiger", label: "Tiger" },
    { value: "Cheetah", label: "Cheetah" },
    { value: "SenSupport", label: "Sen Support" },
];
export const NavigationBar = {
    Dashboard: "Dashboard",
    MyClasses: "My Classes",
    ClassHome: "Class Home",
    Maths: "Maths",
    PE: "PE",
    Reading: "Reading",
    Science: "Science",
    Writing: "Writing",
    Pupils: "Pupils",
    Admin: "Admin",
    BigPicture: "Big Picture",
    Resouces: "Resouces",
    Overview: "Overview",
    Marking: "Marking",
    TokenError: 'A token is required for authentication'
}

export const ExternalLinks = {
    BeamEduWebsite: "https://www.beam-education.co.uk/"
}

export const Subjects = {
    //Subjects
    Maths: "Maths",
    PE: "PE",
    Reading: "Reading",
    Science: "Science",
    Writing: "Writing"
}

export const MarkingLevels = {
    ABSENT: "ABSENT",
    BELOW: "BELOW",
    EMERGING: "EMERGING",
    EXPECTED: "EXPECTED",
    GREATER_DEPTH: "GREATER DEPTH",
}

export const Colors = {
    White: "#FFFFFF",
    Secondary: "rgba(56,56,56,0.05)"
}

export const dataType = {
    text: "text",
    password: "password"
}

export const submitStatus = {
    Saved: "Saved",
    Pending: "Pending",
}
export const SignIn = {
    Sign_In: "Sign in",
    StaySignedIn: "Stay signed in",
    CantSignIn: "Can't Sign in?",
    CreateAccount: "Create Account",
}

export const UserStatus = {
    Active: "Active",
    InActive: "InActive"
}

export const Roles = {
    Admin: "Admin",
    SchoolAdmin: "School Admin",
    Teacher: "Teacher",
    LeadTeacher: "Lead Teacher",
    SupportStaff: 'Support Staff',
}

export const ProfileRoles = [
    { name: "Admin", value: "Admin" },
    { name: "SchoolAdmin", value: "SchoolAdmin" },
    { name: "Teacher", value: "Teacher" },
    { name: "LeadTeacher", value: "LeadTeacher" },
]

export const Array = {
    Array: Roles.Array,
    TellUsBitMoreAboutYou: "Tell us bit more about you",
    IAmAPartOf: "I am a part of:",
    AndMyRoleIs: "And my role is:"
}

export const EditProfileConstants = {
    Hello: "Hello",
    FullName: "Full Name",
    FirstName: "First Name",
    LastName: "Last Name",
    WhatWouldYouLikeToBeCalled: "What would you like to be called?",
    ChangePassword: "Change Password",
    ConfirmNewPassword: "Confirm New Password",
    ExistingPassword: "Existing Password",
    NewPassword: "New Password",
    ConfirmPassword: "Confirm Password",
    UpdateProfile: "Update Profile",
    UpdatePassword: "Submit",
    TellUsABitAboutYourSelf: "Tell us a bit about yourself:",
    WhereAreYouBased: "Where are you based?",
    YourContactDetails: "Your contact details",
    ProvideBackUpEmail: "If we need to help you recover your account, provide a backup email:",
    phoneNumber: "Phone Number",
    IamTheCEOFounderOf: "I'm the <b>Founder</b> of <br />",
    IWorkAt: "I work at",
    IAmThe: "I am the",
    WhereIsYourBusinessLocated: "Where is your business located",
    YouCanFindUsAt: "You can find us at",
    DoYouHaveExternalFunding: "Do you have external funding?",

    Skills: "Skills",
    MyCareerBackGround: "My career background",
    MyProfessionalProfile: "My professional profile",
    IAmInvestingMyTimeAsA: "I am investing my time as a:",
    IWantToBeRecognisedWith: "I want to be recognised with:",
    MyBetaPlan: "My BETA Plan:",

    OurBusiness: "Our business",
    BusinessName: "Business Name",
    WhereWeAreLocated: `Where we are located`,
    OurWebsiteLinks: "Our website links",
    TheServicesWeOffer: "The Services we offer",

    IAmPartOf: "I am part of:",
    MyRoleIs: "My Role is:"
}

export const WeekDays = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday"
}

export const WeekDaysEnum = {
    None: 0,
    Monday: 1 << 0,    // 1
    Tuesday: 1 << 1,   // 2
    Wednesday: 1 << 2, // 4
    Thursday: 1 << 3,  // 8
    Friday: 1 << 4,    // 16
    Saturday: 1 << 5,  // 32
    Sunday: 1 << 6     // 64
}

export const RolesEnum = {
    None: 0,
    Founder: 1 << 0,  // 1
    Investor: 1 << 1, // 2
    Partner: 1 << 2,  // 4
    Array: 1 << 3     // 8
}

export const SessionStorageKeys = {
    SessionId: "SessionId",
    UserId: "UserId",
    Location: "Location",
    UserName: "UserName",
    MeetingURL: "MeetingURL",
    Name: "Name",
    Email: "Email",
    SocialUser: "SocialUser",
    CurrentDashboard: "CurrentDashboard",
    UserImage: "UserImage",
    CreatePersonaPath: "CreatePersonaPath",
    SessionToken: "SessionToken",
    classId: 'classId',
    className: 'className',
    userType: "userType",
    year: "year",
    subjectClassId: 'subjectClassId',
    Error: 'Error',
    subjectName: 'subjectName',
    categoryName: 'categoryName',
    categoryIndex: 'categoryIndex',
}

export const LocalStorageKeys = {
    StaySignedInUser: "StaySignedInUser",
    StaySignedInSocialUser: "StaySignedInSocialUser"
}

export const marking = {
    Marking: 'Marking',
    PlaceValue: 'Place Value',
    AdditionSubtractionMultiplicationDivision: 'Addition, subtraction, multiplication & division',
    Fractions: 'Fractions',
    Measures: 'Measures',
    Geometry: 'Geometry',
    subjectClassId: 'subjectClassId',
    classId: 'classId',
    Attainment: 'Attainment',
    Actual: 'Actual',
    Predicted: 'Predicted',
    ff: 'ff',
    dd: 'dd',
    serviceChild: 'S',
    eal: 'EAL',
    peoplePremium: 'PP',
    NoDataFound: 'No data found!',

    ObjectivesList: [
        { value: "Overall", label: "Overall" },
        { value: "Year 1 Objectives", label: "Year 1 Objectives" },
        { value: "Year 2 Objectives", label: "Year 2 Objectives" },
        { value: "Year 3 Objectives", label: "Year 3 Objectives" },
        { value: "Year 4 Objectives", label: "Year 4 Objectives" },
        { value: "Year 5 Objectives", label: "Year 5 Objectives" },
    ],

    headers: [
        { name: '', mark: '' },
        { name: 'Digital Values', mark: 'MARK' },
        { name: 'Powers of 10', mark: 'MARK' },
        { name: 'Negative Numbers', mark: 'MARK' },
        { name: 'Rounding Numbers', mark: 'MARK' },
        { name: 'Solving Problems', mark: 'MARK' },
        { name: 'Roman Numerals', mark: 'MARK' }
    ],
    CheckBox: [
        { className: 'checkmark check-absent', image: tickmark },
        { className: 'checkmark check-below', image: tickmark },
        { className: 'checkmark check-emerging', image: tickmark },
        { className: 'checkmark check-expected', image: tickmark },
        { className: 'checkmark check-greater', image: tickmark },
    ]
}

export const markingColors = {
    greaterDepth: '#26CB89',
    expected: '#AABB5D',
    emerging: '#F4C900',
    below: '#F34970',
    absent: '#FFFFFF',
}

export const data = [
    { name: 'Leslie Alexander', valueOne: '1', valueTwo: '2', valueThree: '3', valueFour: '4', valueFive: '5', valueSix: '6', per: '30%', _per: '60%' },
]

export const ProfileCreateConfirmationHeader = (roleName) => <p className='name-head'>{`Create ${roleName} Profile`}</p>;

export const ProfileCreateConfirmationBody = (roleName) => `You don't have ${roleName} profile enabled. Please create now.`;

export const ScheduleDeleteConfirmationBody = (userName) => `Hi ${userName}, unfortunately this meeting request has been withdrawn.`;

export const RescheduleMeetingMessage = (userName) => `Hi ${userName}, by clicking on open calender you can reschedule the meeting.`;

export const CloseProjectMessage = () => `You're about to close this project.`;

export const DeletePupilById = ({ foreName, surName }) =>
    `Do you want to delete the details of ${foreName + ' ' + surName}`;

export const DeleteTeacherById = ({ foreName, surName }) =>
    `Do you want to delete the details of User ${foreName + ' ' + surName}`;

export const EnableTeacherById = ({ foreName, surName }) =>
    `Do you want to Enable ${foreName + ' ' + surName}`;


//overviewPage
export const OverallSubjectScore = (subjectName) => `Overall ${subjectName} Score`;
export const KPISubjectScore = (subjectName) => `KPI ${subjectName} Score`;
export const FullName = (firstName, lastName) => `${firstName} ${lastName}`;
export const OverViewHeader = (className, subjectName) => `${className} - ${subjectName} - ${Common.Overview}`;
