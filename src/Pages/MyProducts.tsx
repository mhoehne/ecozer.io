import Navigation from '../Components/Navigation';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import ImageBanner from '../Components/ImageBanner';


export default function MyProducts() {


  return (

      <>
        <Navigation/>
        <ImageBanner/>
          <SearchBarBoxed/>
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
      </>
  );
}