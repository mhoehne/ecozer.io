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
import { GetAccounts, AccountType, PutAccount, DeleteAccount } from '../API';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import TablePagination from '@mui/material/TablePagination';

function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

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
    let account = accounts.find((acc) => acc._id === _id);

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

export default function DataGridDemo() {
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

  const toggleAdmin = useCallback(
    (id: GridRowId) => () => {
      for (const account of accounts) {
        if (account._id == id) {
          const admin = {
            ...account,
            isAdmin: !account.isAdmin,
          };
          PutAccount(admin)
            .then(() => {
              setAccounts((prevRows) => {
                return prevRows.map((row) =>
                  row._id === id ? { ...row, isAdmin: !row.isAdmin } : row
                );
              });
            })
            .catch((e) => {
              console.log(e);
            });
        }
      }
    },
    [accounts]
  );

  // const resetPassword = React.useCallback(
  //   (id: GridRowId) => () => {
  //     setAccounts((prevRows) =>
  //       prevRows.map((row) =>
  //         row.emailAddress === id ? { ...row, isAdmin: !row.isAdmin } : row,
  //       ),
  //     );
  //   },
  //   [],
  // );

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      getActions: (params: { id: string }) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Löschen"
          onClick={deleteUser(params.id)}
          showInMenu
        />,

        <GridActionsCellItem
          icon={<ChangeCircleIcon />}
          label="Admin/Benutzer"
          onClick={toggleAdmin(params.id)}
          showInMenu
        />,

        // field: 'actions',
        // type: 'actions',
        // <GridActionsCellItem
        //   icon={<SecurityIcon />}
        //   label="reset Password"
        //   onClick={resetPassword(params.id)}
        //   showInMenu
        // />,
      ],
    },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      type: 'boolean',
      width: 70,
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
    {
      field: '_id',
      headerName: 'ID',
      type: 'string',
      width: 220,
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
      py={{ xs: 2, sm: 2 }}
      mx={{ xs: 0, sm: 0 }}
      my={{ xs: 2, sm: 2 }}
      bgcolor="background.paper"
      color="text.primary"
    >
      <div style={{ height: '100vh', width: '100%' }}>
        <DataGrid
          rows={accounts}
          columns={columns}
          getRowId={(account) => account._id}
          onEditRowsModelChange={(state) => onRowEdit(accounts, state)}
          pageSize={20}
          rowsPerPageOptions={[20]}
          disableSelectionOnClick
          density="standard"
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </Box>
  );
}
