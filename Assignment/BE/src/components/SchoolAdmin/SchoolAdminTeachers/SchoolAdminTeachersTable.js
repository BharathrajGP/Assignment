import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/stlyes/SchoolAdminTable.css";
import Action from "./TeacherAction";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";

function SchoolAdminTeachersTable() {
    const [displayTeachersData, setDisplayTeachersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    async function teachersView() {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        setIsLoading(true);
        const schoolAdminTeachersView = await commonApi.schoolAdminTeachersView(
            {}
        );
        console.log(email);
        console.log(schoolAdminTeachersView);
        if (!isEmptyObject(schoolAdminTeachersView)) {
            const teachersData = schoolAdminTeachersView.data.Items;
            const arrayData = [];
            teachersData.map((entry, index) => {
                console.log("entry", entry);
                entry.map((item) => {
                    console.log("iitem", item);
                    arrayData.push(item);
                });
            });

            setDisplayTeachersData(arrayData);
        } else {
        }
        setIsLoading(false);
    }

    function EnhancedTableHead() {
        return (
            <TableHead className="schooladmin-head">
                <TableRow>
                    <TableCell className="schooladmin-headDecoration">
                        SurName
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        ForeName
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Email
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Roles
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Classes
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration"></TableCell>
                </TableRow>
            </TableHead>
        );
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const rows = [
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Yes",
            Email: "Science",
            Roles: 100,
            Classes: "S1CLS1",
            Actions: <Action />,
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = useMemo(
        () =>
            stableSort(rows, getComparator()).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage]
    );

    useEffect(() => {
        // teachersView();
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%" }}>
                <TableContainer>
                    <Table
                    // sx={{ minWidth: 750 }}
                    // aria-labelledby="tableTitle"
                    // size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead rowCount={rows.length} />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                // const isItemSelected = isSelected(row.name);
                                return (
                                    <TableRow className="schooladmin-head">
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className="schooladmin-dataDecoration"
                                        >
                                            {row.SurName}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                        >
                                            {row.ForeName}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.Email}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.Roles}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.Classes}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.Actions}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="schooladmin-footer"
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
    // }
}

export default SchoolAdminTeachersTable;
