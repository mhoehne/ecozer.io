import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function ContactForm() {
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
            label="Unternehmensgröße"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
