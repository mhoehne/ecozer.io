import SearchBar from '../Components/SearchBar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function SearchBarBoxed() {


  return (

      <>
        <Box 
          px={{ xs: 2, sm: 2}}
          py={{ xs: 2, sm: 2}}
          bgcolor="background.paper"
          color="text.primary">
          
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4}>
                </Grid>
                <Grid item xs={12} sm={4}>
                </Grid>
                <Grid item xs={12} sm={4}>
                <SearchBar/>
                </Grid>
              </Grid>

          </Box>
          </>
            );
          }