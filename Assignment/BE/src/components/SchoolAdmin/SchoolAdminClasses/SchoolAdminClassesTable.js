import React, { useState, useEffect } from "react";
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
import Action from "./ClassAction";
import "../../../assets/stlyes/Actions.css";
import SearchBar from "../SearchBar/SearchBar";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";

function SchoolAdminClassesTable({ switchTabs }) {
    const [displayClassData, setDisplayClassData] = useState();

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

    function EnhancedTableHead() {
        return (
            <TableHead className="schooladmin-head">
                <TableRow>
                    <TableCell className="schooladmin-headDecoration">
                        ClassName
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Is Registration Group
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Subjects
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        Class Size
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration"></TableCell>
                </TableRow>
            </TableHead>
        );
    }
    async function classDataView() {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        const schoolAdminClassView = await commonApi.schoolAdminClassView({});
        console.log(email);
        console.log(schoolAdminClassView);
        if (!isEmptyObject(schoolAdminClassView)) {
            const classData = schoolAdminClassView.data.Items;
            const arrayData = [];
            classData.map((entry, index) => {
                console.log("entry", entry);
                entry.map((item) => {
                    console.log("iitem", item);
                    arrayData.push(item);
                });
            });

            setDisplayClassData(arrayData);
        } else {
        }
    }

    useEffect(() => {
        classDataView();
    }, []);

    // export default function EnhancedTable() {

    const rows = [
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action switchTabs={switchTabs} />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
        {
            ClassName: "Timber wolf",
            IsReg: "Yes",
            Subjects: "Science",
            ClassSize: 100,
            Actions: <Action />,
        },
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const [rowsData,setRowsData] = React.useState(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator()).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage]
    );
    console.log(visibleRows.length);
    return (
        <Box sx={{ width: "100%" }}>
            {/* <SearchBar rowsData={rowsData} setRowsData={setRowsData} /> */}
            <Paper sx={{ width: "100%" }}>
                <TableContainer>
                    <Table
                    // sx={{ minWidth: 750 }}
                    // aria-labelledby="tableTitle"
                    // size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                        // rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                // const isItemSelected = isSelected(row.name);
                                // ;
                                return (
                                    <TableRow className="schooladmin-head">
                                        <TableCell
                                            component="th"
                                            // scope="row"
                                            className="schooladmin-dataDecoration"
                                        >
                                            {row.ClassName}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.IsReg}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.Subjects}
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            className="schooladmin-dataDecoration"
                                            style={{ background: "lightgrey" }}
                                        >
                                            {row.ClassSize}
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

export default SchoolAdminClassesTable;
