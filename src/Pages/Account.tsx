import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Button, Container, createTheme, Grid, TextField, Typography } from '@mui/material';

import { AccountType } from '../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface AccountProps {
  account: AccountType | null;
}

const theme = createTheme();

export default function Account(props: AccountProps) {
  if (props.account?._id === undefined) {
    alert('Error: Account ID is not expected to be undefined');
    return null;
  }

  // const [account, setAccount] = useState<AccountType>();
  // useEffect(() => {
  //   getAccount(params.id ?? '-1').then((result) => {
  //     setAccount(result.data);
  //   });
  // }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const params = useParams();

  return (
    <>
      {/*CHANGE ACCOUNT DETAILS FORM*/}

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 15,
            mb: 5,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography component="h1" variant="h5">
            Account
          </Typography>
          <Formik initialValues={{}} onSubmit={() => {}}>
            {({ values, errors, touched }) => (
              <Form>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        autoComplete="given-name"
                        name="Vorname"
                        required
                        fullWidth
                        id="firstName"
                        label="Vorname"
                        value={props.account?.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="lastName"
                        label="Nachname"
                        value={props.account?.lastName}
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="email"
                        label="E-Mail-Adresse"
                        value={props.account?.emailAddress}
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
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
                    SPEICHERN
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </Box>
                <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>

      {/*CHANGE PASSWORD FORM*/}
      <Container component="main" maxWidth="xs" sx={{ mt: 0 }}>
        <Box
          sx={{
            mb: 15,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <Typography component="h1" variant="h5">
            Passwort ändern
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="altes Passwort"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="neues Passwort"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
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
              SPEICHERN
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
