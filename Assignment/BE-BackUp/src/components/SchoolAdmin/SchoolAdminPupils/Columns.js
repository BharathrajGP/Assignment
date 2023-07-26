import * as constants from "../../../helper/constants";

const columnzz = [
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
        Header: constants.Common.dob,
        accessor: constants.Accessors.dob,
    },
    {
        Header: constants.Common.ethnicity,
        accessor: constants.Accessors.ethnicity,
    },
    {
        Header: constants.Common.senStatus,
        accessor: constants.Accessors.senStatus,
    },
    {
        Header: constants.Common.ks1Result,
        accessor: constants.Accessors.ksResults,
    },
    {
        Header: "",
        accessor: constants.Accessors.action,
    },
];

export default columnzz;
