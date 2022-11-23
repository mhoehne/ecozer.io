import { Field, Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
    Box, Button, CardContent, Checkbox, Container, FormControlLabel, Grid, Link, TextField,
    Typography
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { CreateAccount } from '../API';
import Account from './Account';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

const theme = createTheme();

export default function SignUpFormik() {
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
    const acceptedTermAndConditions = false;

    const account = {
      _id: undefined,
      emailAddress,
      isAdmin,
      password,
      firstName,
      lastName,
      companyName,
      lastLogin,
      acceptedTermAndConditions,
    };

    CreateAccount(account)
      .then((account) => {
        // alert('success');
        // success
        setCookie('email', emailAddress, { path: '/' });
        return navigate('/my-products');
      })
      .catch((msg) => {
        alert('error');
        // error
      });
  };

  const validationSchema = yup.object({
    emailAddress: yup
      .string()
      .email('Bitte vollständige E-Mail-Adresse eingeben!')
      .required('E-Mail-Adresse ist erforderlich.'),
    name: yup
      .string()
      .min(3, 'Name should be of minimum 3 characters length')
      .required('Name ist erforderlich.'),
  });

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
          <Typography variant="h4">Account erstellen</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Erforderliche Felder sind mit * gekennzeichnet
          </Typography>
          <CardContent>
            <Formik
              initialValues={{
                _id: undefined,
                emailAddress: '',
                isAdmin: false,
                password: '',
                firstName: '',
                lastName: '',
                companyName: '',
                lastLogin: null,
                acceptedTermAndConditions: false,
              }}
              onSubmit={async (values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {/* {({ values }) => ( */}
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
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
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      id="lastName"
                      label="Nachname"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      id="companyName"
                      label="Firmenname"
                      name="companyName"
                      autoComplete="companyName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      id="emailAddress"
                      label="E-Mail-Adresse"
                      name="emailAddress"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      id="password"
                      name="password"
                      label="Passwort"
                      type="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Field as={Checkbox} name="acceptedTermAndConditions" />
                      }
                      label="Ich habe die Datenschutzrichtlinien gelesen und bin damit einverstanden."
                    />
                  </Grid>
                </Grid>
                {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
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
              </Form>
              {/* )} */}
            </Formik>
          </CardContent>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                {'Du besitzt bereits einen Account?'}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/passwort-vergessen" variant="body2">
                {'Hast du dein Passwort vergessen?'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
