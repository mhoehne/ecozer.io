import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';

import { Grid, TextField } from '@mui/material';

interface FeedbackFormProps {
  useFormik: Function;
}

export default function FeedbackForm(props: FeedbackFormProps) {
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
