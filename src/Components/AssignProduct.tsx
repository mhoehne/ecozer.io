import * as React from 'react';
import {
  Autocomplete,
  Container,
  Button,
  Grid,
  Box,
  Link,
  CardMedia,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { AccountType, ProductType, GetAccounts } from '../API';
import { useState, useEffect } from 'react';

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

  const options = accounts.map(({ emailAddress }) => {
    return {
      text: emailAddress,
    };
  });

  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="responsive-dialog-title"
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
            options={options.sort((a, b) => -b.text.localeCompare(a.text))}
            sx={{ width: 300 }}
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
