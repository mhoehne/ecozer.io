import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CreateAccount } from '../API';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const theme = createTheme();

export default function SignUp() {
  const [cookies, setCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    const emailAddress = data.get('emailAddress')?.toString();

    if (emailAddress === undefined) {
      alert('invalid email address');
      return;
    }

    const isAdmin = false;

    const password = data.get('password')?.toString();

    if (password === undefined) {
      alert('invalid password');
      return;
    }

    const firstName = data.get('firstName')?.toString();

    if (firstName === undefined) {
      alert('invalid First Name');
      return;
    }

    const lastName = data.get('lastName')?.toString();

    if (lastName === undefined) {
      alert('invalid Last Name');
      return;
    }

    const companyName = data.get('companyName')?.toString();

    if (companyName === undefined) {
      alert('invalid Company Name');
      return;
    }

    const lastLogin = 'null';

    const account = {
      _id: undefined,
      emailAddress,
      isAdmin,
      password,
      firstName,
      lastName,
      companyName,
      lastLogin,
    };

    CreateAccount(account)
      .then((account) => {
        // alert('success');
        // success
        setCookie('email', emailAddress, { path: '/' });
        return navigate('/dashboard');
      })
      .catch((msg) => {
        alert('error');
        // error
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            my: 15,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography component="h1" variant="h4">
            Account erstellen
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Erforderliche Felder sind mit * gekennzeichnet
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Vorname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nachname"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="companyName"
                  label="Firmenname"
                  name="companyName"
                  autoComplete="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="emailAddress"
                  label="E-Mail-Adresse"
                  name="emailAddress"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Passwort"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="privacyTerms" color="primary" />}
                  label="Ich habe die Datenschutzrichtlinien gelesen und bin damit einverstanden."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: 'background.paper',
              }}
            >
              Account erstellen
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  {'Du besitzt bereits einen Account?'}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/passwort-vergessen" variant="body2">
                  {'Du hast dein Passwort vergessen?'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
