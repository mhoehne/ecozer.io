import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';

import { Grid, TextField } from '@mui/material';

import { SurveyType } from '../../API';

interface FeedbackFormProps {
  surveyForm: SurveyType;
  setSurveyForm: Function;
}

export default function FeedbackForm(props: FeedbackFormProps) {
  const validationSchema = yup.object({
    emailAddress: yup.string().required('E-Mail-Adresse ist erforderlich.'),
    feedbackField: yup.string().required('x'),
  });

  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <TextField
            multiline
            rows={10}
            id="feedbackField"
            label="Feld für sonstiges Feedback oder Wünsche"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
