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

export default function AccordionFilter() {


  return (

    <>
      <Box 
          px={{ xs: 2, sm: 2}}
          py={{ xs: 2, sm: 2}}
          mx={{ xs: 0, sm: 0}}
          my={{ xs: 4, sm: 4}}
          bgcolor="background.paper"
          color="text.primary">

<Typography variant="h6">Suchfilter</Typography>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Anwendungsgebiet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Gesetzeskonformität" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Zertifizierung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Bilanzierung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Lebenszyklus" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Berichterstattung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Entscheidungsstützung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Unternehmensverbünde" />
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Abfall" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Anlagen" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Gefahrstoff" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Emission" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Energie" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Stoffe/Stoffstrom" />
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Verwaltungszentriert" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Bewertungszentriert" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Managementzentriert" />
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Standort/Betrieb" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Prozess" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Produkt" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Zwischenbetrieblich" />
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Unternehmensführung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Umweltbeauftragter" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Fachabteilung" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Mitarbeiter" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Externe Stakeholder" />
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Stand-Alone" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Add-On" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Integriert" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      </Box>

    </>
  );
}
