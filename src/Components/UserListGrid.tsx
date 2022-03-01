import { 
  DataGrid,
  GridActionsCellItem,
  GridEditRowsModel, 
  GridToolbarContainer,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
  useEffect, 
  useState, 
  useCallback 
} from 'react';
import { Box } from '@mui/material';
import { 
  GetAccounts, 
  AccountsType, 
  PutAccounts, 
  DeleteAccount 
} from '../API';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

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

  const deleteUser = useCallback(
    (id) => () => {
      let account = accounts.find((acc) => acc.emailAddress === id);
      if (account === undefined) {
        console.error(`Could not find an account of email "${id}". This is most likely a bug.`);
        return
      }
      DeleteAccount(account)
      .then(() => {
        setTimeout(() => {
          setAccounts((prevRows) => prevRows.filter((row) => row.emailAddress !== id));
        });
      })
      .catch((e) => {
        console.log(e);
      });
      
    },
    [accounts],
  );

  // const toggleAdmin = React.useCallback(
  //   (id: GridRowId) => () => {
  //     setAccounts((prevRows) =>
  //       prevRows.map((row) =>
  //         row.emailAddress === id ? { ...row, isAdmin: !row.isAdmin } : row,
  //       ),
  //     );
  //   },
  //   [],
  // );

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
      getActions: (params:{id: string}) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
          showInMenu
        />,
      
      
      // field: 'actions',
      // type: 'actions',
      // <GridActionsCellItem
      //   icon={<SecurityIcon />}
      //   label="Toggle Admin"
      //   onClick={toggleAdmin(params.id)}
      //   showInMenu
      // />,

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
    { field: 'admin', 
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
    { field: '_id',
      headerName: 'ID', 
      type: 'string',
      width: 220,
      editable: false,
    },
  ];

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
          density="standard"
          components={{
            Toolbar: CustomToolbar, }}
        />
      </div>
    </Box>
  );
}
