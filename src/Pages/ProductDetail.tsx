import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import Footer from '../Components/Footer';


export default function ProductDetail() {


  return (

      <>
         <Navigation/>
        <Container>
          <Button variant="contained" href="/">
          Link Back
          </Button>
          <Paper/>
          <Footer/>
        </Container>
      </>
  );
}