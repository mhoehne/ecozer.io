import Box from '@mui/material/Box';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

interface AccordionFilterProps {
  setZielgruppe: Function;
  Zielgruppe: string[];
  setAnwendungsbereich: Function;
  Anwendungsbereich: string[];
  setGradDerIntegrierung: Function;
  GradDerIntegrierung: string[];
  setObjektAspekt: Function;
  ObjektAspekt: string[];
  setSystemgrenzen: Function;
  Systemgrenzen: string[];
  setBetrachtungskonzept: Function;
  Betrachtungskonzept: string[];
}

export default function AccordionFilter(props: AccordionFilterProps) {
  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        my={{ xs: 4, sm: 4 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Typography variant="h6" sx={{ m: 1 }}>
          Suchfilter
        </Typography>

        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Anwendungsgebiet</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Gesetzeskonformität"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Gesetzeskonformität');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Gesetzeskonformität' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Zertifizierung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Zertifizierung');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Zertifizierung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bilanzierung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Bilanzierung');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Bilanzierung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Lebenszyklus"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Lebenszyklus');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Lebenszyklus' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Berichterstattung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Berichterstattung');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Berichterstattung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Entscheidungsstützung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Entscheidungsstützung');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Entscheidungsstützung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Unternehmensverbünde"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Anwendungsbereich.push('Unternehmensverbünde');
                    props.setAnwendungsbereich(props.Anwendungsbereich);
                  } else {
                    props.setAnwendungsbereich(
                      props.Anwendungsbereich.filter(
                        (name) => 'Unternehmensverbünde' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Betrachtungsobjekt</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Abfall"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Abfall');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter((name) => 'Abfall' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Anlagen"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Anlagen');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter((name) => 'Anlagen' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Gefahrstoff"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Gefahrstoff');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter((name) => 'Gefahrstoff' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Emission"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Emission');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter((name) => 'Emission' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Energie"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Energie');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter((name) => 'Energie' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Stoffe/Stoffstrom"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.ObjektAspekt.push('Stoffe/Stoffstrom');
                    props.setObjektAspekt(props.ObjektAspekt);
                  } else {
                    props.setObjektAspekt(
                      props.ObjektAspekt.filter(
                        (name) => 'Stoffe/Stoffstrom' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Betrachtungskonzept</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Verwaltungszentriert"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Betrachtungskonzept.push('Verwaltungszentriert');
                    props.setBetrachtungskonzept(props.Betrachtungskonzept);
                  } else {
                    props.setBetrachtungskonzept(
                      props.Betrachtungskonzept.filter(
                        (name) => 'Verwaltungszentriert' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bewertungszentriert"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Betrachtungskonzept.push('Bewertungszentriert');
                    props.setBetrachtungskonzept(props.Betrachtungskonzept);
                  } else {
                    props.setBetrachtungskonzept(
                      props.Betrachtungskonzept.filter(
                        (name) => 'Bewertungszentriert' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Managementzentriert"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Betrachtungskonzept.push('Managementzentriert');
                    props.setBetrachtungskonzept(props.Betrachtungskonzept);
                  } else {
                    props.setBetrachtungskonzept(
                      props.Betrachtungskonzept.filter(
                        (name) => 'Managementzentriert' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Betrachtungsgrenzen</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Standort/Betrieb"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Systemgrenzen.push('Standort/Betrieb');
                    props.setSystemgrenzen(props.Systemgrenzen);
                  } else {
                    props.setSystemgrenzen(
                      props.Systemgrenzen.filter(
                        (name) => 'Standort/Betrieb' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Prozess"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Systemgrenzen.push('Prozess');
                    props.setSystemgrenzen(props.Systemgrenzen);
                  } else {
                    props.setSystemgrenzen(
                      props.Systemgrenzen.filter((name) => 'Prozess' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Produkt"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Systemgrenzen.push('Produkt');
                    props.setSystemgrenzen(props.Systemgrenzen);
                  } else {
                    props.setSystemgrenzen(
                      props.Systemgrenzen.filter((name) => 'Produkt' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Zwischenbetrieblich"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Systemgrenzen.push('Zwischenbetrieblich');
                    props.setSystemgrenzen(props.Systemgrenzen);
                  } else {
                    props.setSystemgrenzen(
                      props.Systemgrenzen.filter(
                        (name) => 'Zwischenbetrieblich' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>Anwender</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Unternehmensführung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Zielgruppe.push('Unternehmensführung');
                    props.setZielgruppe(props.Zielgruppe);
                  } else {
                    props.setZielgruppe(
                      props.Zielgruppe.filter(
                        (name) => 'Unternehmensführung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Umweltbeauftragter"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Zielgruppe.push('Umweltbeauftragter');
                    props.setZielgruppe(props.Zielgruppe);
                  } else {
                    props.setZielgruppe(
                      props.Zielgruppe.filter(
                        (name) => 'Umweltbeauftragter' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Fachabteilung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Zielgruppe.push('Fachabteilung');
                    props.setZielgruppe(props.Zielgruppe);
                  } else {
                    props.setZielgruppe(
                      props.Zielgruppe.filter((name) => 'Fachabteilung' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mitarbeiter"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Zielgruppe.push('Mitarbeiter');
                    props.setZielgruppe(props.Zielgruppe);
                  } else {
                    props.setZielgruppe(
                      props.Zielgruppe.filter((name) => 'Mitarbeiter' != name)
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Externe Stakeholder"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.Zielgruppe.push('externe Stakeholder');
                    props.setZielgruppe(props.Zielgruppe);
                  } else {
                    props.setZielgruppe(
                      props.Zielgruppe.filter(
                        (name) => 'externe Stakeholder' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>Integrationsgrad</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Stand-Alone"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.GradDerIntegrierung.push('Stand-Alone');
                    props.setGradDerIntegrierung(props.GradDerIntegrierung);
                  } else {
                    props.setGradDerIntegrierung(
                      props.GradDerIntegrierung.filter(
                        (name) => 'Stand-Alone' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Add-On"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.GradDerIntegrierung.push('Add-On');
                    props.setGradDerIntegrierung(props.GradDerIntegrierung);
                  } else {
                    props.setGradDerIntegrierung(
                      props.GradDerIntegrierung.filter(
                        (name) => 'Add-On' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Integriert"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.GradDerIntegrierung.push('integriert');
                    props.setGradDerIntegrierung(props.GradDerIntegrierung);
                  } else {
                    props.setGradDerIntegrierung(
                      props.GradDerIntegrierung.filter(
                        (name) => 'integriert' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="SaaS-Lösung"
                onChange={function (event, checked) {
                  if (checked === true) {
                    props.GradDerIntegrierung.push('SaaS-Lösung');
                    props.setGradDerIntegrierung(props.GradDerIntegrierung);
                  } else {
                    props.setGradDerIntegrierung(
                      props.GradDerIntegrierung.filter(
                        (name) => 'SaaS-Lösung' != name
                      )
                    );
                  }
                  console.log(checked);
                }}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
