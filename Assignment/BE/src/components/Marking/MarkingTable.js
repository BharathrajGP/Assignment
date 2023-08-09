import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import BTable from 'react-bootstrap/Table';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

import { isNullOrEmpty } from '../../util/utils';
import * as Routes from '../../helper/routes'
import * as constants from '../../helper/constants';

import '../../assets/stlyes/marking.css'
import "bootstrap/dist/css/bootstrap.min.css";

import VolumeGrey from "../../assets/images/VolumeGrey.png";
import EditSvg from "../../assets/images/Edit.svg";
import KeyIcon from "../../assets/images/keyIcon.svg";

const styles = {
    sChip: {
        backgroundColor: '#e0e0e0',
        color: '#011C25',
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
        color: '#011C25',
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
    1: {
        backgroundColor: '#26C8B9',
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
    2: {
        backgroundColor: '#F34970',
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
    3: {
        backgroundColor: '#F4C900',
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
    4: {
        backgroundColor: '#E0E0E0',
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
    5: {
        backgroundColor: '#AABB5D',
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
    }
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


// Our table component
function Table({ columns, data }) {

    console.log("columns----------------------------", columns);
    console.log("data-------------------------------", data);

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

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, visibleColumns, preGlobalFilteredRows, setGlobalFilter } = useTable(
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
                                <th {...column.getHeaderProps()} >
                                    {console.log('sdsdsd', column.columns !== undefined && column.columns[0].isKPI)}
                                    <div className='marking-header-style'>
                                        {column.render('Header')}
                                        {((column.columns !== undefined && column.columns[0].isKPI === true)) && <div>{<img src={KeyIcon} />}</div>}
                                    </div>
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
    const { headersData, tableBodyData, categoryName, subjectName, _subjectClassId, _classId, year } = props;
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState();

    const SliderColumnFilter = (categoryName, subjectName, _subjectClassId, _classId, year, _description) => {
        return (
            <div className="d-flex align-items-center">
                <button style={styles.markButton} onClick={() => navigate(Routes.topicMarkEditor(categoryName, subjectName, _subjectClassId, _classId, year, _description))}>
                    <img src={EditSvg} alt="vol" style={{ marginRight: '2px', marginLeft: '5px' }} />
                    {constants.Common.MARK}
                </button>
            </div>
        );
    }

    const columns = React.useMemo(() =>
        headersData.map((ele, i) => {
            return (
                (i === 0) ? {
                    Header: ele.description === ele.description ? `${ele.description}` : ele.description,
                    columns: [{ Header: ' ', accessor: ele.description === ele.description ? `${ele.description}` : ele.description, isKPI: false }]
                } : (i === headersData.length - 1) ?
                    {
                        Header: ele.description === ele.description ? `${ele.description}` : ele.description,
                        columns: [{ Header: ele.actual, accessor: ele.actual, isKPI: false }, { Header: ele.predicted, accessor: ele.predicted, isKPI: false }]
                    } :
                    {
                        Header: ele.description === ele.description ? `${ele.description}` : ele.description,
                        columns: [{ Header: ' ', accessor: ele.description === ele.description ? `${ele.description}` : ele.description, isKPI: ele.isKPI, Filter: SliderColumnFilter(categoryName, subjectName, _subjectClassId, _classId, year, ele.description), filter: 'equals' }]
                    }
            )
        }), [headersData])

    const getstudentData = () => {
        // console.log({headersData})
        const arrayData = [];
        for (let i = 0; i < tableBodyData.length; i++) {
            tableBodyData[i]['fullName'] =
                <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <small>{`${tableBodyData[i].firstName} ${tableBodyData[i].lastName}`} </small>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <img src={VolumeGrey} />&nbsp;&nbsp;
                        <span className="S-chip" style={styles.sChip}>S</span>
                        <span className="EAL-chip" style={styles.ealChip}>EAL</span>
                    </div>
                </span>

            tableBodyData[i]['Actual'] = <small>{`${Math.round(tableBodyData[i].category[0].actual)}`}</small>
            tableBodyData[i]['Predicted'] = <small>{`${Math.round(tableBodyData[i].category[0].predicted)}`}</small>
            for (let j = 0; j < tableBodyData[i].category[0].description.length; j++) {
                var colorNo = tableBodyData[i].category[0].description[j].markings;
                tableBodyData[i][tableBodyData[i].category[0].description[j].name] = <span style={styles[colorNo]}></span>
            }
          ]

// const data = [
//     {
//         "firstName": <div className="pupil" style={{ display: 'flex', alignItems: 'center' }}>
//             <span>Leslie Alexander</span>
//             <img src={VolumeGrey} alt="vol" style={{ marginRight: '10px' }} />
//             <span className="S-chip" style={styles.sChip}>S </span>
//             <span className="EAL-chip" style={styles.ealChip}>EAL </span>
//         </div>,
//         ele.headerName: < span style = { [styles.percentage, { backgroundColor: '' }]} ></span >,
//         // "Listening": <span style={[styles.percentage, {backgroundColor: 'red'}]}></span>,
//         // "powers": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "negativeNumbers": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "roundingNumbers": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "solvingProblems": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "romanNumerals": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "actual": <span style={[styles.percentage, {backgroundColor: ''}]}></span>,
//         // "predicted": <span style={[styles.percentage, {backgroundColor: ''}]}></span>
//     }
// ];

// const data = tableBodyData.map((ele) => {

//     const row = {
//         fullName: ele.fullName,
//         volumeIcon: <img src={VolumeGrey} alt="vol" style={{ marginRight: '10px' }} />,
//         serviceChildChip: <span className="S-chip" style={styles.sChip}>{ele.serviceChild}</span>,
//         ealChip: <span className="EAL-chip" style={styles.ealChip}>{ele.eal}</span>,
//       };

// return {
//     " ": <div className="pupil" style={{ display: 'flex', alignItems: 'center' }}>
//         <span>{ele.fullName}</span>
//         <img src={VolumeGrey} alt="vol" style={{ marginRight: '10px' }} />
//         <span className="S-chip" style={styles.sChip}>{ele.serviceChild} </span>
//         <span className="EAL-chip" style={styles.ealChip}>{ele.eal} </span>
//     </div>,
//     ele.headerName: <span style={[styles.percentage, {backgroundColor: 'red'}]}></span>
// }
// })


// for(let i=0; i<tableBodyData.length; i++){
//     console.log('asdas', tableBodyData[i]);
//     tableBodyData[i]["Listening"] =<h1>hi</h1> 
// }
const getstudentData = () => {
    const arrayData = [];
    for (let i = 0; i < Items.length; i++) {
        console.log("Items[i].category", Items[i].category[0].actual);
        Items[i]['fullName'] = <small>{`${Items[i].firstName} ${Items[i].lastName}`}</small>

        Items[i]['Actual'] = <small>{`${Items[i].category[0].actual}`}</small>
        Items[i]['Predicted'] = <small>{`${Items[i].category[0].predicted}`}</small>
        for (let j = 0; j < Items[i].category[0].description.length; j++) {
            var colorNo = Items[i].category[0].description[j].markings;
            Items[i][Items[i].category[0].description[j].name] = <span style={styles[colorNo]}></span>
        }
        setStudentData(arrayData);
    }

    useEffect(() => {
        getstudentData()
    }, [tableBodyData])

    arrayData.push(Items[i]);
}

console.log(arrayData);
setStudentData(arrayData);
}
useEffect(() => {
    getstudentData()
}, [])
return (
    <Row>
        <Col>
            {console.log({ studentData })}
            <Table columns={columns} data={studentData && studentData} />
        </Col>
    </Row>
);
}

export default MarkingTable;