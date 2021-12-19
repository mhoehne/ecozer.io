import { Container } from '@mui/material';
import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import ImageBanner from '../Components/ImageBanner';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import SearchBar from '../Components/SearchBar';
import SearchBarBoxed from '../Components/SearchBarBoxed';


export default function Search() {


  return (

      <>
        <Navigation/>
        <ImageBanner/>
        <Container>
        <SearchBarBoxed/>
          
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