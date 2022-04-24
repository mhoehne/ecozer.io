import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import SampleImg from '../images/sample-img.png';
import TextField from '@mui/material/TextField';
import { getProduct, ProductType } from '../API';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
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

export default function ProductDetail() {
  const params = useParams();

  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProduct(params.id ?? '-1').then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <>
      <Box sx={{ my: 10 }}>
        <Button
          variant="text"
          color="info"
          startIcon={<ArrowBackIosNewOutlinedIcon />}
          href="/search"
        >
          Zurück
        </Button>

        <Box
          px={{ xs: 2, sm: 2 }}
          py={{ xs: 2, sm: 2 }}
          bgcolor="background.paper"
          color="text.primary"
          sx={{ width: '100%', mt: 2 }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 2 }}
            sx={{ p: 2 }}
          >
            <Grid item xs={7}>
              <CardMedia
                component="img"
                id="productImage"
                alt="product image"
                height="300"
                image={SampleImg}
              />
            </Grid>
            <Grid item xs={5} sx={{ mt: -2 }}>
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
        </Box>
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
                      >
                        Gesetzeskonformität
                      </ToggleButton>
                      <ToggleButton
                        id="Certification"
                        value="Zertifizierung"
                        aria-label="Zertifizierung"
                      >
                        Zertifizierung
                      </ToggleButton>
                      <ToggleButton
                        id="EcoAccounting"
                        value="Ökobilanzierung"
                        aria-label="Ökobilanzierung"
                      >
                        Bilanzierung
                      </ToggleButton>
                      <ToggleButton
                        id="LifeCycle"
                        value="Lebenszyklus"
                        aria-label="Lebenszyklus"
                      >
                        Lebenszyklus
                      </ToggleButton>
                      <ToggleButton
                        id="Reporting"
                        value="Berichterstattung"
                        aria-label="Berichterstattung"
                      >
                        Berichterstattung
                      </ToggleButton>
                      <ToggleButton
                        id="DecisionMaking"
                        value="Entscheidungsunterstützung"
                        aria-label="Entscheidungsunterstützung"
                      >
                        Entscheidungsunterstützung
                      </ToggleButton>
                      <ToggleButton
                        id="OccupationalHealthAndSafety"
                        value="Arbeitsschutz"
                        aria-label="Arbeitsschutz"
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
                      >
                        Abfall
                      </ToggleButton>
                      <ToggleButton
                        id="Facilities"
                        value="Anlagen"
                        aria-label="Anlagen"
                      >
                        Anlagen
                      </ToggleButton>
                      <ToggleButton
                        id="HazardousMaterial"
                        value="Gefahrstoff"
                        aria-label="Gefahrstoff"
                      >
                        Gefahrstoff
                      </ToggleButton>
                      <ToggleButton
                        id="Emission"
                        value="Emission"
                        aria-label="Emission"
                      >
                        Emission
                      </ToggleButton>
                      <ToggleButton
                        id="Energy"
                        value="Energie"
                        aria-label="Energie"
                      >
                        Energie
                      </ToggleButton>
                      <ToggleButton
                        id="SubstanceFlow"
                        value="Stoff/Stoffstrom"
                        aria-label="Stoff/Stoffstrom"
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
                      >
                        Verwaltungszentriert
                      </ToggleButton>
                      <ToggleButton
                        id="AssessmentCentric"
                        value="Bewertungszentriert"
                        aria-label="Bewertungszentriert"
                      >
                        Bewertungszentriert
                      </ToggleButton>
                      <ToggleButton
                        id="ManagementCentric"
                        value="Managementzentriert"
                        aria-label="Managementzentriert"
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
                      >
                        Standort/Betrieb
                      </ToggleButton>
                      <ToggleButton
                        id="Process"
                        value="Prozess"
                        aria-label="Prozess"
                      >
                        Prozess
                      </ToggleButton>
                      <ToggleButton
                        id="ProductBased"
                        value="Produkt"
                        aria-label="Produkt"
                      >
                        Produkt
                      </ToggleButton>
                      <ToggleButton
                        id="Intercompany"
                        value="Zwischenbetrieblich"
                        aria-label="Zwischenbetrieblich"
                      >
                        Zwischenbetrieblich
                      </ToggleButton>
                    </StyledToggleButtonGroup>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography align="center" variant="h6">
                  Adressat/Anwender
                </Typography>

                <div>
                  <Paper
                    elevation={0}
                    sx={{
                      display: 'flex',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      flexWrap: 'wrap',
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
                      >
                        Geschäftsführung
                      </ToggleButton>
                      <ToggleButton
                        id="EnvironmentalOfficer"
                        value="Umweltbeauftragter"
                        aria-label="Umweltbeauftragter"
                      >
                        Umweltbeauftragter
                      </ToggleButton>
                      <ToggleButton
                        id="SpecialtyDepartment"
                        value="Fachabteilung"
                        aria-label="Fachabteilung"
                      >
                        Fachabteilung
                      </ToggleButton>
                      <ToggleButton
                        id="Staff"
                        value="Mitarbeiter"
                        aria-label="Mitarbeiter"
                      >
                        Mitarbeiter
                      </ToggleButton>
                      <ToggleButton
                        id="ExternalStakeholders"
                        value="Externe Stakeholder"
                        aria-label="Externe Stakeholder"
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
                      >
                        Stand-Alone
                      </ToggleButton>
                      <ToggleButton
                        id="Addon"
                        value="Add-On"
                        aria-label="Add-On"
                      >
                        Add-On
                      </ToggleButton>
                      <ToggleButton
                        id="Integration"
                        value="Intergriert"
                        aria-label="Intergriert"
                      >
                        Intergriert
                      </ToggleButton>
                      <ToggleButton
                        id="SaaS-Lösung"
                        value="SaaS-Lösung"
                        aria-label="SaaS-Lösung"
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
      </Box>
      {/* placeholder for productdetailviewcard and MBvertical */}
    </>
  );
}
