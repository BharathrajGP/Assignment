import { Common, Accessors } from "../../../helper";

const pupilCloumns = [
    {
        Header: Common.SurName,
        accessor: Accessors.lastName,
    },
    {
        Header: Common.ForeName,
        accessor: Accessors.firstName,
    },
    {
        Header: Common.Characteristics,
        accessor: Accessors.otherNeeds,
    },
    {
        Header: Common.Upn,
        accessor: Accessors.upn,
    },
    {
        Header: Common.schoolYear,
        accessor: Accessors.schoolYear,
    },
    {
        Header: Common.gender,
        accessor: Accessors.gender,
    },
    {
        Header: Common.dob,
        accessor: Accessors.dob,
    },
    {
        Header: Common.ethnicity,
        accessor: Accessors.ethnicity,
    },
    {
        Header: Common.senStatus,
        accessor: Accessors.senStatus,
    },
    {
        Header: Common.ks1Result,
        accessor: Accessors.ksResults,
    },
    {
        Header: "",
        accessor: Accessors.action,
    },
];

export { pupilCloumns };
