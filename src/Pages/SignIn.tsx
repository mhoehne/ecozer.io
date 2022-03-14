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
import { 
  checkAuthentication
} from '../API';
import {
  useNavigate,
  NavigateFunction
} from "react-router-dom";


async function authenticate(emailaddress: string, password: string, navigate: NavigateFunction) {
  // send formdata to API 
  
  try {
    const response = await checkAuthentication(emailaddress, password)
    if (response.data === "OK") {

      // create coookie to pass boolean to AppBarTop IsLoggedOut function
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
      <Container 
        component="main" 
        maxWidth="xs" 
        >
        <Box
          sx={{
            my: 15,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper'
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Anmeldedaten merken"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2,
                color: 'background.paper'
               }}
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
      </>
  );
}