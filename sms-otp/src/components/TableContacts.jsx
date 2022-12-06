import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 90 },
  { id: 'lastName', label: 'Last Name', minWidth: 50 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 50,
    align: 'right',
  }
];

const rows = [
  {
    firstName: "",
    lastName: "",
    phone: ""
  }
];

export default function ContactsTable({handleRowClick, users}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [row, setRow] = React.useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    setRow(users);
  },[row])

  return (
    <Paper sx={{ width: '100%',minWidth: 525}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 600 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.length ? row
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover 
                  tabIndex={-1} 
                  key={i} 
                  style={{ cursor: "pointer"}}
                  >
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                        key={i} 
                        align={column.align}
                        onClick = {(e) => handleRowClick(row)}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              }): <></>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
