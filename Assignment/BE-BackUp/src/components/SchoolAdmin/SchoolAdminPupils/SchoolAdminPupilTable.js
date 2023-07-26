import React, { useEffect, useState } from "react";
import { Row, Col, Card, Pagination } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { GlobalFilter } from "../../../helper/GlobalFilter";
import {
    useTable,
    useSortBy,
    usePagination,
    useGlobalFilter,
} from "react-table";
import * as constants from "../../../helper/constants";
import Action from "./ActionDropDown";
import "../../../assets/stlyes/SchoolAdminTableStyle.css";
import columnzz from "./Columns";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";
import { isEmptyArray } from "../../../util/utils";
import * as commonApi from "../../../api/commonApi";

function Table({ columns, data }) {
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
        </>
    );
}

const PuiplTable = () => {
    const [puiplData, setPuiplData] = useState();
    const columns = React.useMemo(() => columnzz, []);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        const schoolAdminUser = await commonApi.schoolAdminUser({});
        let responseData = schoolAdminUser.data.Items;
        var finalData = [];
        for (let index = 0; index < responseData.length; index++) {
            responseData[index][constants.Accessors.action] = (
                <Action pupilId={responseData[index].id} />
            );

            responseData[index][constants.Accessors.otherNeeds] = (
                <div className="d-flex" style={{ gap: "10px" }}>
                    {responseData[index][constants.Accessors.otherNeeds]
                        .childLookedAfter && (
                        <span
                            style={{ background: "darkgrey", padding: "5px" }}
                        >
                            {constants.Common.cla}
                        </span>
                    )}
                    {responseData[index][constants.Accessors.otherNeeds]
                        .eal && (
                        <span
                            style={{ background: "darkgrey", padding: "5px" }}
                        >
                            {constants.Common.eal}
                        </span>
                    )}
                    {responseData[index][constants.Accessors.otherNeeds]
                        .freeSchoolMeals && (
                        <span
                            style={{ background: "darkgrey", padding: "5px" }}
                        >
                            {constants.Common.FSM}
                        </span>
                    )}
                    {responseData[index][constants.Accessors.otherNeeds]
                        .freeSchoolMealsE6 && (
                        <span
                            style={{ background: "darkgrey", padding: "5px" }}
                        >
                            {constants.Common.FSM6}
                        </span>
                    )}
                    {responseData[index][constants.Accessors.otherNeeds]
                        .serviceChild && (
                        <span
                            style={{ background: "darkgrey", padding: "5px" }}
                        >
                            {constants.Common.SC}
                        </span>
                    )}
                </div>
            );

            responseData[index][constants.Accessors.ksResults] = (
                <div>
                    <span>{`Writing-${
                        responseData[index][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Writing
                    }`}</span>
                    <span>{`Science-${
                        responseData[index][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Science
                    }`}</span>
                    <span>{`Maths-${
                        responseData[index][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Maths
                    }`}</span>
                    <span>{`Reading-${
                        responseData[index][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].Reading
                    }`}</span>
                    <span>{`PE-${
                        responseData[index][constants.Accessors.ksResults][
                            constants.Accessors.ks1Results
                        ].PE
                    }`}</span>
                </div>
            );

            finalData.push(responseData[index]);
        }
        setPuiplData(finalData);
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
                    {!isEmptyArray(puiplData && puiplData) ? (
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
                            <h1>{constants.Common.NoPupilFound}</h1>
                        </div>
                    )}
                </>
            )}
        </React.Fragment>
    );
};

export default PuiplTable;
