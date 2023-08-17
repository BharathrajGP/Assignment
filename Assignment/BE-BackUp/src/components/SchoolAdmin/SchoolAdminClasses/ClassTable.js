import React, { useEffect, useState } from "react";
import { Button, Col, Card, Modal, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";
import { Link } from "react-router-dom";

import { Accessors, Common, GlobalFilter } from "../../../helper";
import { LoadingSpinner } from "../../Shared";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";
import { CreateClass, TeachingAction, PuiplTable, Action, classcolumn } from "./";
import { styles } from '../';

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
    const [createClass, setcreateClass] = useState(false);


    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex justify-content-start">
                    <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                        searchBy={'Search by ClassName'}
                    />
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button
                        type="submit"
                        variant="success"
                        onClick={(e) => {
                            setcreateClass(true);
                        }}
                        getData={getData}
                    >
                        {/* <PersonAddIcon /> */}
                        {Common.AddClass}
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
                    <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                    <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                    <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
                </Pagination>
            </div>

            <Modal show={createClass} onHide={(e) => { setcreateClass(false); }} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title >{Common.AddClass}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateClass setcreateClass={setcreateClass} getData={getData} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

const ClassTable = () => {
    const [classDetails, setClassDetails] = useState();
    const columns = React.useMemo(() => classcolumn, []);
    const [isLoading, setIsLoading] = useState(false);
    const [switchTab, setSwitchTab] = useState(true);
    const [pupilClassID, SetPupilClassId] = useState("");


    const getData = async () => {
        setIsLoading(true);
        const adminClass = await commonApi.adminClass();
        console.log({ adminClass });
        if (!isEmptyArray(adminClass.Items)) {
            let responseData = adminClass.Items;
            var finalData = [];
            for (let i = 0; i < responseData.length; i++) {
                responseData[i][Accessors.action] = (
                    <>
                        {
                            responseData[i][Accessors.isRegistrationGroup] ? (
                                <Action classId={responseData[i].classId} setSwitchTab={setSwitchTab} SetPupilClassId={SetPupilClassId} getData={getData} />
                            ) : (<TeachingAction classId={responseData[i].classId} setSwitchTab={setSwitchTab} SetPupilClassId={SetPupilClassId} getData={getData} />)
                        }
                    </>

                );

                responseData[i][Accessors.isRegistrationGroup] = (
                    <div className="d-flex">
                        {responseData[i][Accessors.isRegistrationGroup]
                            && (<span>Yes</span>
                            )}

                    </div>
                );

                responseData[i][Accessors.Subjects] = (
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
            setClassDetails();
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
                    {!isEmptyObject(classDetails && classDetails) ? (
                        <div>
                            {
                                switchTab ? (
                                    <div>

                                        <Row>
                                            <Col sm={12}>
                                                <Card>
                                                    <Card.Body>
                                                        {classDetails && (
                                                            <Table columns={columns} data={classDetails && classDetails} getData={getData} />
                                                        )}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </div>
                                ) : (
                                    <div>
                                        <PuiplTable pupilClassID={pupilClassID} />
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <h1>{Common.NoClassesFound}</h1>
                        </div>
                    )}
                </>
            )}
        </React.Fragment>
    );
};

export { ClassTable };
