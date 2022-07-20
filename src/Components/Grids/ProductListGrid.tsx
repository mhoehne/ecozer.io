import * as React from 'react';
import {
  DataGrid,
  GridActionsCellItem,
  GridEditRowsModel,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridRowId,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useEffect, useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { GetAccounts, AccountType, PutAccount, DeleteAccount } from '../../API';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import TablePagination from '@mui/material/TablePagination';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

const onRowEdit = (accounts: AccountType[], state: GridEditRowsModel) => {
  for (const _id in state) {
    const accountNewFields: { [key: string]: string } = { _id: _id };

    // Get all new values from `state` into `accountNewFields`
    for (const field in state[_id]) {
      const newValue = state[_id][field].value?.toString();
      if (newValue === undefined) {
        continue;
      }

      accountNewFields[field] = newValue;
    }

    // Find an account inside `accounts` state variable
    let account = accounts.find((acc) => acc._id === parseInt(_id));

    // Did not find an account: should never happen. Send error to console and skip this email to avoid a crash.
    if (account === undefined) {
      console.error(
        `Could not find an account with ID "${_id}". This is most likely a bug.`
      );
      continue;
    }

    // Paste all fields inside `accountNewFields` into `account`
    account = Object.assign(account, accountNewFields);

    // Update `account`
    PutAccount(account)
      .then(() => {
        // TODO: accounts updated successfuly
        // trigger success snackbar alert
      })
      .catch(() => {
        // could not update accounts
        // trigger error snackbar alert
        console.error(`Could not update the account with ID "${_id}"`);
      });
  }
};

export default function ProductListGrid() {
  // pagination
  const [pageSize, setPageSize] = React.useState<number>(20);

  const [accounts, setAccounts] = useState<AccountType[]>([]);

  const deleteUser = useCallback(
    (id) => () => {
      let account = accounts.find((acc) => acc._id === id);
      if (account === undefined) {
        console.error(
          `Could not find an account with ID "${id}". This is most likely a bug.`
        );
        return;
      }
      DeleteAccount(account)
        .then(() => {
          setTimeout(() => {
            setAccounts((prevRows) => prevRows.filter((row) => row._id !== id));
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [accounts]
  );

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      width: 40,
      getActions: (params: { id: string }) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Löschen"
          onClick={deleteUser(params.id)}
          showInMenu
        />,
      ],
    },
    {
      field: '_id',
      headerName: 'AccountID',
      type: 'string',
      width: 100,
      editable: false,
    },
    {
      field: 'product_id',
      headerName: 'ProduktID',
      type: 'string',
      width: 100,
      editable: false,
    },
    {
      field: 'emailAddress',
      headerName: 'E-Mail-Adresse',
      width: 250,
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
      field: 'createdAt',
      headerName: 'erstellt am',
      type: 'dateTime',
      width: 200,
      editable: false,
    },
  ];

  useEffect(() => {
    GetAccounts()
      .then((result) => {
        setAccounts(result.data.accounts);
      })
      .catch();
  }, []);

  return (
    <Box
      px={{ xs: 2, sm: 2 }}
      mx={{ xs: 0, sm: 0 }}
      bgcolor="background.paper"
      color="text.primary"
    >
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid
          rows={accounts}
          columns={columns}
          getRowId={(account) => account._id}
          onEditRowsModelChange={(state) => onRowEdit(accounts, state)}
          disableSelectionOnClick
          density="standard"
          components={{
            Toolbar: CustomToolbar,
          }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[20, 40, 60]}
        />
      </div>
    </Box>
  );
}
