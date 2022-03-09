import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import 
{ 
  createTheme, 
  ThemeProvider 
} from '@mui/material/styles';
import { 
  checkAuthentication
} from '../API';
import {
  useNavigate,
  NavigateFunction
} from "react-router-dom";


const theme = createTheme();
async function authenticate(emailaddress: string, password: string, navigate: NavigateFunction) {
  // send formdata to API 
  
  try {
    const response = await checkAuthentication(emailaddress, password)
  // send false to the AppBarTop IsLoggedOut function
    if (response.data === "OK") {

      // create coookie
      return navigate('/dashboard');

    } 
  } catch(e) {
      console.log(e);
  }
}

export default function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailaddress = data.get('email')
    const password = data.get('password')
    if (emailaddress != null && password != null) {
      await authenticate(emailaddress.toString(), password.toString(), navigate)
    } else {
      alert("something went wrong");
    }



  };

  

  return (

      <>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail-Adresse"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zugang merken"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Anmelden
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Passwort vergessen?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Haben Sie keinen Account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      </>
  );
}