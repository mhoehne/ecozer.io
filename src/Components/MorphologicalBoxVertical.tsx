import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

export default function MorphologicalBoxVertical() {

  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (

    <>
    <Box 
      px={{ xs: 6, sm: 6}}
      py={{ xs: 2, sm: 2}}
      mx={{xs: 0, sm: 0}}
      my={{xs: 0, sm: 0}}
      sx={{ width: '100%' }}
      bgcolor="background.paper"
      color="text.primary">

      <Box sx={{ width: '100%', my: 3 }}>
        <Typography 
          variant="h4"
          align="center"
          sx={{m: 5}}
          >Mermale & Ausprägungen
        </Typography>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}>


        <Grid item xs="auto">
        <Typography align="center" variant="h6">Anwendungsgebiet</Typography>

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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Gesetzeskonformität" aria-label="Gesetzeskonformität">
                Gesetzeskonformität
              </ToggleButton>
              <ToggleButton value="Zertifizierung" aria-label="Zertifizierung">
                Zertifizierung
              </ToggleButton>
              <ToggleButton value="Bilanzierung" aria-label="Bilanzierung">
                Bilanzierung
              </ToggleButton>
              <ToggleButton value="Lebenszyklus" aria-label="Lebenszyklus">
                Lebenszyklus
              </ToggleButton>
              <ToggleButton value="Berichterstattung" aria-label="Berichterstattung">
                Berichterstattung
              </ToggleButton>
              <ToggleButton value="Entscheidungsunterstützung" aria-label="Entscheidungsunterstützung">
                Entscheidungsunterstützung
              </ToggleButton>
              <ToggleButton value="Unternehmensverbünde" aria-label="Unternehmensverbünde">
                Unternehmensverbünde
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs="auto">
        <Typography align="center" variant="h6">Betrachtungsobjekt</Typography>
        
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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Abfall" aria-label="Abfall">
                Abfall
              </ToggleButton>
              <ToggleButton value="Anlagen" aria-label="Anlagen">
                Anlagen
              </ToggleButton>
              <ToggleButton value="Gefahrstoff" aria-label="Gefahrstoff">
                Gefahrstoff
              </ToggleButton>
              <ToggleButton value="Emission" aria-label="Emission">
                Emission
              </ToggleButton>
              <ToggleButton value="Energie" aria-label="Energie">
                Energie
              </ToggleButton>
              <ToggleButton value="Stoff/Stoffstrom" aria-label="Stoff/Stoffstrom">
                Stoff/Stoffstrom
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs="auto">
        <Typography align="center" variant="h6">Betrachtungskonzept</Typography>
        
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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Verwaltungszentriert" aria-label="Verwaltungszentriert">
                Verwaltungszentriert
              </ToggleButton>
              <ToggleButton value="Bewertungszentriert" aria-label="Bewertungszentriert">
                Bewertungszentriert
              </ToggleButton>
              <ToggleButton value="Managementzentriert" aria-label="Managementzentriert">
                Managementzentriert
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs="auto">
        <Typography align="center" variant="h6">Betrachtungsgrenzen</Typography>
        
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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Standort/Betrieb" aria-label="Standort/Betrieb">
                Standort/Betrieb
              </ToggleButton>
              <ToggleButton value="Prozess" aria-label="Prozess">
                Prozess
              </ToggleButton>
              <ToggleButton value="Produkt" aria-label="Produkt">
                Produkt
              </ToggleButton>
              <ToggleButton value="Zwischenbetrieblich" aria-label="Zwischenbetrieblich">
                Zwischenbetrieblich
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs="auto">
        <Typography align="center" variant="h6">Adressat/Anwender</Typography>
        
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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Unternehmensführung" aria-label="Unternehmensführung">
                Unternehmensführung
              </ToggleButton>
              <ToggleButton value="Umweltbeauftragter" aria-label="Umweltbeauftragter">
                Umweltbeauftragter
              </ToggleButton>
              <ToggleButton value="Fachabteilung" aria-label="Fachabteilung">
                Fachabteilung
              </ToggleButton>
              <ToggleButton value="Mitarbeiter" aria-label="Mitarbeiter">
                Mitarbeiter
              </ToggleButton>
              <ToggleButton value="Externe Stakeholder" aria-label="Externe Stakeholder">
                Externe Stakeholder
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs="auto">
        <Typography align="center" variant="h6">Integrationsgrad</Typography>
        
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
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
              fullWidth={true}
            >
              <ToggleButton value="Stand-Alone" aria-label="Stand-Alone">
                Stand-Alone
              </ToggleButton>
              <ToggleButton value="Add-On" aria-label="Add-On">
                Add-On
              </ToggleButton>
              <ToggleButton value="Intergriert" aria-label="Intergriert">
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