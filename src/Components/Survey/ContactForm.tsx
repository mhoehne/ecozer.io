import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SurveyType } from '../../API';

interface ContactFormProps {
  surveyForm: SurveyType;
  setSurveyForm: Function;
}

export default function ContactForm(props: ContactFormProps) {
  const validationSchema = yup.object({
    emailAddress: yup.string().required('E-Mail-Adresse ist erforderlich.'),
    role: yup.string().required('x'),
    companySize: yup.string().required('x'),
    corporateSector: yup.string().required('x'),
  });

  const formik = useFormik({
    initialValues: {
      _id: undefined,
      role: '',
      companySize: '',
      corporateSector: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <TextField
            id="role"
            name="role"
            label="Rolle im Unternehmen"
            fullWidth
            variant="outlined"
            // value={formik.values.name}
            //   onChange={formik.handleChange}
            //   error={formik.touched.name && Boolean(formik.errors.name)}
            //   helperText={formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="companySize"
            name="companySize"
            label="Unternehmensgröße"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="corporateSector"
            name="corporateSector"
            label="Unternehmensbereich"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
