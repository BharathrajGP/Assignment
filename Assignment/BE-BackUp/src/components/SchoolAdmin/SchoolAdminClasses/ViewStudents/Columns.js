import * as constants from "../../../../helper/constants";

const studentColumns = [
    {
        Header: constants.Common.SurName,
        accessor: constants.Accessors.lastName,
    },
    {
        Header: constants.Common.ForeName,
        accessor: constants.Accessors.firstName,
    },
    {
        Header: constants.Common.Characteristics,
        accessor: constants.Accessors.otherNeeds,
    },
    {
        Header: constants.Common.Upn,
        accessor: constants.Accessors.upn,
    },
    {
        Header: constants.Common.schoolYear,
        accessor: constants.Accessors.schoolYear,
    },
    {
        Header: constants.Common.gender,
        accessor: constants.Accessors.gender,
    },
    {
        Header: "",
        accessor: constants.Accessors.action,
    },
];

export default studentColumns;
