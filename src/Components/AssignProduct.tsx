import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField
} from '@mui/material';

import { AccountType, GetAccounts, getProduct, ProductType, PutProducts } from '../API';

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
            // call API to update the product.account_ID and then close it
            onClick={() => {
              const params = useParams();

              const [product, setProduct] = useState<ProductType>();
              useEffect(() => {
                getProduct(params.id ?? '-1').then((result) => {
                  setProduct(result.data);
                  // AssignProduct(product?.account_id);
// error: const product: ProductType | undefined
// Argument of type 'number | undefined' is not assignable to parameter of type 'AssignProductProps'.
// Type 'undefined' is not assignable to type 'AssignProductProps'.
                });
              }, []);
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
