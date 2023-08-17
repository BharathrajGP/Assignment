import React, { useEffect, useState } from "react";
import { Button, Col, Card, Modal, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";

import { Common, Accessors, GlobalFilter } from "../../../helper";
import { Action, pupilCloumns } from "./";
import { styles } from '../';
import { LoadingSpinner } from "../../Shared";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";

import "../../../assets/stlyes/SchoolAdminTableStyle.css";
import { InviteUser } from "../Teachers";

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

    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex justify-content-start">
                    <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                        searchBy={'Search by Name/UPN'}
                    />
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
        </>
    );
}

const PupilTable = () => {
    const [puiplData, setPuiplData] = useState();
    const columns = React.useMemo(() => pupilCloumns, []);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        const adminPupil = await commonApi.adminPupil();
        if (!isEmptyArray(adminPupil.Items)) {
            let responseData = adminPupil.Items;
            var finalData = [];
            for (let i = 0; i < responseData.length; i++) {
                responseData[i][Accessors.action] = (
                    <Action pupilId={responseData[i].id} getData={getData} foreName={responseData[i].firstName} surName={responseData[i].lastName} />
                );

                responseData[i][Accessors.otherNeeds] = (
                    <div className="d-flex" style={{ gap: "10px" }}>
                        {responseData[i][Accessors.otherNeeds]
                            .childLookedAfter && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {Common.cla}
                                </span>
                            )}
                        {responseData[i][Accessors.otherNeeds]
                            .eal && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {Common.eal}
                                </span>
                            )}
                        {responseData[i][Accessors.otherNeeds]
                            .freeSchoolMeals && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {Common.FSM}
                                </span>
                            )}
                        {responseData[i][Accessors.otherNeeds]
                            .freeSchoolMealsE6 && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {Common.FSM6}
                                </span>
                            )}
                        {responseData[i][Accessors.otherNeeds]
                            .serviceChild && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {Common.SC}
                                </span>
                            )}
                    </div>
                );
                responseData[i][Accessors.senStatus] = (
                    <>{responseData[i][Accessors.senStatus] ? <span>True</span> : <span>False</span>}</>
                )

                responseData[i][Accessors.ksResults] = (
                    <div>
                        <span>{`Writing-${responseData[i][Accessors.ksResults][
                            Accessors.ks1Results
                        ].Writing
                            }`}</span>
                        <span>{`Science-${responseData[i][Accessors.ksResults][
                            Accessors.ks1Results
                        ].Science
                            }`}</span>
                        <span>{`Maths-${responseData[i][Accessors.ksResults][
                            Accessors.ks1Results
                        ].Maths
                            }`}</span>
                        <span>{`Reading-${responseData[i][Accessors.ksResults][
                            Accessors.ks1Results
                        ].Reading
                            }`}</span>
                        <span>{`PE-${responseData[i][Accessors.ksResults][
                            Accessors.ks1Results
                        ].PE
                            }`}</span>
                    </div>
                );

                finalData.push(responseData[i]);
            }
            setPuiplData(finalData);
        } else {
            setPuiplData();
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
                    {!isEmptyObject(puiplData && puiplData) ? (
                        <Row>
                            <Col sm={12}>
                                <Card>
                                    <Card.Body>
                                        {puiplData && (
                                            <Table
                                                columns={columns}
                                                data={puiplData && puiplData}
                                            />
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <h1>{Common.NoPupilFound}</h1>
                        </div>
                    )}
                </>
            )}
        </React.Fragment>
    );
};

export { PupilTable };
