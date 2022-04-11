import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ProductType } from '../API';

interface MorphologicalBoxVerticalProps {
  product: ProductType;
  setProduct: Function;
}

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

export default function MorphologicalBoxVertical(
  props: MorphologicalBoxVerticalProps
) {
  return (
    <>
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
                    <ToggleButton
                      selected={
                        props.product.anwendungsbereich.Gesetzeskonformität
                      }
                      onClick={() => {
                        const legalCompliance = {
                          ...props.product,
                          anwendungsbereich: {
                            ...props.product.anwendungsbereich,
                            Gesetzeskonformität:
                              !props.product.anwendungsbereich
                                .Gesetzeskonformität,
                          },
                        };
                        props.setProduct(legalCompliance);
                      }}
                      id="LegalCompliance"
                      value="Gesetzeskonformität"
                      aria-label="Gesetzeskonformität"
                    >
                      Gesetzeskonformität
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const certification = {
                          ...props.product,
                          Certification: event.currentTarget.value,
                        };
                        props.setProduct(certification);
                      }}
                      id="Certification"
                      value="Zertifizierung"
                      aria-label="Zertifizierung"
                    >
                      Zertifizierung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const accounting = {
                          ...props.product,
                          Accounting: event.currentTarget.value,
                        };
                        props.setProduct(accounting);
                      }}
                      id="Accounting"
                      value="Bilanzierung"
                      aria-label="Bilanzierung"
                    >
                      Bilanzierung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const lifecycle = {
                          ...props.product,
                          LifeCycle: event.currentTarget.value,
                        };
                        props.setProduct(lifecycle);
                      }}
                      id="LifeCycle"
                      value="Lebenszyklus"
                      aria-label="Lebenszyklus"
                    >
                      Lebenszyklus
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const reporting = {
                          ...props.product,
                          Reporting: event.currentTarget.value,
                        };
                        props.setProduct(reporting);
                      }}
                      id="Reporting"
                      value="Berichterstattung"
                      aria-label="Berichterstattung"
                    >
                      Berichterstattung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const reporting = {
                          ...props.product,
                          Reporting: event.currentTarget.value,
                        };
                        props.setProduct(reporting);
                      }}
                      id="Reporting"
                      value="Entscheidungsunterstützung"
                      aria-label="Entscheidungsunterstützung"
                    >
                      Entscheidungsunterstützung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const businessassociations = {
                          ...props.product,
                          BusinessAssociations: event.currentTarget.value,
                        };
                        props.setProduct(businessassociations);
                      }}
                      id="BusinessAssociations"
                      value="Unternehmensverbünde"
                      aria-label="Unternehmensverbünde"
                    >
                      Unternehmensverbünde
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
                  <StyledToggleButtonGroup
                    orientation="vertical"
                    size="small"
                    color="primary"
                    aria-label="selection"
                    fullWidth={true}
                  >
                    <ToggleButton
                      onChange={function (event) {
                        const waste = {
                          ...props.product,
                          Waste: event.currentTarget.value,
                        };
                        props.setProduct(waste);
                      }}
                      id="Waste"
                      value="Abfall"
                      aria-label="Abfall"
                    >
                      Abfall
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const facilities = {
                          ...props.product,
                          Facilities: event.currentTarget.value,
                        };
                        props.setProduct(facilities);
                      }}
                      id="Facilities"
                      value="Anlagen"
                      aria-label="Anlagen"
                    >
                      Anlagen
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const hazardousmaterial = {
                          ...props.product,
                          HazardousMaterial: event.currentTarget.value,
                        };
                        props.setProduct(hazardousmaterial);
                      }}
                      id="HazardousMaterial"
                      value="Gefahrstoff"
                      aria-label="Gefahrstoff"
                    >
                      Gefahrstoff
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const emission = {
                          ...props.product,
                          Emission: event.currentTarget.value,
                        };
                        props.setProduct(emission);
                      }}
                      id="Emission"
                      value="Emission"
                      aria-label="Emission"
                    >
                      Emission
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const energy = {
                          ...props.product,
                          Energy: event.currentTarget.value,
                        };
                        props.setProduct(energy);
                      }}
                      id="Energy"
                      value="Energie"
                      aria-label="Energie"
                    >
                      Energie
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const substanceflow = {
                          ...props.product,
                          SubstanceFlow: event.currentTarget.value,
                        };
                        props.setProduct(substanceflow);
                      }}
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
                  <StyledToggleButtonGroup
                    orientation="vertical"
                    size="small"
                    color="primary"
                    aria-label="selection"
                    fullWidth={true}
                  >
                    <ToggleButton
                      onChange={function (event) {
                        const administrationcentric = {
                          ...props.product,
                          AdministrationCentric: event.currentTarget.value,
                        };
                        props.setProduct(administrationcentric);
                      }}
                      id="AdministrationCentric"
                      value="Verwaltungszentriert"
                      aria-label="Verwaltungszentriert"
                    >
                      Verwaltungszentriert
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const assessmentcentric = {
                          ...props.product,
                          AssessmentCentric: event.currentTarget.value,
                        };
                        props.setProduct(assessmentcentric);
                      }}
                      id="AssessmentCentric"
                      value="Bewertungszentriert"
                      aria-label="Bewertungszentriert"
                    >
                      Bewertungszentriert
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const managementcentric = {
                          ...props.product,
                          ManagementCentric: event.currentTarget.value,
                        };
                        props.setProduct(managementcentric);
                      }}
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
                  <StyledToggleButtonGroup
                    orientation="vertical"
                    size="small"
                    color="primary"
                    aria-label="selection"
                    fullWidth={true}
                  >
                    <ToggleButton
                      onChange={function (event) {
                        const locationoperation = {
                          ...props.product,
                          LocationOperation: event.currentTarget.value,
                        };
                        props.setProduct(locationoperation);
                      }}
                      id="LocationOperation"
                      value="Standort/Betrieb"
                      aria-label="Standort/Betrieb"
                    >
                      Standort/Betrieb
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const process = {
                          ...props.product,
                          Process: event.currentTarget.value,
                        };
                        props.setProduct(process);
                      }}
                      id="Process"
                      value="Prozess"
                      aria-label="Prozess"
                    >
                      Prozess
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const productbased = {
                          ...props.product,
                          ProductBased: event.currentTarget.value,
                        };
                        props.setProduct(productbased);
                      }}
                      id="ProductBased"
                      value="Produkt"
                      aria-label="Produkt"
                    >
                      Produkt
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const intercompany = {
                          ...props.product,
                          Intercompany: event.currentTarget.value,
                        };
                        props.setProduct(intercompany);
                      }}
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
                  <StyledToggleButtonGroup
                    orientation="vertical"
                    size="small"
                    color="primary"
                    aria-label="selection"
                    fullWidth={true}
                  >
                    <ToggleButton
                      onChange={function (event) {
                        const businessmanagement = {
                          ...props.product,
                          BusinessManagement: event.currentTarget.value,
                        };
                        props.setProduct(businessmanagement);
                      }}
                      id="BusinessManagement"
                      value="Unternehmensführung"
                      aria-label="Unternehmensführung"
                    >
                      Unternehmensführung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const environmentalofficer = {
                          ...props.product,
                          EnvironmentalOfficer: event.currentTarget.value,
                        };
                        props.setProduct(environmentalofficer);
                      }}
                      id="EnvironmentalOfficer"
                      value="Umweltbeauftragter"
                      aria-label="Umweltbeauftragter"
                    >
                      Umweltbeauftragter
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const specialtydepartment = {
                          ...props.product,
                          SpecialtyDepartment: event.currentTarget.value,
                        };
                        props.setProduct(specialtydepartment);
                      }}
                      id="SpecialtyDepartment"
                      value="Fachabteilung"
                      aria-label="Fachabteilung"
                    >
                      Fachabteilung
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const staff = {
                          ...props.product,
                          Staff: event.currentTarget.value,
                        };
                        props.setProduct(staff);
                      }}
                      id="Staff"
                      value="Mitarbeiter"
                      aria-label="Mitarbeiter"
                    >
                      Mitarbeiter
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const externalstakeholders = {
                          ...props.product,
                          ExternalStakeholders: event.currentTarget.value,
                        };
                        props.setProduct(externalstakeholders);
                      }}
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
                  <StyledToggleButtonGroup
                    orientation="vertical"
                    size="small"
                    color="primary"
                    aria-label="selection"
                    fullWidth={true}
                  >
                    <ToggleButton
                      onChange={function (event) {
                        const standalone = {
                          ...props.product,
                          Standalone: event.currentTarget.value,
                        };
                        props.setProduct(standalone);
                      }}
                      id="Standalone"
                      value="Stand-Alone"
                      aria-label="Stand-Alone"
                    >
                      Stand-Alone
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const addon = {
                          ...props.product,
                          Addon: event.currentTarget.value,
                        };
                        props.setProduct(addon);
                      }}
                      id="Addon"
                      value="Add-On"
                      aria-label="Add-On"
                    >
                      Add-On
                    </ToggleButton>
                    <ToggleButton
                      onChange={function (event) {
                        const integration = {
                          ...props.product,
                          Integration: event.currentTarget.value,
                        };
                        props.setProduct(integration);
                      }}
                      id="Integration"
                      value="Intergriert"
                      aria-label="Intergriert"
                    >
                      Intergriert
                    </ToggleButton>
                  </StyledToggleButtonGroup>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
