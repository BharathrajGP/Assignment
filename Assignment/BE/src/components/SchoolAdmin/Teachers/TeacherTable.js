import React, { useEffect, useState } from "react";
import { Button, Col, Card, Modal, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { GlobalFilter } from "../../../helper/GlobalFilter";
import * as constants from "../../../helper/constants";
import Action from "./TeacherActionDropDown";
import columnzz from "./Columns";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";
import rows from "./Rows";
import InviteUser from "./InviteUser";

import "../../../assets/stlyes/SchoolAdminTableStyle.css";
import EnableUserAction from "./EnableUserAction";


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
                    />
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button
                        type="submit"
                        variant="success"
                        onClick={(e) => {
                            setInviteUser(true);
                        }}
                        getData={getData}
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
    const [activeUserDetails, setActiveUserDetails] = useState();
    const [teacherDetails, setTeacherDetails] = useState();
    const columns = React.useMemo(() => columnzz, []);
    const [isLoading, setIsLoading] = useState(false);
    const [isEnable, setIsEnable] = useState(false);
    const MySwal = withReactContent(Swal);
    // const [isType, setIsType] = useState();
    // const [isTypeId, setIsTypeId] = useState();

    const removeType = async (role, id) => {
        const removeType = await commonApi.removeType({
            id: id,
            type: role,
        });
        console.log({ removeType });
        getData();
    }

    const Swalll = ({ role, id }) => {
        MySwal.fire({
            title: 'Remove Role',
            text: 'User is Already Disabled Do you want to delete the Role',
            type: "success",
            showCancelButton: true,
            confirmButtonText: 'remove role',
        }).then((result) => {
            if (result.value) {
                removeType(role, id);
            } else {
                MySwal.fire(constants.Common.NotDeleted);
            }
        });
    }

    const removeClass = async (id, classId, subjectId) => {
        console.log({ id });
        console.log({ classId });
        console.log({ subjectId });
    }
    const getData = async () => {
        setIsLoading(true);
        const adminTeachers = await commonApi.adminTeachers();
        console.log(adminTeachers);
        if (!isEmptyArray(adminTeachers.Items)) {
            let responseData = adminTeachers.Items;
            var finalActiveData = [];
            var finalOverAllData = [];
            console.log(responseData[0].active);
            console.log(responseData[0].classes);
            for (let i = 0; i < responseData.length; i++) {
                if (responseData[i].active) {
                    responseData[i][constants.Accessors.action] = (
                        <Action userId={responseData[i].userId} getData={getData} foreName={responseData[i].firstName} surName={responseData[i].lastName} />
                    );

                    responseData[i]['classes'] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i]['classes'].map((item) => {

                                return (
                                    <>
                                        {item.subjects.map((sub) => {
                                            return (
                                                <div style={{ width: '250px' }} className="d-flex justify-content-between">
                                                    <small>{item.className}-{sub.subjectName}</small>
                                                    <small><button style={{ color: 'red', background: 'none' }} onClick={() => {
                                                        console.log(responseData[i].userId)
                                                        console.log('class Id', item.id)
                                                        console.log('Subject Id', sub.id)
                                                        removeClass(responseData[i].userId, item.id, sub.id);
                                                    }}>remove</button></small>
                                                </div>)
                                        })}
                                    </>
                                )
                            })}
                        </div>
                    );

                    responseData[i]['type'] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i]["type"].map((role) => {
                                return (
                                    <div style={{ width: '200px' }}>
                                        <small className="d-flex justify-content-between">
                                            <label>{role}</label>
                                            <button style={{ color: 'red', background: 'none' }} onClick={() => {
                                                removeType(role, responseData[i].userId);
                                                // setIsType({ role });
                                                // setIsTypeId(responseData[i].userId);
                                            }} > remove</button>
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
                    responseData[i][constants.Accessors.action] = (
                        <EnableUserAction userId={responseData[i].userId} getData={getData} foreName={responseData[i].firstName} surName={responseData[i].lastName} />
                    );
                    console.log();

                    responseData[i]['classes'] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i]['classes'].map((item) => {
                                return (
                                    <>
                                        {item.subjects.map((sub) => {
                                            return (
                                                <div style={{ width: '250px' }} className="d-flex justify-content-between">
                                                    <small>{item.className}-{sub.subjectName}</small>
                                                    <small><button style={{ color: 'red', background: 'none' }}>remove</button></small>
                                                </div>)
                                        })}
                                    </>
                                )
                            })}
                        </div>
                    );

                    responseData[i]['type'] = (
                        <div className="d-flex flex-column" style={{ gap: '5px' }}>
                            {responseData[i]["type"].map((role) => {
                                return (
                                    <div style={{ width: '200px' }}>
                                        <small className="d-flex justify-content-between">
                                            <label>{role}</label>
                                            <button style={{ color: 'red', background: 'none' }} onClick={() => {
                                                Swalll(role, responseData[i].userId);
                                                // removeType(role, responseData[i].userId);
                                            }}> remove</button>
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
    const [inviteUser, setInviteUser] = useState(false);


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
                                name={constants.Common.myCheck}
                                onChange={() => {
                                    setIsEnable(!isEnable);
                                    // getData();
                                }}
                                checked={isEnable}
                                // onBlur={handleBlur}
                                value={
                                    constants.Common
                                        .EnglishAsAnAdditionalLanguage
                                }
                            // checked={isEal && isEal}
                            />
                            Include users who have been disabled
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
                            </Row>) : (<>No Data Found</>)}
                    </div>
                </>
            )}
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
        </React.Fragment>
    );
};

export default TeacherTable;
