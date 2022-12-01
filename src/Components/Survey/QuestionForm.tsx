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
  // validation for step 2
  const validationSchema = yup.object({
    Q1: yup.string().required('x'),
    Q2: yup.string().required('x'),
    Q3: yup.string().required('x'),
    Q4: yup.string().required('x'),
  });

  //formik hook for all values in step 2
  const formik = useFormik({
    initialValues: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            id="Q1"
            label="Antwort"
            fullWidth
            variant="outlined"
            value={formik.values.Q1}
            onChange={formik.handleChange}
            error={formik.touched.Q1 && Boolean(formik.errors.Q1)}
            helperText={formik.errors.Q1}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            id="Q2"
            label="Antwort"
            fullWidth
            variant="outlined"
            value={formik.values.Q2}
            onChange={formik.handleChange}
            error={formik.touched.Q2 && Boolean(formik.errors.Q2)}
            helperText={formik.errors.Q2}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            id="Q3"
            label="Antwort"
            fullWidth
            variant="outlined"
            value={formik.values.Q3}
            onChange={formik.handleChange}
            error={formik.touched.Q3 && Boolean(formik.errors.Q3)}
            helperText={formik.errors.Q3}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography gutterBottom>Frage text hier.</Typography>
          <TextField
            id="Q4"
            label="Antwort"
            fullWidth
            variant="outlined"
            value={formik.values.Q4}
            onChange={formik.handleChange}
            error={formik.touched.Q4 && Boolean(formik.errors.Q4)}
            helperText={formik.errors.Q4}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
