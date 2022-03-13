import 
{ 
  styled
} from '@mui/material/styles';
import Container from '@mui/material/Container';
import 
{ 
  Paper 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import HeroBanner from '../Components/HeroBanner';
import Typography from '@mui/material/Typography';
import HowItWorks from '../Components/HowItWorks';





export default function Home() {

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

Item.defaultProps = {
  square: true,
};

  return (
    <>
    
    <HeroBanner/>
      <Container sx={{mt: 5}}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Neuste Produkte
        </Typography>
      </Container>

      {/* 3 newest products, filtered by newest creation date */}
      <Grid container spacing={0}>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
    </Grid>

      <Container sx={{mt: 5}}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Meist angeklickte Produkte
        </Typography>
      </Container>

      {/* 3 most clicked products, filtered by click counter */}
      <Grid container spacing={0}>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
      <Grid item xs={4}>
        {/* <ImgMediaCard/> */}
      </Grid>
    </Grid>

    
    
    <Container>
      <HowItWorks/>
    </Container>
    
  </>
    
  );
}