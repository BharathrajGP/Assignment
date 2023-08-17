import { Common, Accessors } from "../../../helper";

const classcolumn = [
    {
        Header: Common.ClassName,
        accessor: Accessors.name,
    },
    {
        Header: Common.isRegistration,
        accessor: Accessors.isRegistrationGroup,
    },
    {
        Header: Common.Subjects,
        accessor: Accessors.Subjects,
    },
    {
        Header: Common.ClassSize,
        accessor: Accessors.classSize,
    },
    {
        Header: "",
        accessor: Accessors.action,
    },
];

export { classcolumn };
