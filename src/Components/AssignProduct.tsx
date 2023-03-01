import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField
} from '@mui/material';

import {
    AccountType, AssignProduct as assignProduct, GetAccounts, getProduct, ProductType, PutProducts
} from '../API';
import ProductDetail from '../Pages/ProductDetail';

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
    return {label: 'E-Mail: ' + emailAddress, ID: _id}
  });

  const [newAccountID, setNewAccountID] = useState<number>();
    
  

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
            Produkt einem anderen Benutzer zuweisen.
          </DialogContentText>
          <Autocomplete
            disablePortal
            id="autocomplete-account"
            options={options}
            onChange={(e, newValue) => {
              setNewAccountID(newValue?.ID)
            }
            }
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
            // call API to update the product.account_ID and then close it
            onClick={() => {
              if (props.Product === null){
                return
              }
              if (newAccountID === undefined) {
                return
              }
              props.Product.account_id = newAccountID;
              assignProduct(props.Product);
              props.handleClose();
              
            }} 
            
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
