import { Field, Form, Formik, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import { AccountType, GetAccounts, PutAccount } from '../API';

interface AccountProps {
  account: AccountType | null;
}

export default function Account(props: AccountProps) {
  if (props.account?._id === undefined) {
    alert('Error: Account ID is not expected to be undefined');
    return null;
  }

  const validationSchema = yup.object({
    emailAddress: yup
      .string()
      .email('Bitte vollständige E-Mail-Adresse eingeben!')
      .required('E-Mail-Adresse ist erforderlich.'),
    firstname: yup
      .string()
      .min(3, 'Vorname sollte mindestens 3 Zeichen haben!')
      .required('Vorname ist erforderlich.'),
    lastname: yup
      .string()
      .min(3, 'Nachname sollte mindestens 3 Zeichen haben!')
      .required('Nachname ist erforderlich.'),
    password: yup
      .string()
      .min(6, 'Passwort sollte mindestens 6 Zeichen haben!')
      .required('Passwort ist erforderlich.'),
  });

  const formik = useFormik({
    initialValues: {
      ...props.account,
    },
    // validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values)
      PutAccount(values)
        .then()
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
          <Box 
          component="form"
          onSubmit={formik.handleSubmit}>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Vorname"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
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
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="E-Mail-Adresse"
                        name="emailAddress"
                        autoComplete="email"
                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
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
                {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
          </Box>
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
            onSubmit={formik.handleSubmit}
            noValidate
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
                  autoComplete="old-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="neues Passwort"
                  type="password"
                  id="newPassword"
                  autoComplete="new-password"
                  onChange={formik.handleChange}
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
