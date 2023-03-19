import react from 'react';

import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function PageNotFound() {
  return (
    <>
      <Container component="main" maxWidth="md" >
        <Box
          sx={{
            mt: 20,
            mb: 20,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} textAlign="center">
                  <Typography variant="h1">404</Typography>
                </Grid>
                <Grid item xs={12} sm={12} textAlign="center">
                  <Typography variant="h3">OOPS! Leider können wir diese Seite nicht finden. Auf der Homepage gibt es viel zu entdecken.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} textAlign="center">
                  <Button variant="contained" size="large" color="secondary" sx={{m:2}}>Starseite</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
