import * as React from 'react';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField
} from '@mui/material';

{
  /* TODO */
}
{
  /* 
  # add formik
  */
}

{
  /* Note: */
}
{
  /* 
  
  */
}

interface ContactDialogProps {
  open: boolean;
  setOpen: Function;
}

export default function ContactDialog(props: ContactDialogProps) {
  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const types = [
    {
      value: 'Bug',
      label: 'Bug melden',
    },
    {
      value: 'Feedback',
      label: 'Feedback geben',
    },
    {
      value: 'Improvement',
      label: 'Verbesserungsvorschlag',
    },
    {
      value: 'Feature Request',
      label: 'Feature anfragen',
    },
  ];

  return (
    <>
      <Dialog open={props.open}>
        <DialogTitle>Kontakt</DialogTitle>
        <Box
          component="form"
          noValidate
          justifyContent="center"
          alignItems="center"
          // onSubmit={handleSubmit}
        >
          <DialogContent>
            {/* <DialogContentText></DialogContentText> */}

            <TextField
              autoFocus
              required
              margin="dense"
              label="Name"
              type="name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              id="outlined-select-type"
              required
              select
              label="Anliegen"
              type="text"
              fullWidth
              value={types}
              sx={{ mb: 1 }}
              onChange={handleChange}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              autoFocus
              margin="dense"
              label="Browser"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Seitenname"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Beschreibung"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={8}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                props.setOpen(false);
              }}
            >
              zurück
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                props.setOpen(false);
              }}
              sx={{ color: 'background.paper' }}
            >
              Senden
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
