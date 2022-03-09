import react from 'react';
import 
{ 
  Box, 
  Container, 
  Grid 
} from '@mui/material';
import Typography from '@mui/material/Typography';
import LeftMainPanelGrid from '../Components/LeftMainPanelGrid';
import TotalVisits from '../Components/Dashboard/TotalVisits';
import LatestVisits from '../Components/Dashboard/LatestVisits';
import UserProducts from '../Components/Dashboard/UserProducts';


export default function Dashboard() {


  return (

    <>
      <title>
        Dashboard
      </title>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalVisits/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalVisits/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalVisits/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalVisits/>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestVisits/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <UserProducts/>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
}