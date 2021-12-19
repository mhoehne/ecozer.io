import SearchBar from '../Components/SearchBar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function SearchBarBoxed() {


  return (

      <>
<Box>
          
          <Card sx={{p:2}}>
          <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={4}>
          </Grid>
          <Grid item xs={12} sm={4}>
          <SearchBar/>
          </Grid>
          </Grid>
          </Card>

          </Box>
          </>
            );
          }