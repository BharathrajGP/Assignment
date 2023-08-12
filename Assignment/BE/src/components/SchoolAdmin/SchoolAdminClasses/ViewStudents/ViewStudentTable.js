import React, { useEffect, useState } from "react";
import { Col, Card, Pagination, Row } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { useGlobalFilter, usePagination, useSortBy, useTable, } from "react-table";

import * as constants from '../../../../helper/constants';
import { PupilAction, studentColumns } from "./";
import LoadingSpinner from "../../../Shared/Loader/LoadingSpinner";
import { isEmptyArray, isEmptyObject } from "../../../../util/utils";
import * as commonApi from "../../../../api/commonApi";
import { GlobalFilter } from "../../../../helper/GlobalFilter";
import { styles } from '../../'

import "../../../../assets/stlyes/SchoolAdminTableStyle.css";


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
                    <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                    <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                    <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                    <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
                </Pagination>
            </div>
        </>
    );
}

const PuiplTable = ({ pupilClassID }) => {
    const [puiplData, setPuiplData] = useState();
    const columns = React.useMemo(() => studentColumns, []);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        const viewStudents = await commonApi.viewStudents({
            id: pupilClassID
        });
        if (!isEmptyArray(viewStudents.Items)) {
            let responseData = viewStudents.Items;
            var finalData = [];
            for (let i = 0; i < responseData.length; i++) {
                responseData[i][constants.Accessors.action] = (
                    <PupilAction pupilId={responseData[i].id} pupilClassID={pupilClassID} getData={getData} />
                );

                responseData[i][constants.Accessors.otherNeeds] = (
                    <div className="d-flex" style={{ gap: "10px" }}>
                        {responseData[i][constants.Accessors.otherNeeds]
                            .childLookedAfter && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {constants.Common.cla}
                                </span>
                            )}
                        {responseData[i][constants.Accessors.otherNeeds]
                            .eal && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {constants.Common.eal}
                                </span>
                            )}
                        {responseData[i][constants.Accessors.otherNeeds]
                            .freeSchoolMeals && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {constants.Common.FSM}
                                </span>
                            )}
                        {responseData[i][constants.Accessors.otherNeeds]
                            .freeSchoolMealsE6 && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {constants.Common.FSM6}
                                </span>
                            )}
                        {responseData[i][constants.Accessors.otherNeeds]
                            .serviceChild && (
                                <span
                                    style={styles.characterisctics}
                                >
                                    {constants.Common.SC}
                                </span>
                            )}
                    </div>
                );

                responseData[i][constants.Accessors.ksResults] = (
                    <div className="d-flex flex-column">
                        <span>{`Writing-${responseData[i][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Writing
                            }`}</span>
                        <span>{`Science-${responseData[i][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Science
                            }`}</span>
                        <span>{`Maths-${responseData[i][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Maths
                            }`}</span>
                        <span>{`Reading-${responseData[i][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Reading
                            }`}</span>
                        <span>{`PE-${responseData[i][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
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
                    {console.log(isEmptyObject(puiplData))}
                    {!isEmptyObject(puiplData && puiplData) ? (
                        < Row >
                            <Col sm={12}>
                                <Card>
                                    <Card.Body>
                                        {puiplData && (
                                            <Table columns={columns} data={puiplData && puiplData} />
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <h1>{constants.Common.NoPupilFound}</h1>
                        </div>
                    )}
                </>
            )
            }
        </React.Fragment >
    );
};

export { PuiplTable };
