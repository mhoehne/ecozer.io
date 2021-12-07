import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack } from '@mui/material';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import CustomSeparator from '../Components/Breadcrumbs';
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

  return (
    < > {/* fragment */}
    <Navigation />
    
    
    <Container>
    
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <Card sx={{ margin: '1rem', padding: '1rem', height: '30rem',}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Feature
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      </CardContent>
            <Stack spacing={20} direction="row"  >
              <EmailTextField/>
              <Button size="large" variant="contained" color="primary">Sign Up</Button>
            </Stack>
            </Card>
          
        </Grid>
        <Grid item xs={5}>
        <Card sx={{ margin: '1rem', padding: '1rem', height: '30rem',}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="370"
        image={earth_image}
      />
      </Card>
        </Grid>
      </Grid>

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
      <CustomSeparator />
    </Container>
    <Footer/>
  </>
    
  );
}