import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { checkAuthentication } from '../API';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

// TODO:
// - negative response when email or password is wrong, show error message!

export async function authenticate(
  emailaddress: string,
  password: string,
  navigate: NavigateFunction,
  setCookie: Function,
  setAlert: Function
) {
  // send form data to API

  try {
    const response = await checkAuthentication(emailaddress, password);
    if (response.data === 'OK') {
      // create cookie to pass boolean to AppBarTop IsLoggedOut function

      setCookie('email', emailaddress, { path: '/' });
      return navigate('/my-products');
    }
  } catch (e) {
    // alert(e);
    setAlert(true);
    console.log(e);
  }
}

export default function SignIn() {
  const [showAlert, setAlert] = useState(false);
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
      // alert('something went wrong');
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Anmeldedaten merken"
            /> */}
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
                <Link href="#" variant="body2">
                  {'Hast du dein Passwort vergessen?'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
