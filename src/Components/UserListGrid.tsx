import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const columns: GridColDef[] = [
  { field: 'id', 
    headerName: 'ID', 
    type: 'number',
    width: 60,
    editable: false,
  },
  {
    field: 'emailAddress',
    headerName: 'E-Mail-Adresse',
    width: 300,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'Vorname',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Nachname',
    width: 150,
    editable: true,
  },
  {
    field: 'companyName',
    headerName: 'Unternehmen',
    width: 200,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'letzter Login',
    width: 200,
    editable: false,
  },
];

export interface Account {
  account_id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
}

const rows = [
  { id: 1, emailAddress: 'atryrtytry@uahsduhs.de', lastName: 'Snow', firstName: 'Jon', companyName: 'JS GmbH', lastLogin: '00-00-2021' },
  { id: 2, emailAddress: 'uioyuddf@uahsduhs.de', lastName: 'Lannister', firstName: 'Cersei', companyName: 'CL GmbH', lastLogin: '00-00-2021'},
  { id: 3, emailAddress: 'asdfgdfgfdg@uahsduhs.de', lastName: 'Lannister', firstName: 'Jaime', companyName: 'JL GmbH', lastLogin: '00-00-2021'},
  { id: 4, emailAddress: 'asdgfd564@uahsduhs.de', lastName: 'Stark', firstName: 'Arya', companyName: 'AS GmbH', lastLogin: '00-00-2021'},
  { id: 5, emailAddress: 'nvbdfgdg53@uahsduhs.de', lastName: 'Targaryen', firstName: 'Daenerys', companyName: 'TD GmbH', lastLogin: '00-00-2021'},
  { id: 6, emailAddress: 'ytuert5654@uahsduhs.de', lastName: 'Melisandre', firstName: null, companyName: 'M GmbH', lastLogin: '00-00-2021'},
  { id: 7, emailAddress: 'sdgdf564645@uahsduhs.de', lastName: 'Clifford', firstName: 'Ferrara', companyName: 'FC GmbH', lastLogin: '00-00-2021'},
  { id: 8, emailAddress: 'ahjghkrt452@uahsduhs.de', lastName: 'Frances', firstName: 'Rossini', companyName: 'RF GmbH', lastLogin: '00-00-2021'},
  { id: 9, emailAddress: 'iuytyutyr@uahsduhs.de', lastName: 'Roxie', firstName: 'Harvey', companyName: 'HR GmbH', lastLogin: '00-00-2021' },
  { id: 10, emailAddress: 'asuidhud@uahsduhs.de', firstName: 'Pablo', lastName: 'Testobar', companyName: 'Pablo import export GmbH', lastLogin: '00-00-2021'},
];

export default function DataGridDemo() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
      />
    </div>
  );
}
