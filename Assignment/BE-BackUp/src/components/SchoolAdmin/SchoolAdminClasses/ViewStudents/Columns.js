import { Common, Accessors } from "../../../../helper";

const studentColumns = [
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
        accessor: Accessors.year,
    },
    {
        Header: Common.gender,
        accessor: Accessors.gender,
    },
    {
        Header: "",
        accessor: Accessors.action,
    },
];

export { studentColumns };
