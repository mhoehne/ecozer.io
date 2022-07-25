import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ProductType } from '../API';

{
  /* TODO */
}
{
  /* 
  fix EMISSIONEN Button: can't be selected for some reason
  */
}

{
  /* Note: */
}

interface MorphologicalBoxVerticalProps {
  product: ProductType;
  setProduct: Function;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    marginTop: theme.spacing(0.4),
    marginBottom: theme.spacing(0.4),
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
    '&.Mui-selected': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.primary.light,
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
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
        }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Box my={{ xs: 2, sm: 2 }}>
          <Typography variant="h4" align="center" sx={{ mb: 5 }}>
            Mermale & Ausprägungen
          </Typography>
          <Grid
            container
            columns={{ xs: 4, sm: 6, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            xs={12}
          >
            {/* ANWENDUNGSBEREICH */}
            <Grid item xs="auto" sm="auto" md="auto">
              <Typography align="center" variant="h6">
                Anwendungsgebiet
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  border: (theme) => `2px solid ${theme.palette.divider}`,
                  flexWrap: 'wrap',
                  px: 0.4,
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
                    selected={props.product.anwendungsbereich.Zertifizierung}
                    onClick={() => {
                      const certification = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Zertifizierung:
                            !props.product.anwendungsbereich.Zertifizierung,
                        },
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
                    selected={props.product.anwendungsbereich.Ökobilanzierung}
                    onClick={() => {
                      const ecoAccounting = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Ökobilanzierung:
                            !props.product.anwendungsbereich.Ökobilanzierung,
                        },
                      };
                      props.setProduct(ecoAccounting);
                    }}
                    id="EcoAccounting"
                    value="Ökobilanzierung"
                    aria-label="Ökobilanzierung"
                  >
                    Bilanzierung
                  </ToggleButton>
                  <ToggleButton
                    selected={props.product.anwendungsbereich.Lebenszyklus}
                    onClick={() => {
                      const lifeCycle = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Lebenszyklus:
                            !props.product.anwendungsbereich.Lebenszyklus,
                        },
                      };
                      props.setProduct(lifeCycle);
                    }}
                    id="LifeCycle"
                    value="Lebenszyklus"
                    aria-label="Lebenszyklus"
                  >
                    Lebenszyklus
                  </ToggleButton>
                  <ToggleButton
                    selected={props.product.anwendungsbereich.Berichterstattung}
                    onClick={() => {
                      const reporting = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Berichterstattung:
                            !props.product.anwendungsbereich.Berichterstattung,
                        },
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
                    selected={
                      props.product.anwendungsbereich.Entscheidungsunterstützung
                    }
                    onClick={() => {
                      const decisionMaking = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Entscheidungsunterstützung:
                            !props.product.anwendungsbereich
                              .Entscheidungsunterstützung,
                        },
                      };
                      props.setProduct(decisionMaking);
                    }}
                    id="DecisionMaking"
                    value="Entscheidungsunterstützung"
                    aria-label="Entscheidungsunterstützung"
                  >
                    Entscheidungsunterstützung
                  </ToggleButton>
                  <ToggleButton
                    selected={props.product.anwendungsbereich.Arbeitsschutz}
                    onClick={() => {
                      const occupationalHealthAndSafety = {
                        ...props.product,
                        anwendungsbereich: {
                          ...props.product.anwendungsbereich,
                          Arbeitsschutz:
                            !props.product.anwendungsbereich.Arbeitsschutz,
                        },
                      };
                      props.setProduct(occupationalHealthAndSafety);
                    }}
                    id="OccupationalHealthAndSafety"
                    value="Arbeitsschutz"
                    aria-label="Arbeitsschutz"
                  >
                    Arbeitsschutz
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            </Grid>

            {/* BETRACHTUNGSOBJEKT */}

            <Grid item xs="auto">
              <Typography align="center" variant="h6">
                Betrachtungsobjekt
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  border: (theme) => `2px solid ${theme.palette.divider}`,
                  flexWrap: 'wrap',
                  px: 0.5,
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
                    selected={props.product.objektAspekt.Abfall}
                    onClick={() => {
                      const waste = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          Abfall: !props.product.objektAspekt.Abfall,
                        },
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
                    selected={props.product.objektAspekt.Anlagen}
                    onClick={() => {
                      const facilities = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          Anlagen: !props.product.objektAspekt.Anlagen,
                        },
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
                    selected={props.product.objektAspekt.Gefahrstoffe}
                    onClick={() => {
                      const hazardousMaterial = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          Gefahrstoffe:
                            !props.product.objektAspekt.Gefahrstoffe,
                        },
                      };
                      props.setProduct(hazardousMaterial);
                    }}
                    id="HazardousMaterial"
                    value="Gefahrstoff"
                    aria-label="Gefahrstoff"
                  >
                    Gefahrstoff
                  </ToggleButton>
                  <ToggleButton
                    selected={props.product.objektAspekt.Emissionen}
                    onClick={() => {
                      const emissionen = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          Emissionen: !props.product.objektAspekt.Emissionen,
                        },
                      };
                      props.setProduct(emissionen);
                    }}
                    id="Emissionen"
                    value="Emissionen"
                    aria-label="Emissionen"
                  >
                    Emissionen
                  </ToggleButton>
                  <ToggleButton
                    selected={props.product.objektAspekt.Energie}
                    onClick={() => {
                      const energy = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          Energie: !props.product.objektAspekt.Energie,
                        },
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
                    selected={props.product.objektAspekt['Stoffe/Stoffströme']}
                    onClick={() => {
                      const substanceFlow = {
                        ...props.product,
                        objektAspekt: {
                          ...props.product.objektAspekt,
                          ['Stoffe/Stoffströme']:
                            !props.product.objektAspekt['Stoffe/Stoffströme'],
                        },
                      };
                      props.setProduct(substanceFlow);
                    }}
                    id="SubstanceFlow"
                    value="Stoffe/Stoffströme"
                    aria-label="Stoffe/Stoffströme"
                  >
                    Stoffe/Stoffströme
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            </Grid>

            {/* BETRACHTUNGSKONZEPT */}

            <Grid item xs="auto">
              <Typography align="center" variant="h6">
                Betrachtungskonzept
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  border: (theme) => `2px solid ${theme.palette.divider}`,
                  flexWrap: 'wrap',
                  px: 0.5,
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
                      props.product.betrachtungskonzept.Verwaltungszentriert
                    }
                    onClick={() => {
                      const administrationCentric = {
                        ...props.product,
                        betrachtungskonzept: {
                          ...props.product.betrachtungskonzept,
                          Verwaltungszentriert:
                            !props.product.betrachtungskonzept
                              .Verwaltungszentriert,
                        },
                      };
                      props.setProduct(administrationCentric);
                    }}
                    id="AdministrationCentric"
                    value="Verwaltungszentriert"
                    aria-label="Verwaltungszentriert"
                  >
                    Verwaltungszentriert
                  </ToggleButton>
                  <ToggleButton
                    selected={
                      props.product.betrachtungskonzept.Bewertungszentriert
                    }
                    onClick={() => {
                      const assessmentCentric = {
                        ...props.product,
                        betrachtungskonzept: {
                          ...props.product.betrachtungskonzept,
                          Bewertungszentriert:
                            !props.product.betrachtungskonzept
                              .Bewertungszentriert,
                        },
                      };
                      props.setProduct(assessmentCentric);
                    }}
                    id="AssessmentCentric"
                    value="Bewertungszentriert"
                    aria-label="Bewertungszentriert"
                  >
                    Bewertungszentriert
                  </ToggleButton>
                  <ToggleButton
                    selected={
                      props.product.betrachtungskonzept.Managementzentriert
                    }
                    onClick={() => {
                      const managementCentric = {
                        ...props.product,
                        betrachtungskonzept: {
                          ...props.product.betrachtungskonzept,
                          Managementzentriert:
                            !props.product.betrachtungskonzept
                              .Managementzentriert,
                        },
                      };
                      props.setProduct(managementCentric);
                    }}
                    id="ManagementCentric"
                    value="Managementzentriert"
                    aria-label="Managementzentriert"
                  >
                    Managementzentriert
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            </Grid>
            {/* BETRACHTUNGSGRENZEN */}

            <Grid item xs="auto">
              <Typography align="center" variant="h6">
                Betrachtungsgrenzen
              </Typography>

              <div>
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    border: (theme) => `2px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    px: 0.5,
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
                      selected={props.product.systemgrenzen['Standort/Betrieb']}
                      onClick={() => {
                        const locationOperation = {
                          ...props.product,
                          systemgrenzen: {
                            ...props.product.systemgrenzen,
                            ['Standort/Betrieb']:
                              !props.product.systemgrenzen['Standort/Betrieb'],
                          },
                        };
                        props.setProduct(locationOperation);
                      }}
                      id="LocationOperation"
                      value="Standort/Betrieb"
                      aria-label="Standort/Betrieb"
                    >
                      Standort/Betrieb
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.systemgrenzen.Prozess}
                      onClick={() => {
                        const process = {
                          ...props.product,
                          systemgrenzen: {
                            ...props.product.systemgrenzen,
                            Prozess: !props.product.systemgrenzen.Prozess,
                          },
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
                      selected={props.product.systemgrenzen.Produkt}
                      onClick={() => {
                        const productBased = {
                          ...props.product,
                          systemgrenzen: {
                            ...props.product.systemgrenzen,
                            Produkt: !props.product.systemgrenzen.Produkt,
                          },
                        };
                        props.setProduct(productBased);
                      }}
                      id="ProductBased"
                      value="Produkt"
                      aria-label="Produkt"
                    >
                      Produkt
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.systemgrenzen.Zwischenbetrieblich}
                      onClick={() => {
                        const intercompany = {
                          ...props.product,
                          systemgrenzen: {
                            ...props.product.systemgrenzen,
                            Zwischenbetrieblich:
                              !props.product.systemgrenzen.Zwischenbetrieblich,
                          },
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

            {/* ZIELGRUPPE / ANWENDER */}

            <Grid item xs="auto">
              <Typography align="center" variant="h6">
                Anwender
              </Typography>

              <div>
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    border: (theme) => `2px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    px: 0.5,
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
                      selected={props.product.zielgruppe.Geschäftsführung}
                      onClick={() => {
                        const businessManagement = {
                          ...props.product,
                          zielgruppe: {
                            ...props.product.zielgruppe,
                            Geschäftsführung:
                              !props.product.zielgruppe.Geschäftsführung,
                          },
                        };
                        props.setProduct(businessManagement);
                      }}
                      id="BusinessManagement"
                      value="Geschäftsführung"
                      aria-label="Geschäftsführung"
                    >
                      Geschäftsführung
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.zielgruppe.Umweltbeauftragte}
                      onClick={() => {
                        const environmentalOfficer = {
                          ...props.product,
                          zielgruppe: {
                            ...props.product.zielgruppe,
                            Umweltbeauftragte:
                              !props.product.zielgruppe.Umweltbeauftragte,
                          },
                        };
                        props.setProduct(environmentalOfficer);
                      }}
                      id="EnvironmentalOfficer"
                      value="Umweltbeauftragter"
                      aria-label="Umweltbeauftragter"
                    >
                      Umweltbeauftragter
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.zielgruppe.Fachabteilung}
                      onClick={() => {
                        const specialtyDepartment = {
                          ...props.product,
                          zielgruppe: {
                            ...props.product.zielgruppe,
                            Fachabteilung:
                              !props.product.zielgruppe.Fachabteilung,
                          },
                        };
                        props.setProduct(specialtyDepartment);
                      }}
                      id="SpecialtyDepartment"
                      value="Fachabteilung"
                      aria-label="Fachabteilung"
                    >
                      Fachabteilung
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.zielgruppe.Mitarbeiter}
                      onClick={() => {
                        const staff = {
                          ...props.product,
                          zielgruppe: {
                            ...props.product.zielgruppe,
                            Mitarbeiter: !props.product.zielgruppe.Mitarbeiter,
                          },
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
                      selected={props.product.zielgruppe['externe Stakeholder']}
                      onClick={() => {
                        const externalStakeholders = {
                          ...props.product,
                          zielgruppe: {
                            ...props.product.zielgruppe,
                            ['externe Stakeholder']:
                              !props.product.zielgruppe['externe Stakeholder'],
                          },
                        };
                        props.setProduct(externalStakeholders);
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

            {/* ITEGRATIONSGRAD */}

            <Grid item xs="auto">
              <Typography align="center" variant="h6">
                Integrationsgrad
              </Typography>

              <div>
                <Paper
                  elevation={0}
                  sx={{
                    display: 'flex',
                    border: (theme) => `2px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    px: 0.5,
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
                        props.product.gradDerIntegrierung['Stand-Alone']
                      }
                      onClick={() => {
                        const standAlone = {
                          ...props.product,
                          gradDerIntegrierung: {
                            ...props.product.gradDerIntegrierung,
                            ['Stand-Alone']:
                              !props.product.gradDerIntegrierung['Stand-Alone'],
                          },
                        };
                        props.setProduct(standAlone);
                      }}
                      id="StandAlone"
                      value="Stand-Alone"
                      aria-label="Stand-Alone"
                    >
                      Stand-Alone
                    </ToggleButton>
                    <ToggleButton
                      selected={props.product.gradDerIntegrierung['Add-On']}
                      onClick={() => {
                        const addon = {
                          ...props.product,
                          gradDerIntegrierung: {
                            ...props.product.gradDerIntegrierung,
                            ['Add-On']:
                              !props.product.gradDerIntegrierung['Add-On'],
                          },
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
                      selected={props.product.gradDerIntegrierung.integriert}
                      onClick={() => {
                        const integration = {
                          ...props.product,
                          gradDerIntegrierung: {
                            ...props.product.gradDerIntegrierung,
                            integriert:
                              !props.product.gradDerIntegrierung.integriert,
                          },
                        };
                        props.setProduct(integration);
                      }}
                      id="Integration"
                      value="Intergriert"
                      aria-label="Intergriert"
                    >
                      Intergriert
                    </ToggleButton>
                    <ToggleButton
                      selected={
                        props.product.gradDerIntegrierung['SaaS-Lösung']
                      }
                      onClick={() => {
                        const SaaSLösung = {
                          ...props.product,
                          gradDerIntegrierung: {
                            ...props.product.gradDerIntegrierung,
                            ['SaaS-Lösung']:
                              !props.product.gradDerIntegrierung['SaaS-Lösung'],
                          },
                        };
                        props.setProduct(SaaSLösung);
                      }}
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
    </>
  );
}
