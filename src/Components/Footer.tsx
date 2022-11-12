import * as React from 'react';

import { Box, CardMedia, Container, Grid, Link } from '@mui/material';

import LogoFooter from '../images/S20_HTW_Berlin_Logo_neg_WEISS_RGB.png';
import ContactDialog from './ContactDialog';

{
  /* TODO */
}
{
  /* 
# check new grid v2 component from MUI, could be a better for the footer
  */
}

{
  /* Note: */
}

export default function Footer() {
  // set to false later, just true for testing
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 0, sm: 5 }}
        mt={'auto'}
        bgcolor="text.secondary"
        color="background.paper"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <CardMedia
                component="img"
                sx={{ height: '90px', width: '150px' }}
                alt="htw logo negwhite"
                image={LogoFooter}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="/signupformik" underline="none" color="inherit">
                  SignUpFormikTest
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                <Link
                  onClick={() => {
                    setContactOpen(true);
                  }}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Kontakt
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                <Link href="/glossar" underline="none" color="inherit">
                  Glossar
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} height="2rem" borderBottom="solid 1px" />
            <Grid item xs={2} sm={2}>
              HTW Berlin
            </Grid>
            <Grid item xs={2} sm={2} sx={{ mx: 1 }}>
              <Link href="#" underline="none" color="inherit" sx={{ px: 4 }}>
                Impressum
              </Link>{' '}
              -
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link href="#" underline="none" color="inherit">
                Datenschutzerklärung
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactDialog open={contactOpen} setOpen={setContactOpen} />
    </footer>
  );
}
