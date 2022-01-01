import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Button, Paper, Stack } from '@mui/material';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import HeroBanner from '../Components/HeroBanner';
import Typography from '@mui/material/Typography';





export default function Home() {

/* GRID START*/  
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

Item.defaultProps = {
  square: true,
};

  return (
    < > {/* fragment */}
    
    <HeroBanner/>
      <Container sx={{mt: 5}}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Neuste Produkte
        </Typography>
      </Container>
    <Container>
      <Grid container spacing={0}>
      <Grid item xs={4}>
        <ImgMediaCard/>
      </Grid>
      <Grid item xs={4}>
        <ImgMediaCard/>
      </Grid>
      <Grid item xs={4}>
        <ImgMediaCard/>
      </Grid>
    </Grid>
    </Container>

    
    
    <Container>
    </Container>
    
  </>
    
  );
}