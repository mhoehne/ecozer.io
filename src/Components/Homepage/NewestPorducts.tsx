import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function NewestProducts() {
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
    </>
  );
}
