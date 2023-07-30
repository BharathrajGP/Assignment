import * as constants from "../../../helper/constants";

const teacherColumn = [
    {
        Header: constants.Common.SurName,
        accessor: "SurName",
    },
    {
        Header: constants.Common.ForeName,
        accessor: "ForeName",
    },
    {
        Header: constants.Common.Email,
        accessor: "Email",
    },
    {
        Header: 'Roles',
        accessor: "Roles",
    },
    {
        Header: 'Classes',
        accessor: "Classes",
    },
    {
        Header: "",
        accessor: 'Actions',
    },
];

export default teacherColumn;
