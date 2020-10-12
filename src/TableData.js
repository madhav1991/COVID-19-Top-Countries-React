import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export function TableData (props){
  const{
    country
  }=props
  return(
      <TableContainer component={Paper}>
      <Table className="table" aria-label={`A table with ${country.Country} COVID-19 details`}>
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">New Confirmed</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">New Recovered</TableCell>
            <TableCell align="right">Total Confirmed</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={country.Country}>
              <TableCell component="th" scope="row">
                {country.Country}
              </TableCell>
              <TableCell align="right">{country.NewConfirmed}</TableCell>
              <TableCell align="right">{country.NewDeaths}</TableCell>
              <TableCell align="right">{country.NewRecovered}</TableCell>
              <TableCell align="right">{country.TotalConfirmed}</TableCell>
              <TableCell align="right">{country.TotalDeaths}</TableCell>
              <TableCell align="right">{country.TotalRecovered}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableData;
