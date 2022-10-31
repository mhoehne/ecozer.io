import * as React from 'react';

import {
    Box, Button, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, Grid, Link, MenuItem, TextField
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

const types = [
  {
    value: 'Bug',
    label: 'Bug melden',
  },
  {
    value: 'Feedback',
    label: 'Feedback geben',
  },
  {
    value: 'Improvement',
    label: 'Verbesserungsvorschlag',
  },
  {
    value: 'Feature Request',
    label: 'Feature anfragen',
  },
];

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
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
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Kontakt
                </Link>
              </Box>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Kontakt</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Name"
                    type="name"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    id="outlined-select-type"
                    required
                    select
                    label="Anliegen"
                    type="text"
                    fullWidth
                    value={type}
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                  >
                    {types.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Browser"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Seitenname"
                    type="text"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Beschreibung"
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
