import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function MostClickedProducts() {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Meist angesehenen Produkte
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
    </>
  );
}
