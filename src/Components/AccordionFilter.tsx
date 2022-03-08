import Box from '@mui/material/Box';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 
{ 
  styled 
} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, 
{ 
  AccordionProps 
} from '@mui/material/Accordion';
import MuiAccordionSummary, 
{
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

<Typography variant="h6" sx={{m: 1}}>Suchfilter</Typography>



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
            <FormControlLabel control={<Checkbox />} label="Gesetzeskonformität" />
            <FormControlLabel control={<Checkbox />} label="Zertifizierung" />
            <FormControlLabel control={<Checkbox />} label="Bilanzierung" />
            <FormControlLabel control={<Checkbox />} label="Lebenszyklus" />
            <FormControlLabel control={<Checkbox />} label="Berichterstattung" />
            <FormControlLabel control={<Checkbox />} label="Entscheidungsstützung" />
            <FormControlLabel control={<Checkbox />} label="Unternehmensverbünde" />
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
            <FormControlLabel control={<Checkbox  />} label="Abfall" />
            <FormControlLabel control={<Checkbox  />} label="Anlagen" />
            <FormControlLabel control={<Checkbox  />} label="Gefahrstoff" />
            <FormControlLabel control={<Checkbox  />} label="Emission" />
            <FormControlLabel control={<Checkbox  />} label="Energie" />
            <FormControlLabel control={<Checkbox  />} label="Stoffe/Stoffstrom" />
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
            <FormControlLabel control={<Checkbox  />} label="Verwaltungszentriert" />
            <FormControlLabel control={<Checkbox  />} label="Bewertungszentriert" />
            <FormControlLabel control={<Checkbox  />} label="Managementzentriert" />
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
            <FormControlLabel control={<Checkbox  />} label="Standort/Betrieb" />
            <FormControlLabel control={<Checkbox  />} label="Prozess" />
            <FormControlLabel control={<Checkbox  />} label="Produkt" />
            <FormControlLabel control={<Checkbox  />} label="Zwischenbetrieblich" />
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
            <FormControlLabel control={<Checkbox  />} label="Unternehmensführung" />
            <FormControlLabel control={<Checkbox  />} label="Umweltbeauftragter" />
            <FormControlLabel control={<Checkbox  />} label="Fachabteilung" />
            <FormControlLabel control={<Checkbox  />} label="Mitarbeiter" />
            <FormControlLabel control={<Checkbox  />} label="Externe Stakeholder" />
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
            <FormControlLabel control={<Checkbox  />} label="Stand-Alone" />
            <FormControlLabel control={<Checkbox  />} label="Add-On" />
            <FormControlLabel control={<Checkbox  />} label="Integriert" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>



      </Box>

    </>
  );
}
