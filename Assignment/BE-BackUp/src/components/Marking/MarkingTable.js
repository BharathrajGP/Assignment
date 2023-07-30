import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import VolumeGrey from "../../assets/images/VolumeGrey.png";
import EditSvg from "../../assets/images/Edit.svg";
import { isEmptyArray } from 'formik';

const styles = {
    sChip: {
        backgroundColor: '#e0e0e0',
        borderRadius: '16px',
        width: '28px',
        height: '24px',
        marginRight: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ealChip: {
        backgroundColor: '#e0e0e0',
        borderRadius: '16px',
        width: '44px',
        height: '24px',
        marginRight: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        width: '100px',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    markButton: {
        backgroundColor: '#084059',
        boredrColor: '#084059',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        paddingRight: '17px',
        paddingTop: '5px',
        paddingBottom: '5px',
        color: '#FFFFFF'
    },
    percentage: {
        backgroundColor: '#26C8B9',
        // backgroundColor: '#F34970',
        // backgroundColor: '#F4C900',
        // backgroundColor: '#E0E0E0',
        // backgroundColor: '#AABB5D',
        width: '100px',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}

function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length;

    return (
        ''
        // <input
        //   className="form-control"
        //   value={filterValue || ''}
        //   onChange={(e) => {
        //     setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        //   }}
        //   placeholder={`Search ${count} records...`}
        // />
    );
}

function SliderColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    return (
        <div className="d-flex align-items-center">
            <button style={styles.markButton} onClick={() => setFilter(undefined)}>
                <img src={EditSvg} alt="vol" style={{ marginRight: '2px', marginLeft: '5px' }} />
                MARK
            </button>
        </div>
    );
}


// Our table component
function Table({ columns, data }) {

    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            //   fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter((row) => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
                });
            }
        }),
        []
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes
        },
        useFilters, // useFilters!
        useGlobalFilter // useGlobalFilter!
    );

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = rows.slice(0, 10);

    return (
        <>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </BTable>
        </>
    );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
    return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue >= filterValue;
    });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

const MarkingTable = (props) => {
    const { headersData, _subjectClassId, _classId } = props;

    const columns = React.useMemo(() =>
        headersData.map((ele, i) => {
            return (
                (i === 0) ? {
                    Header: ele.description === ele.description ? `${ele.description} ` : ele.description,
                    columns: [{ Header: ' ', accessor: ele.description === ele.description ? `${ele.description} ` : ele.description }]
                } : (i === headersData.length - 1) ?
                    {
                        Header: ele.description === ele.description ? `${ele.description} ` : ele.description,
                        columns: [{ Header: ele.actual, accessor: ele.actual }, { Header: ele.predicted, accessor: ele.predicted }]
                    } :
                    {
                        Header: ele.description === ele.description ? `${ele.description} ` : ele.description,
                        columns: [{ Header: ' ', accessor: ele.description === ele.description ? `${ele.description} ` : ele.description, Filter: SliderColumnFilter, filter: 'equals' }]
                    }
            )
        })
        , [headersData])

    //   const data = React.useMemo(() => makeData(1000), []);
    const data = [
        {
            "firstName": <div className="pupil" style={{ display: 'flex', alignItems: 'center' }}>
                <span>Leslie Alexander</span>
                <img src={VolumeGrey} alt="vol" style={{ marginRight: '10px' }} />
                <span className="S-chip" style={styles.sChip}>S </span>
                <span className="EAL-chip" style={styles.ealChip}>EAL </span>
            </div>,
            "digitalValues": <span style={styles.percentage}>30%</span>,
            "powers": <span style={styles.percentage}>30%</span>,
            "negativeNumbers": <span style={styles.percentage}>30%</span>,
            "roundingNumbers": <span style={styles.percentage}>30%</span>,
            "solvingProblems": <span style={styles.percentage}>30%</span>,
            "romanNumerals": <span style={styles.percentage}>30%</span>,
            "actual": <span style={styles.percentage}>30%</span>,
            "predicted": <span style={styles.percentage}>30%</span>
        }
    ];

    return (
        <Row>
            <Col>
                <Table columns={columns} data={data} />
            </Col>
        </Row>
    );
}

export default MarkingTable;