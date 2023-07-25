// export const SocialLogin = {
//     BETA_APP_GG_APP_ID: '515091737531-ohoiq6490v5ho6us2ml8qjdvih4igr48.apps.googleusercontent.com', // https://console.cloud.google.com/apis/credentials?authuser=8&project=beta100-355807&supportedpurview=project
//     BETA_APP_FB_APP_ID: '1086441425283477', // https://developers.facebook.com/apps/1086441425283477/dashboard/
//     BETA_APP_LINKEDIN_APP_ID: '86pqwqzulowa62', // https://www.linkedin.com/developers/apps/203107197/auth
//     BETA_APP_LINKEDIN_APP_SECRET: 'FElpZ2R8IsMOUnxq',
// }

export const Common = {
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
    PasswordRegExp:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    EmailRegExp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    PhoneNumberRegExp:
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    // the phone number regex accepts (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 formats
    UrlRegex:
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
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

    Login: "Login",
    beamEducationLink: "beam-education.co.uk",
    beamCopyright: "© 2023 Beam Education",
    TrulyInformativeAssessment: "Truly informative assessment",
    Welcome: "Welcome.",
    PleaseEnterYourEmailAddressAndPassword:
        "Please enter your email address & password.",
    ForgotYourPassword: "Forgot your password?",
    NewtoMappix: "New to Mappix? Click Here!!",
    //Authentication Page
    EnterValidOTPtoLogin: "Enter Valid OTP to Login",
    PleaseEnterOTP: "Please Enter OTP.",
    //Classes Page
    UploadEvidenceforClass: "Upload Evidence for Class",
    Pupils: "Pupils",
    Actions: "Actions",
    ClassAverage: "Class Average",
    PredictedPassRate: "Predicted Pass Rate",
    Actual: "Actual",
    Predicted: "Predicted",
    //ProfileFolder,Table

    newPassword: "newPassword",

    Passwordsmustmatch: "Passwords must match",

    CurrentPassword: "Current Password",

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

    PupilDeletedSuccesfully: "Pupil Deleted Succesfully!",

    NotDeleted: "Not Deleted!",

    RemovePupil: "Remove Pupil",

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
};

export const Subjects = {
    //Subjects

    Maths: "Maths",

    PE: "PE",

    Reading: "Reading",

    Science: "Science",

    Writing: "Writing",
};

export const submitStatus = {
    Saved: "Saved",
    Pending: "Pending",
};
export const SignIn = {
    Sign_In: "Sign in",
    StaySignedIn: "Stay signed in",
    CantSignIn: "Can't Sign in?",
    CreateAccount: "Create Account",
};

export const UserStatus = {
    Active: "Active",
    InActive: "InActive",
};

export const Roles = {
    Admin: "Admin",
    SchoolAdmin: "School Admin",
    Teacher: "Teacher",
    LeadTeacher: "Lead Teacher",
};

export const Colors = {
    White: "#FFFFFF",
    Secondary: "rgba(56,56,56,0.05)",
};

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
};

export const ExternalLinks = {
    BeamEduWebsite: "https://www.beam-education.co.uk/",
};

export const ProfileRoles = [
    { name: "Admin", value: "Admin" },
    { name: "SchoolAdmin", value: "SchoolAdmin" },
    { name: "Teacher", value: "Teacher" },
    { name: "LeadTeacher", value: "LeadTeacher" },
];

export const Array = {
    Array: Roles.Array,
    TellUsBitMoreAboutYou: "Tell us bit more about you",
    IAmAPartOf: "I am a part of:",
    AndMyRoleIs: "And my role is:",
};

export const EditProfileConstants = {
    Hello: "Hello",
    FullName: "Full Name",
    WhatWouldYouLikeToBeCalled: "What would you like to be called?",
    ChangePassword: "Change Password",
    ConfirmNewPassword: "Confirm New Password",
    ExistingPassword: "Existing Password",
    NewPassword: "New Password",
    ConfirmPassword: "Confirm Password",
    TellUsABitAboutYourSelf: "Tell us a bit about yourself:",
    WhereAreYouBased: "Where are you based?",
    YourContactDetails: "Your contact details",
    ProvideBackUpEmail:
        "If we need to help you recover your account, provide a backup email:",
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
    WhereWeAreLocated: "Where we’re located",
    OurWebsiteLinks: "Our website links",
    TheServicesWeOffer: "The Services we offer",

    IAmPartOf: "I am part of:",
    MyRoleIs: "My Role is:",
};

export const WeekDays = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
};

export const WeekDaysEnum = {
    None: 0,
    Monday: 1 << 0, // 1
    Tuesday: 1 << 1, // 2
    Wednesday: 1 << 2, // 4
    Thursday: 1 << 3, // 8
    Friday: 1 << 4, // 16
    Saturday: 1 << 5, // 32
    Sunday: 1 << 6, // 64
};

export const RolesEnum = {
    None: 0,
    Founder: 1 << 0, // 1
    Investor: 1 << 1, // 2
    Partner: 1 << 2, // 4
    Array: 1 << 3, // 8
};

export const SessionStorageKeys = {
    SessionId: "SessionId",
    UserId: "UserId",
    Location: "Location",
    UserName: "UserName",
    MeetingURL: "MeetingURL",
    Name: "Name",
    Email: "email",
    SocialUser: "SocialUser",
    CurrentDashboard: "CurrentDashboard",
    UserImage: "UserImage",
    CreatePersonaPath: "CreatePersonaPath",
    SessionToken: "SessionToken",
};

export const LocalStorageKeys = {
    StaySignedInUser: "StaySignedInUser",
    StaySignedInSocialUser: "StaySignedInSocialUser",
};

export const ProfileCreateConfirmationHeader = (roleName) => (
    <p className="name-head">{`Create ${roleName} Profile`}</p>
);

export const ProfileCreateConfirmationBody = (roleName) =>
    `You don't have ${roleName} profile enabled. Please create now.`;

export const ScheduleDeleteConfirmationBody = (userName) =>
    `Hi ${userName}, unfortunately this meeting request has been withdrawn.`;

export const RescheduleMeetingMessage = (userName) =>
    `Hi ${userName}, by clicking on open calender you can reschedule the meeting.`;

export const CloseProjectMessage = () => `You're about to close this project.`;

export const DeletePupilById = (pupilId) =>
    `Do you want to delete the details of pupil id ${pupilId}`;
