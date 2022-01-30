import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios, { Axios, AxiosResponse } from 'axios';
import { Box } from '@mui/material';
import { GetAccounts, AccountsType, AccountResultType, PutAccounts } from '../API';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';


const columns: GridColDef[] = [
  { field: '_id',
    headerName: 'ID', 
    type: 'number',
    width: 60,
    editable: false,
  },
  { field: 'admin', 
    headerName: 'Admin', 
    type: '',
    width: 80,
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
    width: 120,
    editable: false,
  },
  {
    field: 'options',
    headerName: 'Optionen',
    width: 100,
    editable: false,
  },
];




export default function DataGridDemo() {

const [account, setAccounts] = useState<AccountsType[]>([])

useEffect(() => {
GetAccounts()
.then((result) => {setAccounts(result.data.accounts)})
.catch();


},[]);




  return (
    <Box
          px={{ xs: 2, sm: 2}}
          py={{ xs: 2, sm: 2}}
          mx={{ xs: 0, sm: 0}}
          my={{ xs: 2, sm: 2}}
          bgcolor="background.paper"
          color="text.primary">
      <div style={{ height: '100vh', width: '100%' }}>
      
        <DataGrid
          rows={account}
          columns={columns}
          getRowId={(account) => account.emailAddress}
        //   onEditRowsModelChange={(state, details) => {
        //     for(const email in state) {
        //       const update: AccountsType = { emailAddress: email};
        //           for (const field in state[email]) {
        //             update[field] = state[email][field].value;
        //       }
        //       const account: AccountsType = update as AccountsType;
        //       PutAccounts(account);
        //       }
        // }}
          pageSize={20}
          rowsPerPageOptions={[20]}
          disableSelectionOnClick
        />

      
      </div>
    </Box>
  );
}
