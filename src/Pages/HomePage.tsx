import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack } from '@mui/material';
import IconSidebar from '../Components/IconSidebar';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import CustomSeparator from '../Components/Breadcrumbs';
import TextField from '@mui/material/TextField';





export default function HomePage() {

/* GRID START*/  
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  return (
    < > {/* fragment */}
    <Container sx={{marginTop: '5rem',}}></Container>
    <Container><CustomSeparator/></Container>

    <Container>
      <Grid container spacing={5}>
        <Grid item xs={7}>
          <Item>
            <Typography gutterBottom variant="h4" component="div">Why You Should Sign Up Now!</Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography> 
            <Stack spacing={2} direction="row">
            <TextField
          id="outlined-required"
          size="small"
          label="E-Mail"
          defaultValue="hello@world.com"
        /><Button size="large" variant="contained" color="primary">Sign Up</Button>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>IMAGE</Item>
        </Grid>
      </Grid>
    </Container>

    <Container>
    <Grid container spacing={4}>
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

    <IconSidebar/>
    <Container sx={{backgroundColor: '#303030'}}>Footer with Grid</Container>
  </Container>
  <Container fixed maxWidth={false} sx={{backgroundColor: '#303030'}}>Footer with Grid</Container>
  </>
    
  );
}