import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

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
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

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

  const formik = useFormik({
    initialValues: {
      _id: undefined,
      name: '',
      emailAddress: '',
      issue: '',
      browser: '',
      pageName: '',
      feedbackField: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      CreateReporting(values)
        .then(() => {
          return navigate('/my-products');
        })
        .catch((msg) => {
          alert('error');
        });
    },
  });

  return (
    <>
      <Dialog open={props.open}>
        <DialogTitle>Kontakt</DialogTitle>
        <Box
          component="form"
          noValidate
          justifyContent="center"
          alignItems="center"
          onSubmit={formik.handleSubmit}
        >
          <DialogContent>
            {/* <DialogContentText></DialogContentText> */}

            <TextField
              autoFocus
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              margin="dense"
              label="Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              autoFocus
              required
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              margin="dense"
              label="Email Adresse"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              id="outlined-select-type"
              required
              select
              name="issue"
              value={formik.values.issue}
              onChange={formik.handleChange}
              label="Anliegen"
              fullWidth
              sx={{ mb: 1 }}
              //onChange={handleChange}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              autoFocus
              name="browser"
              value={formik.values.browser}
              onChange={formik.handleChange}
              margin="dense"
              label="Browser"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              autoFocus
              name="pageName"
              value={formik.values.pageName}
              onChange={formik.handleChange}
              margin="dense"
              label="Seitenname"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <TextField
              autoFocus
              name="feedbackField"
              value={formik.values.feedbackField}
              onChange={formik.handleChange}
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
          {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
        </Box>
      </Dialog>
    </>
  );
}
