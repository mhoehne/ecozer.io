import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField
} from '@mui/material';

import { CreateReporting } from '../API';

interface ContactDialogProps {
  open: boolean;
  setOpen: Function;
}

export default function ContactDialog(props: ContactDialogProps) {
  const validationSchema = yup.object({
    emailAddress: yup
      .string()
      .email('Bitte vollständige E-Mail-Adresse eingeben!')
      .required('E-Mail-Adresse ist erforderlich.'),
    name: yup
      .string()
      .min(3, 'Name should be of minimum 3 characters length')
      .required('Name ist erforderlich.'),
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
    {
      value: 'Request new password',
      label: 'Passwort vergessen',
    },
  ];
  const navigate = useNavigate();

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
      CreateReporting(values)
        .then(() => {
          props.setOpen(false);
          formik.resetForm();
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
            <TextField
              autoFocus
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.errors.name}
              margin="dense"
              label="Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              name="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={formik.errors.emailAddress}
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
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
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
