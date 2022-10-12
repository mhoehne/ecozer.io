import { useEffect, useState } from 'react';

import {
    Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField
} from '@mui/material';

import { AccountType, GetAccounts, ProductType } from '../API';

{
  /* TODO */
}
{
  /* 
# check new grid v2 component from MUI, could be a better for the footer  
  */
}

{
  /* Note: */
}

interface AssignProductProps {
  Account: AccountType | null;
  Product: ProductType | null;
  open: boolean;
  handleClose: Function;
}

export default function AssignProduct(props: AssignProductProps) {
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  useEffect(() => {
    GetAccounts().then((result) => {
      setAccounts(result.data.accounts);
    });
  }, []);

  const options = accounts.map(({ emailAddress, _id }) => {
    return 'ID: ' + _id + ' ' + 'E-Mail: ' + emailAddress;
  });

  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="responsive-dialog-title">
          {'Benutzerliste'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier kannst du bald ein Produkt einem anderen Benutzer zuweisen.
          </DialogContentText>
          <Autocomplete
            disablePortal
            id="autocomplete-account"
            options={options}
            sx={{ width: 'maxWidth', minHeight: 320, mt: 3 }}
            renderInput={(params) => <TextField {...params} label="Benutzer" />}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => props.handleClose()}>
            Schließen
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.handleClose()}
            autoFocus
            sx={{ color: 'background.paper' }}
          >
            Zuweisen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
