import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { SurveyType } from '../../API';

interface QuestionFormProps {
  surveyForm: SurveyType;
  setSurveyForm: Function;
}

export default function QuestionForm(props: QuestionFormProps) {
  const validationSchema = yup.object({
    emailAddress: yup.string().required('E-Mail-Adresse ist erforderlich.'),
    Q1: yup.string().required('x'),
    Q2: yup.string().required('x'),
    Q3: yup.string().required('x'),
    Q4: yup.string().required('x'),
  });

  const formik = useFormik({
    initialValues: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            required
            id="cardName"
            label="Antwort"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            required
            id="cardName"
            label="Antwort"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            required
            id="cardName"
            label="Antwort"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            required
            id="cardName"
            label="Antwort"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
