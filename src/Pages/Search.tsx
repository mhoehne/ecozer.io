import Grid from '@mui/material/Grid';
import ImageBanner from '../Components/ImageBanner';
import Box from '@mui/material/Box';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import AccordionFilter from '../Components/AccordionFilter';


export default function Search() {


  return (

      <>
        <ImageBanner/>
        <SearchBarBoxed/>

        <Grid
        container
        rowSpacing={0} 
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >

          <Grid
          item xs={4} sm={4}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
            <Box  px={{ xs: 2, sm: 2}}
                  py={{ xs: 0, sm: 0}}
                  mx={{ xs: 4, sm: 4}}
                  my={{ xs: 4, sm: 4}}
                  bgcolor="background.paper"
                  color="text.primary">
              <AccordionFilter/>
            </Box>
          </Grid>

          <Grid 
            container
            item xs={8} sm={8}
            > 
              
              </Grid>



        </Grid>


            
        
      </>
  );
}