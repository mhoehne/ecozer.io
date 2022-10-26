import * as React from 'react';

import { Grid, TextField } from '@mui/material';

export default function FeedbackForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={12}>
          <TextField
            multiline
            rows={10}
            id="cardName"
            label="Feld für sonstiges Feedback oder Wünsche"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
