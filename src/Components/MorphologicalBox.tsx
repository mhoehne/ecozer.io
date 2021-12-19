import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MorphologicalBox() {


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
        <Typography variant="h6">Anwendungsgebiert</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungsobjekt</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungskonzept</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Betrachtungsgrenzen</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Adressat/Anwender</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>
        <Grid item xs={3}>
        <Typography variant="h6">Integrationsgrad</Typography>
        </Grid>
        <Grid item xs={9}>
        <Button variant="contained" href="/search">1</Button>
        </Grid>

      </Grid>
    </Box>

    </Container>
    </Box>
    </>
  );
}