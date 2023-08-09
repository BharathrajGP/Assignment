import * as constants from "../../../helper/constants";

const classcolumn = [
    {
        Header: constants.Common.ClassName,
        accessor: constants.Accessors.className,
    },
    {
        Header: constants.Common.isRegistration,
        accessor: constants.Accessors.isRegistrationGroup,
    },
    {
        Header: constants.Common.Subjects,
        accessor: constants.Accessors.Subjects,
    },
    {
        Header: constants.Common.ClassSize,
        accessor: constants.Accessors.classSize,
    },
    {
        Header: "",
        accessor: constants.Accessors.action,
    },
];

export default classcolumn;
