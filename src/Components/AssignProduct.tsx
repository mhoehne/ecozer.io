import * as React from 'react';
import {
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
import { AccountType, ProductType } from '../API';

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
