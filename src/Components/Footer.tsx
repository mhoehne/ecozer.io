import * as React from 'react';

import { Box, CardMedia, Container, Grid, Link } from '@mui/material';

import LogoFooter from '../images/S20_HTW_Berlin_Logo_neg_WEISS_RGB.png';
import ContactDialog from './ContactDialog';

export default function Footer() {
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
                
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box>
                
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
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} height="2rem" borderBottom="solid 1px" />
            <Grid item xs={2} sm={2}>
              <Link href="https://www.htw-berlin.de/" underline="none" color="inherit">
                HTW Berlin
                </Link>
            </Grid>
            <Grid item xs={2} sm={2} sx={{ mx: 1 }}>
              <Link href="https://www.htw-berlin.de/impressum/" underline="none" color="inherit" sx={{ px: 4 }}>
                Impressum
              </Link>{' '}
              -
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link href="https://www.htw-berlin.de/datenschutz/" underline="none" color="inherit">
                Datenschutzhinweise
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactDialog open={contactOpen} setOpen={setContactOpen} />
    </footer>
  );
}
