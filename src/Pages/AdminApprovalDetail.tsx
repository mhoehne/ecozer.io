import * as React from 'react';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import {
  Box,
  Button,
  Stack,
  Container,
  Grid,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, NavigateFunction, useParams } from 'react-router-dom';
import {
  getProduct,
  IncrementProductViewCount,
  ProductType,
  AccountType,
  PutProducts,
  RejectProduct,
  PublishProduct,
} from '../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

interface AdminApprovalDetailProps {
  account: AccountType | null;
}

export default function AdminApprovalDetail(props: AdminApprovalDetailProps) {
  {
    /* when rejected button is clicked => show popup and enter a reason for the rejection => then click again on send button and call rejectProduct */
  }
  {
    /* call publishProduct and set product state to published */
  }
  const navigate = useNavigate();
  if (props.account?._id === undefined) {
    alert('Error: Account ID is not expected to be undefined');
    return null;
  }
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const params = useParams();

  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProduct(params.id ?? '-1').then((result) => {
      IncrementProductViewCount(params.id ?? '-1').then(() => {
        setProduct(result.data);
      });
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setPublished = () => {
    // call API to update the product
    // set product state
    // PublishProduct(product?.state as string)
    //   .then((product) => {
    //     return navigate('/approval');
    //   })
    //   .catch((msg) => {
    //     alert('error');
    //   });
  };

  const setRejected = () => {
    // call API to update the product
    // set product state
    // RejectProduct(product?.state as string)
    //   .then((product) => {
    //     return navigate('/approval');
    //   })
    //   .catch((msg) => {
    //     alert('error');
    //   });
  };

  return (
    <>
      <Box sx={{ my: 10 }}>
        <Container component="main" maxWidth="md">
          <Box px={{ xs: 0, sm: 0 }} py={{ xs: 2, sm: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              rowSpacing={1}
              columnSpacing={{ xs: 0, sm: 0, md: 0 }}
              sx={{ p: 2 }}
              bgcolor="background.paper"
              color="text.primary"
            >
              {/* <Grid item xs={7}>
              <CardMedia
                component="img"
                id="productImage"
                alt="product image"
                height="300"
                image={SampleImg}
              />
            </Grid> */}
              <Grid item xs={10} sx={{ mt: 0 }}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="productName"
                    label="Produktname"
                    value={product?.productName}
                    focused
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="productLink"
                    label="Website"
                    value={product?.productLink}
                    focused
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="productCompany"
                    label="Unternehmen"
                    value={product?.productCompany}
                    focused
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ mx: 0, mt: 0 }}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="productDescription"
                      label="Produktbeschreibung"
                      multiline
                      rows={10}
                      value={product?.productDescription}
                      focused
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* ### Morphological Box ### */}

          <Box
            px={{ xs: 6, sm: 6 }}
            py={{ xs: 2, sm: 2 }}
            mx={{ xs: 0, sm: 0 }}
            my={{ xs: 0, sm: 0 }}
            sx={{ width: '100%' }}
            bgcolor="background.paper"
            color="text.primary"
          >
            <Box sx={{ width: '100%', my: 3 }}>
              <Typography variant="h4" align="center" sx={{ m: 5 }}>
                Mermale & Ausprägungen
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
              >
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Anwendungsgebiet
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        {/* ANWENDUNGSBEREICH */}

                        <ToggleButton
                          id="LegalCompliance"
                          value="Gesetzeskonformität"
                          aria-label="Gesetzeskonformität"
                          selected={
                            product?.anwendungsbereich.Gesetzeskonformität
                          }
                        >
                          Gesetzeskonformität
                        </ToggleButton>
                        <ToggleButton
                          id="Certification"
                          value="Zertifizierung"
                          aria-label="Zertifizierung"
                          selected={product?.anwendungsbereich.Zertifizierung}
                        >
                          Zertifizierung
                        </ToggleButton>
                        <ToggleButton
                          id="EcoAccounting"
                          value="Ökobilanzierung"
                          aria-label="Ökobilanzierung"
                          selected={product?.anwendungsbereich.Ökobilanzierung}
                        >
                          Bilanzierung
                        </ToggleButton>
                        <ToggleButton
                          id="LifeCycle"
                          value="Lebenszyklus"
                          aria-label="Lebenszyklus"
                          selected={product?.anwendungsbereich.Lebenszyklus}
                        >
                          Lebenszyklus
                        </ToggleButton>
                        <ToggleButton
                          id="Reporting"
                          value="Berichterstattung"
                          aria-label="Berichterstattung"
                          selected={
                            product?.anwendungsbereich.Berichterstattung
                          }
                        >
                          Berichterstattung
                        </ToggleButton>
                        <ToggleButton
                          id="DecisionMaking"
                          value="Entscheidungsunterstützung"
                          aria-label="Entscheidungsunterstützung"
                          selected={
                            product?.anwendungsbereich
                              .Entscheidungsunterstützung
                          }
                        >
                          Entscheidungsunterstützung
                        </ToggleButton>
                        <ToggleButton
                          id="OccupationalHealthAndSafety"
                          value="Arbeitsschutz"
                          aria-label="Arbeitsschutz"
                          selected={product?.anwendungsbereich.Arbeitsschutz}
                        >
                          Arbeitsschutz
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Betrachtungsobjekt
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      {/* BETRACHTUNGSOBJEKT */}

                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        <ToggleButton
                          id="Waste"
                          value="Abfall"
                          aria-label="Abfall"
                          selected={product?.objektAspekt.Abfall}
                        >
                          Abfall
                        </ToggleButton>
                        <ToggleButton
                          id="Facilities"
                          value="Anlagen"
                          aria-label="Anlagen"
                          selected={product?.objektAspekt.Anlagen}
                        >
                          Anlagen
                        </ToggleButton>
                        <ToggleButton
                          id="HazardousMaterial"
                          value="Gefahrstoff"
                          aria-label="Gefahrstoff"
                          selected={product?.objektAspekt.Gefahrstoffe}
                        >
                          Gefahrstoff
                        </ToggleButton>
                        <ToggleButton
                          id="Emission"
                          value="Emission"
                          aria-label="Emission"
                          selected={product?.objektAspekt.Emissionen}
                        >
                          Emission
                        </ToggleButton>
                        <ToggleButton
                          id="Energy"
                          value="Energie"
                          aria-label="Energie"
                          selected={product?.objektAspekt.Energie}
                        >
                          Energie
                        </ToggleButton>
                        <ToggleButton
                          id="SubstanceFlow"
                          value="Stoff/Stoffstrom"
                          aria-label="Stoff/Stoffstrom"
                          selected={product?.objektAspekt['Stoffe/Stoffströme']}
                        >
                          Stoff/Stoffstrom
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Betrachtungskonzept
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      {/* BETRACHTUNGSKONZEPT */}

                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        <ToggleButton
                          id="AdministrationCentric"
                          value="Verwaltungszentriert"
                          aria-label="Verwaltungszentriert"
                          selected={
                            product?.betrachtungskonzept.Verwaltungszentriert
                          }
                        >
                          Verwaltungszentriert
                        </ToggleButton>
                        <ToggleButton
                          id="AssessmentCentric"
                          value="Bewertungszentriert"
                          aria-label="Bewertungszentriert"
                          selected={
                            product?.betrachtungskonzept.Bewertungszentriert
                          }
                        >
                          Bewertungszentriert
                        </ToggleButton>
                        <ToggleButton
                          id="ManagementCentric"
                          value="Managementzentriert"
                          aria-label="Managementzentriert"
                          selected={
                            product?.betrachtungskonzept.Managementzentriert
                          }
                        >
                          Managementzentriert
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Betrachtungsgrenzen
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      {/* BETRACHTUNGSGRENZEN */}

                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        <ToggleButton
                          id="LocationOperation"
                          value="Standort/Betrieb"
                          aria-label="Standort/Betrieb"
                          selected={product?.systemgrenzen['Standort/Betrieb']}
                        >
                          Standort/Betrieb
                        </ToggleButton>
                        <ToggleButton
                          id="Process"
                          value="Prozess"
                          aria-label="Prozess"
                          selected={product?.systemgrenzen.Prozess}
                        >
                          Prozess
                        </ToggleButton>
                        <ToggleButton
                          id="ProductBased"
                          value="Produkt"
                          aria-label="Produkt"
                          selected={product?.systemgrenzen.Produkt}
                        >
                          Produkt
                        </ToggleButton>
                        <ToggleButton
                          id="Intercompany"
                          value="Zwischenbetrieblich"
                          aria-label="Zwischenbetrieblich"
                          selected={product?.systemgrenzen.Zwischenbetrieblich}
                        >
                          Zwischenbetrieblich
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Anwender
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      {/* ZIELGRUPPE / ANWENDER */}

                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        <ToggleButton
                          id="BusinessManagement"
                          value="Geschäftsführung"
                          aria-label="Geschäftsführung"
                          selected={product?.zielgruppe.Geschäftsführung}
                        >
                          Geschäftsführung
                        </ToggleButton>
                        <ToggleButton
                          id="EnvironmentalOfficer"
                          value="Umweltbeauftragter"
                          aria-label="Umweltbeauftragter"
                          selected={product?.zielgruppe.Umweltbeauftragte}
                        >
                          Umweltbeauftragter
                        </ToggleButton>
                        <ToggleButton
                          id="SpecialtyDepartment"
                          value="Fachabteilung"
                          aria-label="Fachabteilung"
                          selected={product?.zielgruppe.Fachabteilung}
                        >
                          Fachabteilung
                        </ToggleButton>
                        <ToggleButton
                          id="Staff"
                          value="Mitarbeiter"
                          aria-label="Mitarbeiter"
                          selected={product?.zielgruppe.Mitarbeiter}
                        >
                          Mitarbeiter
                        </ToggleButton>
                        <ToggleButton
                          id="ExternalStakeholders"
                          value="Externe Stakeholder"
                          aria-label="Externe Stakeholder"
                          selected={product?.zielgruppe['externe Stakeholder']}
                        >
                          Externe Stakeholder
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <Typography align="center" variant="h6">
                    Integrationsgrad
                  </Typography>

                  <div>
                    <Paper
                      elevation={0}
                      sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        my: 1,
                      }}
                    >
                      {/* ITEGRATIONSGRAD */}

                      <StyledToggleButtonGroup
                        orientation="vertical"
                        size="small"
                        color="primary"
                        aria-label="selection"
                        fullWidth={true}
                      >
                        <ToggleButton
                          id="StandAlone"
                          value="Stand-Alone"
                          aria-label="Stand-Alone"
                          selected={product?.gradDerIntegrierung['Stand-Alone']}
                        >
                          Stand-Alone
                        </ToggleButton>
                        <ToggleButton
                          id="Addon"
                          value="Add-On"
                          aria-label="Add-On"
                          selected={product?.gradDerIntegrierung['Add-On']}
                        >
                          Add-On
                        </ToggleButton>
                        <ToggleButton
                          id="Integration"
                          value="Intergriert"
                          aria-label="Intergriert"
                          selected={product?.gradDerIntegrierung.integriert}
                        >
                          Intergriert
                        </ToggleButton>
                        <ToggleButton
                          id="SaaS-Lösung"
                          value="SaaS-Lösung"
                          aria-label="SaaS-Lösung"
                          selected={product?.gradDerIntegrierung['SaaS-Lösung']}
                        >
                          SaaS-Lösung
                        </ToggleButton>
                      </StyledToggleButtonGroup>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
        sx={{ m: 5 }}
      >
        <Button
          size="medium"
          variant="contained"
          color="error"
          startIcon={<CloseIcon />}
          onClick={handleClickOpen}
        >
          Ablehnen
        </Button>
        {/* "Ablehnen"/reject button triggers a dialog, where the admin can put a short description why he rejected the product */}
        {/* User gets a notification about the rejection and the description of the admin dialog */}
        {/* after rejecting the product, set state to "rejected" */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<DoneIcon />}
          sx={{ color: 'background.paper' }}
          onClick={setPublished}
        >
          Veröffentlichen
        </Button>
        {/* user gets a notification about the approval of his product */}
        {/* after approving the product, set state to "published". (product should appear in the search) */}
      </Stack>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="responsive-dialog-title">Ablehnungsgrund</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="rejectionText"
            label="Ablehnungsgrund"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={8}
            focused
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>schließen</Button>
          <Button variant="contained" color="error" onClick={setRejected}>
            Ablehnen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
