import { DataGrid, GridColDef, GridEditRowsModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { GetAccounts, AccountsType, PutAccounts } from '../API';

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

const onRowEdit = (accounts: AccountsType[], state: GridEditRowsModel) => {
  for(const email in state) {
    const accountNewFields: { [key:string]: string } = { emailAddress: email };

    // Get all new values from `state` into `accountNewFields`
    for (const field in state[email]) {
      const newValue = state[email][field].value?.toString();
      if (newValue === undefined) {
        continue;
      }

      accountNewFields[field] = newValue;
    }

    // Find account inside `accounts` state variable
    let account = accounts.find((acc) => acc.emailAddress === email);

    // Did not find account: should never happen. Send error to console and skip this email to avoid a crash.
    if (account === undefined) {
      console.error(`Could not find an account of email "${email}". This is most likely a bug.`);
      continue;
    }

    // Paste all fields inside `accountNewFields` into `account`
    account = Object.assign(account, accountNewFields);

    // Update `account`
    PutAccounts(account)
      .then(() => {
        // TODO: accounts updated successfuly
      })
      .catch(() => {
        // TODO: could not update accounts
      });
  }
};

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
      color="text.primary"
    >
      <div style={{ height: '100vh', width: '100%' }}>
        <DataGrid
          rows={accounts}
          columns={columns}
          getRowId={(account) => account.emailAddress}
          onEditRowsModelChange={(state) => onRowEdit(accounts, state)}
          pageSize={20}
          rowsPerPageOptions={[20]}
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
}
