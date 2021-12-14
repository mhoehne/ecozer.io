import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';



export default function Overview() {


  return (

      <>
        <Navigation/>
        <Container>
          <Button variant="contained" href="/overview/product-detail">
          Link
          </Button>
          <Grid container spacing={0}> 
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImgMediaCard/>
            </Grid>
          </Grid>
        </Container>
        
      </>
  );
}