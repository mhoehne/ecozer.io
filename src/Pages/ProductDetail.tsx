import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function ProductDetail() {


  return (

      <>
         <Navigation/>
        <Container>
          <Button variant="contained" href="/">
          Link Back
          </Button>
        </Container>
      </>
  );
}