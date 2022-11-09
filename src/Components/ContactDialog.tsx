import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField
} from '@mui/material';

import { CreateReporting, ReportingType } from '../API';

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
  const navigate = useNavigate();
  const [reporting, setReporting] = React.useState<ReportingType>({
    _id: undefined,
    name: '',
    emailAddress: '',
    issue: '',
    browser: '',
    pageName: '',
    feedbackField: '',
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // onSubmit call createProduct
    CreateReporting(reporting)
      .then((reporting) => {
        return navigate('/my-products');
      })
      .catch((msg) => {
        alert('error');
      });
  };

  return (
    <>
      <Dialog open={props.open}>
        <DialogTitle>Kontakt</DialogTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
            issue: '',
            browser: '',
            pageName: '',
            feedbackField: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
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
        </Formik>
      </Dialog>
    </>
  );
}
