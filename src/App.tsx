import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Breadcrumbs, Button, Paper, Stack } from '@mui/material';
import IconSidebar from './IconSidebar';
import ImgMediaCard from './ImgMediaCard';
import Grid from '@mui/material/Grid';
import CustomSeparator from './Breadcrumbs';
import FormPropsTextFields from './EmailTextField';





export default function App() {

/* GRID START*/  
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

/* Custom Counter */
const [count, setCount] = useState(0);
const incrementCounter = () => {
  setCount(count+1);
}

const decreaseCounter = () => {
  setCount(count-1);
}

  return (
    < > {/* fragment */}
    <Container sx={{marginTop: '5rem',}}></Container>
    <Container><CustomSeparator/></Container>

    <Container>
      <Grid container spacing={5}>
        <Grid item xs={7}>
          <Item>
            <Typography gutterBottom variant="h4" component="div">Feature</Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography> 
            <Stack spacing={2} direction="row">
              <FormPropsTextFields/><Button size="large" variant="contained" color="primary">Sign Up</Button>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>IMAGE</Item>
        </Grid>
      </Grid>
    </Container>

    <Container>
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <Item><ImgMediaCard/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><ImgMediaCard/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><ImgMediaCard/></Item>
      </Grid>
    </Grid>

    <IconSidebar/>
    <Container sx={{backgroundColor: '#303030'}}>Footer with Grid</Container>
    <Box sx={{
              marginLeft: '50px',}}>
      <Button onClick={incrementCounter} >Count {count}</Button>
      <Button onClick={decreaseCounter} >-1</Button>
      <Typography variant="h4" component="h1" gutterBottom color="#FFF">
        React App v5 example with TypeScript
      </Typography>
      <ProTip />
      <Copyright />
    </Box>
  </Container>
  </>
    
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}