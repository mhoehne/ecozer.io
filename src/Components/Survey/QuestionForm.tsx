import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function QuestionForm() {
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
