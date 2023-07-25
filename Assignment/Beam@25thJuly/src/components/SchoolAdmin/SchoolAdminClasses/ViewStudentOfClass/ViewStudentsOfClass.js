import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { gridDateTimeFormatter } from "@mui/x-data-grid";
import "../../../../assets/stlyes/SchoolAdminTable.css";
import Action from "./ViewStudentDropDown";

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
                    SurName
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    ForeName
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    Characteristics
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    UPN
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    School Year
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    Gender
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    DoB
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    Ethnicity
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    Sen Status
                </TableCell>
                <TableCell className="schooladmin-headDecoration">
                    KS1 Results
                </TableCell>
                <TableCell className="schooladmin-headDecoration"></TableCell>
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const rows = [
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
        {
            SurName: "Timber wolf",
            ForeName: "Lesley",
            Characteristics: "Schofield",
            UPN: "It",
            SchoolYear: "Year 1",
            Gender: "Male",
            DoB: "2022-11-06 18:54:57",
            Ethnicity: "Indian",
            SenStatus: "SA+",
            KS1Result: "Reading:GDS",
            Actions: <Action />,
            // Actions:<div style={{border:'1px solid black',background:'white'}}>Actions</div>
        },
    ];
    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator()).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        []
    );

    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Paper sx={{ width: "100%" }}>
                    <TableContainer>
                        <Table>
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
                                            >
                                                {row.Characteristics}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.UPN}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.SchoolYear}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.Gender}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.DoB}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.Ethnicity}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.SenStatus}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
                                            >
                                                {row.KS1Result}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                className="schooladmin-dataDecoration"
                                                style={{
                                                    background: "lightgrey",
                                                }}
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
        </div>
    );
}
