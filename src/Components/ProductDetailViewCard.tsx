import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import SampleImg from '../images/sample-img.png';
import TextField from '@mui/material/TextField';

{
  /* 
  TODO: connect with create product API 
  - add create product button
*/
}

export default function ProductDetailViewCard() {
  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
        sx={{ width: '100%', mt: 2 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          sx={{ p: 2 }}
        >
          <Grid item xs={7}>
            <CardMedia
              component="img"
              alt="product image"
              height="300"
              image={SampleImg}
            />
          </Grid>
          <Grid item xs={5} sx={{ mt: -2 }}>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="outlined-read-only-input"
                label="Produktname"
                // defaultValue="Produktname"
                // InputProps={{
                //   readOnly: true,
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="outlined-read-only-input"
                label="Website"
                // defaultValue="www.produkt-homepage.de"
                // InputProps={{
                //   readOnly: true,
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="outlined-read-only-input"
                label="Unternehmen"
                // defaultValue="Unternehmen GmbH"
                // InputProps={{
                //   readOnly: true,
                // }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mx: 0, mt: 0 }}>
              <TextField
                margin="normal"
                fullWidth
                id="outlined-multiline-static"
                label="Produktbeschreibung"
                multiline
                rows={10}
                // defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                // InputProps={{
                //   readOnly: true,
                // }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
