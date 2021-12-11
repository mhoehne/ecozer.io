import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



export default function Overview() {


  return (

      <>
        <Navigation/>
        <Container>
          <Button variant="contained" href="/overview/product-detail">
          Link
          </Button>
        </Container>
        
      </>
  );
}