import React, { useEffect, useState } from "react";
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
import "../../../assets/stlyes/Modals.css";
import Action from "./ActionDropDown";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";
import { Common } from "../../../helper/constants";

const SchoolAdminPupil = () => {
    const [displayPupilData, setDisplayPupilData] = useState([]);
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
        console.log({ array });
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

    async function pupilsUpdate() {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        setIsLoading(true);
        const schoolAdminUser = await commonApi.schoolAdminUser({});
        console.log(email);
        console.log(schoolAdminUser);
        if (!isEmptyObject(schoolAdminUser)) {
            console.log(schoolAdminUser);
            const schoolData = schoolAdminUser.data.Items;
            const arrayData = [];
            schoolData.map((entry, index) => {
                console.log("entry", entry);
                // entry.map((item) => {
                //     console.log("item", item);
                //     arrayData.push(item);
                // });
            });
            console.log(arrayData);
            // setDisplayPupilData(arrayData);
            // const result= schoolAdminUser.data.Items.map((Users)=>{
            //   const _result=Users.map((User)=>{
            //     console.log(User);
            //     // setDisplayPupilData([...User]);
            //     return User
            //   }
            //   )
            //   console.log(_result)
            //   setDisplayPupilData([..._result])
            //   return _result;
            // })
            // setDisplayPupilData([...result]);
        } else {
        }
        setIsLoading(false);
    }

    function EnhancedTableHead() {
        return (
            <TableHead
                className="schooladmin-head"
                onLoad={() => pupilsUpdate()}
            >
                <TableRow>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.SurName}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.ForeName}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.Characteristics}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.Upn}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.schoolYear}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.gender}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.dob}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.ethnicity}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.senStatus}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration">
                        {Common.ks1Result}
                    </TableCell>
                    <TableCell className="schooladmin-headDecoration"></TableCell>
                </TableRow>
            </TableHead>
        );
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [pupilId, setPupileId] = useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(displayPupilData, getComparator()).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage, displayPupilData]
    );

    function getPupileId(e) {
        setPupileId(e);
    }

    useEffect(() => {
        pupilsUpdate();
    }, []);
    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <Box sx={{ width: "100%" }}>
                    {displayPupilData.length > 0 ? (
                        <Paper sx={{ width: "100%" }}>
                            <TableContainer>
                                <Table>
                                    <EnhancedTableHead
                                        rowCount={displayPupilData.length}
                                    />
                                    <TableBody>
                                        {visibleRows.map((Users) => {
                                            return (
                                                <TableRow className="schooladmin-head">
                                                    <TableCell className="schooladmin-dataDecoration">
                                                        {Users.lastname}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration"
                                                    >
                                                        {Users.firstname}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration"
                                                    >
                                                        {Users.other_needs.map(
                                                            (entry) => {
                                                                return (
                                                                    <>
                                                                        {entry.eal ===
                                                                        Common.Yes ? (
                                                                            <label>
                                                                                {
                                                                                    Common.eal
                                                                                }
                                                                            </label>
                                                                        ) : null}
                                                                        {entry.child_looked_after ===
                                                                        Common.Yes ? (
                                                                            <label>
                                                                                {
                                                                                    Common.cla
                                                                                }
                                                                            </label>
                                                                        ) : null}
                                                                        {entry.free_school_meals ===
                                                                        Common.Yes ? (
                                                                            <label>
                                                                                {
                                                                                    Common.FSM
                                                                                }
                                                                            </label>
                                                                        ) : null}
                                                                        {entry.free_school_meals_e6 ===
                                                                        Common.Yes ? (
                                                                            <label>
                                                                                {
                                                                                    Common.FSM6
                                                                                }
                                                                            </label>
                                                                        ) : null}
                                                                        {entry.service_child ===
                                                                        Common.Yes ? (
                                                                            <label>
                                                                                {
                                                                                    Common.SC
                                                                                }
                                                                            </label>
                                                                        ) : null}
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.upn}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.SchoolYear}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.gender}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.dob}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.ethnicity}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {Users.sen_status}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                    >
                                                        {}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="schooladmin-dataDecoration2"
                                                        onClick={(e) => {
                                                            getPupileId(
                                                                Users.id
                                                            );
                                                        }}
                                                    >
                                                        <Action
                                                            pupilId={pupilId}
                                                        />
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
                                count={displayPupilData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    ) : (
                        <h1
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {Common.NoPupilFound}
                        </h1>
                    )}
                </Box>
            )}
        </div>
    );
};

export default SchoolAdminPupil;
