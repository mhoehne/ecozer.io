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
  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

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

  // const WithMaterialUI = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: 'foobar@example.com',
  //       password: 'foobar',
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      issue: '',
      browser: '',
      pageName: '',
      feedbackField: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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

        <Box
          component="form"
          noValidate
          justifyContent="center"
          alignItems="center"
          // onSubmit={handleSubmit}
        >
          <form onSubmit={formik.handleSubmit}>
            <DialogContent>
              {/* <DialogContentText></DialogContentText> */}

              <TextField
                autoFocus
                required
                id="name"
                margin="dense"
                label="Name"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                autoFocus
                required
                id="email"
                margin="dense"
                label="Email Adresse"
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="outlined-select-type"
                required
                select
                // id="issue"
                label="Anliegen"
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
                id="browser"
                margin="dense"
                label="Browser"
                fullWidth
                variant="outlined"
                sx={{ mb: 1 }}
                value={formik.values.browser}
                onChange={formik.handleChange}
                error={formik.touched.browser && Boolean(formik.errors.browser)}
                helperText={formik.touched.browser && formik.errors.browser}
              />
              <TextField
                autoFocus
                id="pageName"
                margin="dense"
                label="Seitenname"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ mb: 1 }}
                value={formik.values.pageName}
                onChange={formik.handleChange}
                error={
                  formik.touched.pageName && Boolean(formik.errors.pageName)
                }
                helperText={formik.touched.pageName && formik.errors.pageName}
              />
              <TextField
                autoFocus
                id="feedbackField"
                margin="dense"
                label="Beschreibung"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={8}
                value={formik.values.feedbackField}
                onChange={formik.handleChange}
                error={
                  formik.touched.feedbackField &&
                  Boolean(formik.errors.feedbackField)
                }
                helperText={
                  formik.touched.feedbackField && formik.errors.feedbackField
                }
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
          </form>
          {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
        </Box>
      </Dialog>
    </>
  );
}
