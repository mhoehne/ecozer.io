import { useCallback } from 'react';
import { Button, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

{
  /* TODO */
}
{
  /* 
  # 
  
  */
}

{
  /* Note: */
}

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
        <Tooltip title="Alle ausgewählten Filter zurücksetzen">
          <Button
            size="small"
            startIcon={<DisabledByDefaultOutlinedIcon />}
            sx={{ mb: 1 }}
            onClick={function () {
              props.setAnwendungsbereich([]);
              props.setBetrachtungskonzept([]);
              props.setGradDerIntegrierung([]);
              props.setObjektAspekt([]);
              props.setSystemgrenzen([]);
              props.setZielgruppe([]);
            }}
          >
            zurücksetzen
          </Button>
        </Tooltip>
        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes(
                      'Gesetzeskonformität'
                    )}
                  />
                }
                label="Gesetzeskonformität"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Gesetzeskonformität',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Gesetzeskonformität' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes('Zertifizierung')}
                  />
                }
                label="Zertifizierung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Zertifizierung',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Zertifizierung' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes(
                      'Ökobilanzierung'
                    )}
                  />
                }
                label="Ökobilanzierung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Ökobilanzierung',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Ökobilanzierung' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes('Lebenszyklus')}
                  />
                }
                label="Lebenszyklus"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Lebenszyklus',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Lebenszyklus' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes(
                      'Berichterstattung'
                    )}
                  />
                }
                label="Berichterstattung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Berichterstattung',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Berichterstattung' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes(
                      'Entscheidungsstützung'
                    )}
                  />
                }
                label="Entscheidungsstützung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Entscheidungsstützung',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Entscheidungsstützung' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Anwendungsbereich.includes(
                      'Unternehmensverbünde'
                    )}
                  />
                }
                label="Unternehmensverbünde"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newAnwendungsbereich = [
                        ...props.Anwendungsbereich,
                        'Unternehmensverbünde',
                      ];
                      props.setAnwendungsbereich(newAnwendungsbereich);
                    } else {
                      props.setAnwendungsbereich(
                        props.Anwendungsbereich.filter(
                          (name) => 'Unternehmensverbünde' != name
                        )
                      );
                    }
                    console.log(checked, props.Anwendungsbereich);
                  },
                  [props.Anwendungsbereich]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox checked={props.ObjektAspekt.includes('Abfall')} />
                }
                label="Abfall"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [...props.ObjektAspekt, 'Abfall'];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter((name) => 'Abfall' != name)
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.ObjektAspekt.includes('Anlagen')} />
                }
                label="Anlagen"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [
                        ...props.ObjektAspekt,
                        'Anlagen',
                      ];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter((name) => 'Anlagen' != name)
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.ObjektAspekt.includes('Gefahrstoff')}
                  />
                }
                label="Gefahrstoff"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [
                        ...props.ObjektAspekt,
                        'Gefahrstoff',
                      ];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter(
                          (name) => 'Gefahrstoff' != name
                        )
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.ObjektAspekt.includes('Emission')} />
                }
                label="Emission"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [
                        ...props.ObjektAspekt,
                        'Emission',
                      ];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter((name) => 'Emission' != name)
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.ObjektAspekt.includes('Energie')} />
                }
                label="Energie"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [
                        ...props.ObjektAspekt,
                        'Energie',
                      ];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter((name) => 'Energie' != name)
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.ObjektAspekt.includes('Stoffe/Stoffstrom')}
                  />
                }
                label="Stoffe/Stoffstrom"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newObjektAspekt = [
                        ...props.ObjektAspekt,
                        'Stoffe/Stoffstrom',
                      ];
                      props.setObjektAspekt(newObjektAspekt);
                    } else {
                      props.setObjektAspekt(
                        props.ObjektAspekt.filter(
                          (name) => 'Stoffe/Stoffstrom' != name
                        )
                      );
                    }
                    console.log(checked, props.ObjektAspekt);
                  },
                  [props.ObjektAspekt]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox
                    checked={props.Betrachtungskonzept.includes(
                      'Verwaltungszentriert'
                    )}
                  />
                }
                label="Verwaltungszentriert"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newBetrachtungskonzept = [
                        ...props.Betrachtungskonzept,
                        'Verwaltungszentriert',
                      ];
                      props.setBetrachtungskonzept(newBetrachtungskonzept);
                    } else {
                      props.setBetrachtungskonzept(
                        props.Betrachtungskonzept.filter(
                          (name) => 'Verwaltungszentriert' != name
                        )
                      );
                    }
                    console.log(checked, props.Betrachtungskonzept);
                  },
                  [props.Betrachtungskonzept]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Betrachtungskonzept.includes(
                      'Bewertungszentriert'
                    )}
                  />
                }
                label="Bewertungszentriert"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newBetrachtungskonzept = [
                        ...props.Betrachtungskonzept,
                        'Bewertungszentriert',
                      ];
                      props.setBetrachtungskonzept(newBetrachtungskonzept);
                    } else {
                      props.setBetrachtungskonzept(
                        props.Betrachtungskonzept.filter(
                          (name) => 'Bewertungszentriert' != name
                        )
                      );
                    }
                    console.log(checked, props.Betrachtungskonzept);
                  },
                  [props.Betrachtungskonzept]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Betrachtungskonzept.includes(
                      'Managementzentriert'
                    )}
                  />
                }
                label="Managementzentriert"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newBetrachtungskonzept = [
                        ...props.Betrachtungskonzept,
                        'Managementzentriert',
                      ];
                      props.setBetrachtungskonzept(newBetrachtungskonzept);
                    } else {
                      props.setBetrachtungskonzept(
                        props.Betrachtungskonzept.filter(
                          (name) => 'Managementzentriert' != name
                        )
                      );
                    }
                    console.log(checked, props.Betrachtungskonzept);
                  },
                  [props.Betrachtungskonzept]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox
                    checked={props.Systemgrenzen.includes('Standort/Betrieb')}
                  />
                }
                label="Standort/Betrieb"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newSystemgrenzen = [
                        ...props.Systemgrenzen,
                        'Standort/Betrieb',
                      ];
                      props.setSystemgrenzen(newSystemgrenzen);
                    } else {
                      props.setSystemgrenzen(
                        props.Systemgrenzen.filter(
                          (name) => 'Standort/Betrieb' != name
                        )
                      );
                    }
                    console.log(checked, props.Systemgrenzen);
                  },
                  [props.Systemgrenzen]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.Systemgrenzen.includes('Prozess')} />
                }
                label="Prozess"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newSystemgrenzen = [
                        ...props.Systemgrenzen,
                        'Prozess',
                      ];
                      props.setSystemgrenzen(newSystemgrenzen);
                    } else {
                      props.setSystemgrenzen(
                        props.Systemgrenzen.filter((name) => 'Prozess' != name)
                      );
                    }
                    console.log(checked, props.Systemgrenzen);
                  },
                  [props.Systemgrenzen]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.Systemgrenzen.includes('Produkt')} />
                }
                label="Produkt"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newSystemgrenzen = [
                        ...props.Systemgrenzen,
                        'Produkt',
                      ];
                      props.setSystemgrenzen(newSystemgrenzen);
                    } else {
                      props.setSystemgrenzen(
                        props.Systemgrenzen.filter((name) => 'Produkt' != name)
                      );
                    }
                    console.log(checked, props.Systemgrenzen);
                  },
                  [props.Systemgrenzen]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Systemgrenzen.includes(
                      'Zwischenbetrieblich'
                    )}
                  />
                }
                label="Zwischenbetrieblich"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newSystemgrenzen = [
                        ...props.Systemgrenzen,
                        'Zwischenbetrieblich',
                      ];
                      props.setSystemgrenzen(newSystemgrenzen);
                    } else {
                      props.setSystemgrenzen(
                        props.Systemgrenzen.filter(
                          (name) => 'Zwischenbetrieblich' != name
                        )
                      );
                    }
                    console.log(checked, props.Systemgrenzen);
                  },
                  [props.Systemgrenzen]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox
                    checked={props.Zielgruppe.includes('Unternehmensführung')}
                  />
                }
                label="Unternehmensführung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newZielgruppe = [
                        ...props.Zielgruppe,
                        'Unternehmensführung',
                      ];
                      props.setZielgruppe(newZielgruppe);
                    } else {
                      props.setZielgruppe(
                        props.Zielgruppe.filter(
                          (name) => 'Unternehmensführung' != name
                        )
                      );
                    }
                    console.log(checked, props.Zielgruppe);
                  },
                  [props.Zielgruppe]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Zielgruppe.includes('Umweltbeauftragter')}
                  />
                }
                label="Umweltbeauftragter"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newZielgruppe = [
                        ...props.Zielgruppe,
                        'Umweltbeauftragter',
                      ];
                      props.setZielgruppe(newZielgruppe);
                    } else {
                      props.setZielgruppe(
                        props.Zielgruppe.filter(
                          (name) => 'Umweltbeauftragter' != name
                        )
                      );
                    }
                    console.log(checked, props.Zielgruppe);
                  },
                  [props.Zielgruppe]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Zielgruppe.includes('Fachabteilung')}
                  />
                }
                label="Fachabteilung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newZielgruppe = [
                        ...props.Zielgruppe,
                        'Fachabteilung',
                      ];
                      props.setZielgruppe(newZielgruppe);
                    } else {
                      props.setZielgruppe(
                        props.Zielgruppe.filter(
                          (name) => 'Fachabteilung' != name
                        )
                      );
                    }
                    console.log(checked, props.Zielgruppe);
                  },
                  [props.Zielgruppe]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Zielgruppe.includes('Mitarbeiter')}
                  />
                }
                label="Mitarbeiter"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newZielgruppe = [
                        ...props.Zielgruppe,
                        'Mitarbeiter',
                      ];
                      props.setZielgruppe(newZielgruppe);
                    } else {
                      props.setZielgruppe(
                        props.Zielgruppe.filter((name) => 'Mitarbeiter' != name)
                      );
                    }
                    console.log(checked, props.Zielgruppe);
                  },
                  [props.Zielgruppe]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.Zielgruppe.includes('Externe Stakeholder')}
                  />
                }
                label="Externe Stakeholder"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newZielgruppe = [
                        ...props.Zielgruppe,
                        'Externe Stakeholder',
                      ];
                      props.setZielgruppe(newZielgruppe);
                    } else {
                      props.setZielgruppe(
                        props.Zielgruppe.filter(
                          (name) => 'Externe Stakeholder' != name
                        )
                      );
                    }
                    console.log(checked, props.Zielgruppe);
                  },
                  [props.Zielgruppe]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
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
                control={
                  <Checkbox
                    checked={props.GradDerIntegrierung.includes('Stand-Alone')}
                  />
                }
                label="Stand-Alone"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newGradDerIntegrierung = [
                        ...props.GradDerIntegrierung,
                        'Stand-Alone',
                      ];
                      props.setGradDerIntegrierung(newGradDerIntegrierung);
                    } else {
                      props.setGradDerIntegrierung(
                        props.GradDerIntegrierung.filter(
                          (name) => 'Stand-Alone' != name
                        )
                      );
                    }
                    console.log(checked, props.GradDerIntegrierung);
                  },
                  [props.GradDerIntegrierung]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.GradDerIntegrierung.includes('Add-On')}
                  />
                }
                label="Add-On"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newGradDerIntegrierung = [
                        ...props.GradDerIntegrierung,
                        'Add-On',
                      ];
                      props.setGradDerIntegrierung(newGradDerIntegrierung);
                    } else {
                      props.setGradDerIntegrierung(
                        props.GradDerIntegrierung.filter(
                          (name) => 'Add-On' != name
                        )
                      );
                    }
                    console.log(checked, props.GradDerIntegrierung);
                  },
                  [props.GradDerIntegrierung]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.GradDerIntegrierung.includes('Integriert')}
                  />
                }
                label="Integriert"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newGradDerIntegrierung = [
                        ...props.GradDerIntegrierung,
                        'Integriert',
                      ];
                      props.setGradDerIntegrierung(newGradDerIntegrierung);
                    } else {
                      props.setGradDerIntegrierung(
                        props.GradDerIntegrierung.filter(
                          (name) => 'Integriert' != name
                        )
                      );
                    }
                    console.log(checked, props.GradDerIntegrierung);
                  },
                  [props.GradDerIntegrierung]
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.GradDerIntegrierung.includes('SaaS-Lösung')}
                  />
                }
                label="SaaS-Lösung"
                onChange={useCallback(
                  function (event, checked) {
                    if (checked === true) {
                      const newGradDerIntegrierung = [
                        ...props.GradDerIntegrierung,
                        'SaaS-Lösung',
                      ];
                      props.setGradDerIntegrierung(newGradDerIntegrierung);
                    } else {
                      props.setGradDerIntegrierung(
                        props.GradDerIntegrierung.filter(
                          (name) => 'SaaS-Lösung' != name
                        )
                      );
                    }
                    console.log(checked, props.GradDerIntegrierung);
                  },
                  [props.GradDerIntegrierung]
                )}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
