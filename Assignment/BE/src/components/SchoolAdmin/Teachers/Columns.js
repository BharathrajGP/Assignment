import * as constants from "../../../helper/constants";

const teacherColumn = [
    {
        Header: constants.Common.SurName,
        accessor: constants.Accessors.lastName,
    },
    {
        Header: constants.Common.ForeName,
        accessor: constants.Accessors.firstName,
    },
    {
        Header: constants.Common.Email,
        accessor: constants.Accessors.email,
    },
    {
        Header: constants.Common.Roles,
        accessor: constants.Accessors.type,
    },
    {
        Header: constants.Common.Classes,
        accessor: constants.Accessors.classes,
    },
    {
        Header: "",
        accessor: constants.Accessors.action,
    },
];

export { teacherColumn };
