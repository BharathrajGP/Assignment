import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { gridDateTimeFormatter } from '@mui/x-data-grid';
import '../assets/stlyes/Table.css';

const rows = [
  {
    ClassName: "Timber wolf",
    Subject: "Lesley",
    ObjectiveCategory: "Schofield",
    Objective: "It",
    SubmittedOn: "2022-11-06 18:54:57",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Bohor reedbuck",
    Subject: "Rennie",
    ObjectiveCategory: "Stendell",
    Objective: "Wrapsafe",
    SubmittedOn: "2023-02-06 14:20:31",
    // Delete:<img src={deleteicon} alt='delete' style={{width:24,height:24}}/>
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Andean goose",
    Subject: "Jocelin",
    ObjectiveCategory: "Bloomfield",
    Objective: "Wrapsafe",
    SubmittedOn: "2023-01-19 21:16:56",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "White-necked raven",
    Subject: "Daryn",
    ObjectiveCategory: "Daish",
    Objective: "Quo Lux",
    SubmittedOn: "2023-06-21 09:15:04",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Seal, harbor",
    Subject: "Melisande",
    ObjectiveCategory: "Scrivinor",
    Objective: "Alphazap",
    SubmittedOn: "2022-12-18 20:55:26",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Little brown bat",
    Subject: "Delores",
    ObjectiveCategory: "Robertet",
    Objective: "Ronstring",
    SubmittedOn: "2022-09-22 01:29:37",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Pintail, white-cheeked",
    Subject: "Harwilll",
    ObjectiveCategory: "Stroyan",
    Objective: "Cardify",
    SubmittedOn: "2022-12-21 16:54:58",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Spider, wolf",
    Subject: "Maegan",
    ObjectiveCategory: "Westwater",
    Objective: "Subin",
    SubmittedOn: "2022-12-25 00:07:33",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Spur-winged goose",
    Subject: "Gilemette",
    ObjectiveCategory: "Kerwen",
    Objective: "Veribet",
    SubmittedOn: "2022-08-22 20:04:39",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Asian lion",
    Subject: "Roselin",
    ObjectiveCategory: "Beincken",
    Objective: "Zamit",
    SubmittedOn: "2022-12-16 16:28:28",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Australian pelican",
    Subject: "Giulio",
    ObjectiveCategory: "Martschke",
    Objective: "Tres-Zap",
    SubmittedOn: "2022-10-10 03:40:06",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Grey-footed squirrel",
    Subject: "Codee",
    ObjectiveCategory: "Wakely",
    Objective: "Stringtough",
    SubmittedOn: "2022-11-24 03:15:00",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Eagle, african fish",
    Subject: "Nata",
    ObjectiveCategory: "Snowling",
    Objective: "Subin",
    SubmittedOn: "2022-07-17 20:05:15",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Canadian river otter",
    Subject: "Milton",
    ObjectiveCategory: "Braniff",
    Objective: "Regrant",
    SubmittedOn: "2022-12-04 23:29:18",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Cat, ringtail",
    Subject: "Pate",
    ObjectiveCategory: "Burress",
    Objective: "It",
    SubmittedOn: "2022-09-18 14:54:24",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
  {
    ClassName: "Topi",
    Subject: "Tabby",
    ObjectiveCategory: "Kuhn",
    Objective: "Biodex",
    SubmittedOn: "2022-10-29 20:56:38",
    Delete:<span class="material-icons red-color" style={{color:'red'}}>delete </span>
  },
];

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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
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

const headCells = [
  {
    id: 'ClassName',
    height1:true,
    numeric: false,
    disablePadding: true,
    cellWidth:true,
    label: 'Class Name',
  },
  {
    id: 'Subject',
    numeric: false,
    height1:true,
    disablePadding: true,
    cellWidth:true,
    label: 'Subject',
  },
  {
    id: 'ObjectiveCategory',
    numeric: false,
    height1:true,
    disablePadding: true,
    cellWidth:true,
    label: 'Objective Category',
  },
  {
    id: 'Objective',
    numeric: false,
    height1:true,
    disablePadding: true,
    cellWidth:true,
    label: 'Objective',
  },
  {
    id: 'SubmittedOn',
    numeric: false,
    height1:true,
    typeof: gridDateTimeFormatter,
    disablePadding: true,
    cellWidth:true,
    label: 'Submitted On',
  },
  {
    id: 'delete',
    numeric: false,
    height1:true,
    disablePadding: false,
    cellWidth:false,
    label: '',
  },
];

function EnhancedTableHead() {

  return (
    <TableHead className='head'>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? '6px 24px 6px 16px' : '6px 16px 6px 16px'}
            width={headCell.cellWidth? '215px':'64px'}
            style={{fontWeight:'bold',padding:'6px 24px 6px 16px'}}
            
            className='headDecoration'
          >
              {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator()).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '1142px' }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table
            // sx={{ minWidth: 750 }}
            // aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                // const isItemSelected = isSelected(row.name);
                ;

                return (
                  <TableRow
                  className='head'>
                    <TableCell
                      component="th"
                      scope="row" 
                    className='dataDecoration'>
                      {row.ClassName}
                    </TableCell>
                    <TableCell align="left" className='dataDecoration'>{row.Subject}</TableCell>
                    <TableCell align="left" className='dataDecoration'>{row.ObjectiveCategory}</TableCell>
                    <TableCell align="left" className='dataDecoration'>{row.Objective}</TableCell>
                    <TableCell align="left" className='dataDecoration'>{row.SubmittedOn}</TableCell>
                    <TableCell align="left" className='dataDecoration'>{row.Delete}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination className='footer'
          rowsPerPageOptions={[10,20,30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}        
        />
      </Paper>
      
    </Box>
  );
}