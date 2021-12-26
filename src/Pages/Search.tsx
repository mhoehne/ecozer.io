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
import MorphologicalBox from '../Components/MorphologicalBox';
import AccordionFilter from '../Components/AccordionFilter';


export default function Search() {


  return (

      <>
        <ImageBanner/>
        <Container>
        <SearchBarBoxed/>
        </Container>

        <Grid
        container
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        >

          <Grid
          item xs={3} sm={3}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          
          >
            <Container>
            <AccordionFilter/>
            </Container>
          </Grid>

          <Grid 
            item xs={9} sm={9}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            > 

                <Grid item xs={4} sm={4}>
                  <ImgMediaCard/>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <ImgMediaCard/>
                </Grid>
                <Grid item xs={4} sm={4}>
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



        </Grid>


            
        
      </>
  );
}