import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBar from '../Components/SearchBar';

export default function MyProducts() {


  return (

      <>
        <Navigation/>
        <Container>
          <SearchBar/>
        <Grid container spacing={0}> 
          <Grid item xs={12} sm={4}>
            <AddProductCard/>
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