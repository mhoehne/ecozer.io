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

export default function SignUpFormik() {
  const [cookies, setCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const validationSchema = yup.object({
    emailAddress: yup
      .string()
      .email('Bitte vollständige E-Mail-Adresse eingeben!')
      .required('E-Mail-Adresse ist erforderlich.'),
    password: yup
      .string()
      .min(8, 'Passwort sollte mindestens eine Länge von 8 Zeichen haben.')
      .required('Passwort ist erforderlich.'),
    firstName: yup
      .string()
      .min(2, 'Vorname sollte mindestens eine Länge von 2 Zeichen haben.')
      .required('Vorname ist erforderlich.'),
    lastName: yup
      .string()
      .min(2, 'Nachname sollte mindestens eine Länge von 2 Zeichen haben.')
      .required('Nachname ist erforderlich.'),
    companyName: yup
      .string()
      .required('Der Name des Unternehmens ist erforderlich.'),
  });

  const formik = useFormik({
    initialValues: {
      _id: undefined,
      emailAddress: '',
      isAdmin: false,
      password: '',
      firstName: '',
      lastName: '',
      companyName: '',
      lastLogin: '',
      acceptedTermAndConditions: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      CreateAccount(values)
        .then((values) => {
          setCookie('email', formik.values.emailAddress, { path: '/' });
          return navigate('/my-products');
        })
        .catch((msg) => {
          alert('error');
        });
    },
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
          <Box
            component="form"
            noValidate
            justifyContent="center"
            alignItems="center"
            onSubmit={formik.handleSubmit}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={formik.errors.firstName}
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
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={formik.errors.lastName}
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
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.companyName &&
                      Boolean(formik.errors.companyName)
                    }
                    helperText={formik.errors.companyName}
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
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.emailAddress &&
                      Boolean(formik.errors.emailAddress)
                    }
                    helperText={formik.errors.emailAddress}
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={formik.errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="acceptedTermAndConditions" />}
                    label="Ich habe die Datenschutzrichtlinien gelesen und bin damit einverstanden."
                    value={formik.values.acceptedTermAndConditions}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <pre>{JSON.stringify(formik.values, null, 4)}</pre>
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
            </CardContent>
          </Box>
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
