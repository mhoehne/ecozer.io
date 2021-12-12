import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack } from '@mui/material';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import Navigation from '../Components/Navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import earth_image from '../images/earth_image.png';
import EmailTextField from '../Components/EmailTextField';
import Footer from '../Components/Footer';




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
    <Navigation />
    
    
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
    <Footer/>
  </>
    
  );
}