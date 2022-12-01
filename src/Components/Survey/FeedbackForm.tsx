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
  // validation for step 1
  const validationSchema = yup.object({
    feedbackField: yup.string().required('x'),
  });

  //formik hook for all values in step 3
  const formik = useFormik({
    initialValues: {
      feedbackField: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
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
            value={formik.values.feedbackField}
            onChange={formik.handleChange}
            error={
              formik.touched.feedbackField &&
              Boolean(formik.errors.feedbackField)
            }
            helperText={formik.errors.feedbackField}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
