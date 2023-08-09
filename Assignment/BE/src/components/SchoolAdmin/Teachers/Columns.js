import * as constants from "../../../helper/constants";

const teacherColumn = [
    {
        Header: constants.Common.SurName,
        accessor: "lastName",
    },
    {
        Header: constants.Common.ForeName,
        accessor: "firstName",
    },
    {
        Header: constants.Common.Email,
        accessor: "email",
    },
    {
        Header: constants.Common.Roles,
        accessor: "type",
    },
    {
        Header: constants.Common.Classes,
        accessor: "classes",
    },
    {
        Header: "",
        accessor: constants.Accessors.action,
    },
];

export default teacherColumn;
