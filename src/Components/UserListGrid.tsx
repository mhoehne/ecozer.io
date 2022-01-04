import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios, { Axios, AxiosResponse } from 'axios';
import { Box } from '@mui/material';
import { GetAccounts, AccountsType, AccountResultType } from '../API';


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




export default function DataGridDemo() {

const [accounts, setAccounts] = useState<AccountsType[]>([])

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
          rows={accounts}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[100]}
          disableSelectionOnClick
        />
      
      </div>
    </Box>
  );
}
