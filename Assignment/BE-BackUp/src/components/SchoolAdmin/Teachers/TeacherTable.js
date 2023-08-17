import React, { useEffect, useState } from "react";
import { Button, Col, Card, Modal, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Accessors, Common, GlobalFilter, MESSAGES, VALIDATION } from "../../../helper";
import { Action, InviteUser, EnableUserAction, teacherColumn } from "./";
import { LoadingSpinner } from "../../Shared";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";
import { styles } from '../'

import "../../../assets/stlyes/SchoolAdminTableStyle.css";


const Table = ({ columns, data, getData }) => {
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
                        searchBy={'Search by Name/Email'}
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
                        {Common.InviteUser}
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
                                    )}
                                >
                                    {column.render("Header")}
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
                style={styles.paginate}
            >
                <span className="d-flex align-items-baseline">
                    {Common.RowsPerPage}
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
                    {Common.Page}{" "}
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
                    <Modal.Title>{Common.InviteUser}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InviteUser
                        setInviteUser={setInviteUser}
                        getData={getData}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

const TeacherTable = () => {
    const [activeUserDetails, setActiveUserDetails] = useState();
    const [teacherDetails, setTeacherDetails] = useState();
    const columns = React.useMemo(() => teacherColumn, []);
    const [isLoading, setIsLoading] = useState(false);
    const [isEnable, setIsEnable] = useState(false);
    const MySwal = withReactContent(Swal);

    const removeType = async (role, id) => {
        const removeType = await commonApi.removeType({
            id: id,
            type: role,
        });
        getData();
    }

    const Swalll = (role, id) => {
        MySwal.fire({
            title: Common.RemoveRole,
            text: VALIDATION.USER_IS_ALREADY_DISABLED_DO_YOU_WANT_TO_DELETE_THE_ROLE,
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.RemoveRole,
        }).then((result) => {
            if (result.value) {
                removeType(role, id);
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    }

    const ClassSwalll = (id, classId, subjectId) => {
        MySwal.fire({
            title: Common.RemoveClass,
            text: VALIDATION.USER_IS_ALREADY_DISABLED_DO_YOU_WANT_TO_DELETE_THE_CLASS,
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.RemoveClass,
        }).then((result) => {
            if (result.value) {
                removeClass(id, classId, subjectId);
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    }

    const removeClass = async (id, classId, subjectId) => {
        console.log({ id });
        console.log({ classId });
        console.log({ subjectId });
        const removeclass = await commonApi.removeClass({
            id,
            classId,
            subjectId
        });
        console.log({ removeclass });
        getData();
    }
    const getData = async () => {
        setIsLoading(true);
        const adminTeachers = await commonApi.adminTeachers();
        if (!isEmptyArray(adminTeachers.Items)) {
            let responseData = adminTeachers.Items;
            var finalActiveData = [];
            var finalOverAllData = [];
            for (let i = 0; i < responseData.length; i++) {
                if (responseData[i].active) {
                    responseData[i][Accessors.action] = (
                        <Action userId={responseData[i].userId} getData={getData} foreName={responseData[i].firstName} surName={responseData[i].lastName} />
                    );

                    responseData[i][Accessors.classes] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i][Accessors.classes].map((item) => {

                                return (
                                    <>
                                        {item.subjects.map((sub) => {
                                            return (
                                                <div style={styles.classCellWidth} className="d-flex justify-content-between">
                                                    <small>{item.name}-{sub.name}</small>
                                                    <small><button style={styles.removeButton} onClick={() => {
                                                        removeClass(responseData[i].userId, item.id, sub.id);
                                                    }}>{Common.remove}</button></small>
                                                </div>)
                                        })}
                                    </>
                                )
                            })}
                        </div>
                    );

                    responseData[i][Accessors.type] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i][Accessors.type].map((role) => {
                                return (
                                    <div style={styles.roleCellWidth}>
                                        <small className="d-flex justify-content-between">
                                            <label>{role}</label>
                                            <button style={styles.removeButton} onClick={() => {
                                                removeType(role, responseData[i].userId);
                                            }} > {Common.remove}</button>
                                        </small>
                                    </div>
                                )
                            })}
                        </div>
                    )

                    finalActiveData.push(responseData[i]);
                    finalOverAllData.push(responseData[i]);
                }
                else {
                    responseData[i][Accessors.action] = (
                        <EnableUserAction userId={responseData[i].userId} getData={getData} foreName={responseData[i].firstName} surName={responseData[i].lastName} />
                    );

                    responseData[i][Accessors.classes] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i][Accessors.classes].map((item) => {
                                return (
                                    <>
                                        {item.subjects.map((sub) => {
                                            return (
                                                <div style={styles.classCellWidth} className="d-flex justify-content-between">
                                                    <small>{item.name}-{sub.name}</small>
                                                    <small><button style={styles.removeButton} onClick={() => { ClassSwalll(responseData[i].userId, item.id, sub.id) }}>{Common.remove}</button></small>
                                                </div>)
                                        })}
                                    </>
                                )
                            })}
                        </div>
                    );

                    responseData[i][Accessors.type] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i][Accessors.type].map((role) => {
                                return (
                                    <div style={styles.roleCellWidth}>
                                        <small className="d-flex justify-content-between">
                                            <label>{role}</label>
                                            <button style={styles.removeButton} onClick={() => {
                                                Swalll(role, responseData[i].userId);
                                            }}> {Common.remove}</button>
                                        </small>
                                    </div>
                                )
                            })}
                        </div>
                    )

                    finalOverAllData.push(responseData[i]);
                }
                setActiveUserDetails(finalActiveData);
                setTeacherDetails(finalOverAllData);

            }
        }
        else {
            console.log('Empty')
            setActiveUserDetails();
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div>

                        <label>
                            <input
                                type="checkbox"
                                name={Common.myCheck}
                                onChange={() => {
                                    setIsEnable(!isEnable);
                                    // getData();
                                }}
                                checked={isEnable}
                            />
                            {MESSAGES.Include_users_who_have_been_disabled}
                        </label>

                        {!isEmptyArray(teacherDetails && teacherDetails) ? (
                            <Row>
                                <Col sm={12}>
                                    <Card>
                                        <Card.Body>
                                            {teacherDetails && (
                                                <Table
                                                    columns={columns}
                                                    data={
                                                        isEnable ? teacherDetails && teacherDetails : activeUserDetails && activeUserDetails
                                                    }
                                                    getData={getData}
                                                />
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>) : (<>{Common.NoUserFound}</>)}
                    </div>
                </>
            )}
        </React.Fragment>
    );
};

export { TeacherTable };
