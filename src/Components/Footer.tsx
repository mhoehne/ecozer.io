import * as React from 'react';
import {
  Container,
  Button,
  Grid,
  Box,
  Link,
  CardMedia,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import LogoFooter from '../images/S20_HTW_Berlin_Logo_neg_WEISS_RGB.png';

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                  onClick={handleClickOpen}
                  underline="none"
                  color="inherit"
                >
                  Bug melden
                </Link>
              </Box>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Bug melden</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Browser"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Seitenname"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Schritte zum Reproduzieren"
                    type="text"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={8}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>zurück</Button>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{ color: 'background.paper' }}
                  >
                    Senden
                  </Button>
                </DialogActions>
              </Dialog>
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
    </footer>
  );
}
