import { Accessors, Common } from "../../../helper";

const teacherColumn = [
    {
        Header: Common.SurName,
        accessor: Accessors.lastName,
    },
    {
        Header: Common.ForeName,
        accessor: Accessors.firstName,
    },
    {
        Header: Common.Email,
        accessor: Accessors.email,
    },
    {
        Header: Common.Roles,
        accessor: Accessors.type,
    },
    {
        Header: Common.Classes,
        accessor: Accessors.classes,
    },
    {
        Header: "",
        accessor: Accessors.action,
    },
];

export { teacherColumn };
