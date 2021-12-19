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

export default function MorphologicalBox() {

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
      px={{ xs: 2, sm: 4}}
      py={{ xs: 2, sm: 4}}
      bgcolor="background.paper"
      color="text.primary">
        <Container maxWidth="lg">

        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={3}>
          <Typography variant="h5">Merkmale</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">Ausprägungen</Typography>
        </Grid>
        <Grid item xs={3}>
        <Paper
            elevation={0}
            sx={{
              
              border: (theme) => `1px solid ${theme.palette.divider}`,
              flexWrap: 'wrap',
            }}
          >
        <Typography variant="h6">Anwendungsgebiert</Typography>
        </Paper>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="11" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="12" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="13" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="14" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="15" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="16" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungsobjekt</Typography>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="21" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="22" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="23" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="24" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="25" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="26" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungskonzept</Typography>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="31" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="32" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="33" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="34" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="35" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="36" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungsgrenzen</Typography>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="41" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="42" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="43" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="44" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="45" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="46" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Adressat/Anwender</Typography>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="51" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="52" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="53" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="54" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="55" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="56" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Integrationsgrad</Typography>
        </Grid>
        <Grid item xs={9}>
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
              size="small"
              value={formats}
              onChange={handleFormat}
              aria-label="selection"
            >
              <ToggleButton value="61" aria-label="1">
                Eins
              </ToggleButton>
              <ToggleButton value="62" aria-label="1">
                Zwei
              </ToggleButton>
              <ToggleButton value="63" aria-label="1">
                Drei
              </ToggleButton>
              <ToggleButton value="64" aria-label="1">
                Vier
              </ToggleButton>
              <ToggleButton value="65" aria-label="1">
                Fünf
              </ToggleButton>
              <ToggleButton value="66" aria-label="1">
                Sechs
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </div>
        </Grid>

      </Grid>
    </Box>

    </Container>
    </Box>
    </>
  );
}