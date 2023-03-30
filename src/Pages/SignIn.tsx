import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { checkAuthenticate } from '../API';
import ContactDialog from '../Components/ContactDialog';

// TODO:
// - negative response when email or password is wrong, show error message!

export async function authenticate(
  emailaddress: string,
  password: string,
  navigate: NavigateFunction,
  setCookie: Function,
  setAlert: Function
) {
  try {
    const response = await checkAuthenticate(emailaddress, password);
    if (response.status === 200) {
      setCookie('token', response.data, { path: '/' });
      return navigate('/my-products');
    }
    console.log(response)
  } catch (e) {
    // alert(e);
    setAlert(true);
    console.log(e);
  }
}

export default function SignIn() {
  const [showAlert, setAlert] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [cookies, setCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailaddress = data.get('email');
    const password = data.get('password');
    if (emailaddress != null && password != null) {
      await authenticate(
        emailaddress.toString(),
        password.toString(),
        navigate,
        setCookie,
        setAlert
      );
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <Snackbar open={showAlert} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          E-Mail-Adresse oder Passwort falsch!
        </Alert>
      </Snackbar>
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
            Login
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Erforderliche Felder sind mit * gekennzeichnet
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="E-Mail-Adresse"
              autoComplete="email"
              autoFocus
              variant="outlined"
              color="primary"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Passwort"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              color="primary"
            />
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
              Anmelden
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {'Hast du noch keinen Account?'}
                </Link>
              </Grid>
              <Grid item>
                <Link 
                  onClick={() => {
                    setContactOpen(true);
                  }} 
                  href="#" variant="body2">
                  {'Hast du dein Passwort vergessen?'}
                </Link>
                <ContactDialog open={contactOpen} setOpen={setContactOpen} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
