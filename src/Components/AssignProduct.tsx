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

interface AssignProductProps {}

export default function AssignProduct() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button autoFocus onClick={handleClose}>
            Schließen
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
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
