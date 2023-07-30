import React, { useEffect, useState } from "react";
import { Button, Col, Card, Modal, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";
import { Link } from "react-router-dom";

import { GlobalFilter } from "../../../helper/GlobalFilter";
import * as constants from "../../../helper/constants";
import Action from "./TeacherActionDropDown";
import columnzz from "./Columns";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";
import rows from "./Rows";
import InviteUser from "./InviteUser";
import ClassTable from "../SchoolAdminClasses/ClassTable";

import "../../../assets/stlyes/SchoolAdminTableStyle.css";


const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

        globalFilter,
        setGlobalFilter,

        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );
    const [inviteUser, setInviteUser] = useState(false);


    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex justify-content-start">
                    <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                    />
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button
                        type="submit"
                        variant="success"
                        onClick={(e) => {
                            setInviteUser(true);
                        }}
                    >
                        {/* <PersonAddIcon /> */}
                        Invite User
                    </Button>
                </Col>
            </Row>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <span className="feather icon-arrow-down text-muted float-right" />
                                            ) : (
                                                <span className="feather icon-arrow-up text-muted float-right" />
                                            )
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </BTable>

            <div
                className="d-flex justify-content-end"
                style={{ gap: "10px", marginTop: "20px", marginBottom: "0px" }}
            >
                <span className="d-flex align-items-baseline">
                    {constants.Common.RowsPerPage}
                    <select
                        className="form-control w-auto mx-2"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </span>
                <span
                    className="d-flex align-items-center"
                    style={{ marginBottom: "13px" }}
                >
                    {constants.Common.Page}{" "}
                    <strong>
                        {" "}
                        {pageIndex + 1} of {pageOptions.length}{" "}
                    </strong>{" "}
                </span>

                <Pagination className="justify-content-end">
                    <Pagination.First
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    />
                    <Pagination.Prev
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    />
                    <Pagination.Next
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                    />
                    <Pagination.Last
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    />
                </Pagination>
            </div>

            <Modal
                show={inviteUser}
                onHide={(e) => {
                    setInviteUser(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">Add Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InviteUser
                        setInviteUser={setInviteUser}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

const TeacherTable = () => {
    const [classDetails, setClassDetails] = useState();
    const columns = React.useMemo(() => columnzz, []);
    const [isLoading, setIsLoading] = useState(false);
    const [switchTab, setSwitchTab] = useState(true);
    const [pupilClassID, SetPuiplClassId] = useState('');
    const [isEnable, setIsEnable] = useState(false);



    const getData = async () => {
        setIsLoading(true);
        const adminTeachers = await commonApi.adminTeachers();
        console.log(adminTeachers);
        if (!isEmptyArray(adminTeachers.Items)) {
            let responseData = adminTeachers.Items;
            var finalData = [];
            for (let i = 0; i < responseData.length; i++) {
                responseData[i][constants.Accessors.action] = (
                    <Action classId={responseData[i].id} setSwitchTab={setSwitchTab} SetPuiplClassId={SetPuiplClassId} />
                );
                console.log();

                responseData[i]['isRegistrationGroup'] = (
                    <div className="d-flex" style={{ gap: "10px" }}>
                        {responseData[i]['isRegistrationGroup']
                            && (<span>Yes</span>
                            )}

                    </div>
                );

                responseData[i]['Subjects'] = (
                    <div className="d-flex flex-column">
                        <Link>{`Writing`}</Link>
                        <Link>{`Science`}</Link>
                        <Link>{`Maths`}</Link>
                        <Link>{`Reading`}</Link>
                        <Link>{`PE`}</Link>
                    </div>
                );

                finalData.push(responseData[i]);
            }
            setClassDetails(finalData);
        } else {
            console.log('Empty')
            setClassDetails();
        }
        setIsLoading(false);
    };

    useEffect(() => {
        // getData();
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div>
                        {!isEmptyArray(rows && rows) ? (
                            <>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={constants.Common.myCheck}
                                        onChange={(e) => {
                                            setIsEnable(!isEnable);
                                        }}
                                        // onBlur={handleBlur}
                                        value={
                                            constants.Common
                                                .EnglishAsAnAdditionalLanguage
                                        }
                                    // checked={isEal && isEal}
                                    />
                                    Include users who have been disabled
                                </label>
                                {isEnable && isEnable ? (
                                    <Row>
                                        <Col sm={12}>
                                            <Card>
                                                <Card.Body>
                                                    {rows && (
                                                        <Table
                                                            columns={columns}
                                                            data={
                                                                rows && rows
                                                            }
                                                        />
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                ) : (<ClassTable />)}

                            </>
                        ) : (
                            <div className="d-flex justify-content-center">
                                <h1>No Classes Found</h1>
                            </div>
                        )}
                    </div>
                </>
            )}
        </React.Fragment>
    );
};

export default TeacherTable;
