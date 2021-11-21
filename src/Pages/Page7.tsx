import Navigation from '../Components/Navigation';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';


function createProp(
    name: string,
    email: string,
    company: string,
    last_login: number,
  ) {

    return { name, email, company, last_login};
  }
  
  const rows = [
    createProp('Martin H.', 'martin.h@props.com', 'Martin Global Ltd.', 160),
    createProp('Nicholas d.S.', 'nickolas.d.s@props.com', 'National Nicholas Foundation', 123),
    createProp('John D.', 'johnny_d@props.com', 'Johnny Doe GmbH', 143),
    createProp('Chuck N.', 'chucky@props.com', 'C&N LLC ', 176),
    createProp('Luke S.', 'luckylukeskyw3lk3r8362@props.com', 'Luke & Son Whaling Corp.', 345),
    createProp('Clark K.', 'superman@props.com', 'Daily Planet LLC', 765),
    createProp('Peter P.', 'parkerpete@props.com', 'Spider Corp.', 946),
    createProp('Bruce W. ', 'iambatman@props.com', 'Wayne Enterprise', 824),
  ];

export default function Page7() {


  return (

      <>
      <Navigation/>
      <Container>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">E-Mail</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="right">last login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.company}</TableCell>
              <TableCell align="right">{row.last_login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
        
      </>
  );
}