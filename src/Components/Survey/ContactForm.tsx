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
  // validation for step 1
  const validationSchema = yup.object({
    role: yup.string().required('x'),
    companySize: yup.string().required('x'),
    corporateSector: yup.string().required('x'),
  });

  //formik hook for all values in step 1
  const formik = useFormik({
    initialValues: {
      _id: undefined,
      role: '',
      companySize: '',
      corporateSector: '',
    },
    validationSchema: validationSchema,
    //how to submit just these values?
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
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.errors.role}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="companySize"
            name="companySize"
            label="Unternehmensgröße"
            fullWidth
            variant="outlined"
            value={formik.values.companySize}
            onChange={formik.handleChange}
            error={
              formik.touched.companySize && Boolean(formik.errors.companySize)
            }
            helperText={formik.errors.companySize}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="corporateSector"
            name="corporateSector"
            label="Unternehmensbereich"
            fullWidth
            variant="outlined"
            value={formik.values.corporateSector}
            onChange={formik.handleChange}
            error={
              formik.touched.corporateSector &&
              Boolean(formik.errors.corporateSector)
            }
            helperText={formik.errors.corporateSector}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
