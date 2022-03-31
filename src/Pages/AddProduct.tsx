import Container from '@mui/material/Container';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import { Box, Button, Grid } from '@mui/material';
import Item from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

export default function AddProduct() {
  return (
    <>
      <Container
        sx={{
          my: 15,
        }}
      >
        <ProductDetailViewCard />

        <MorphologicalBoxVertical />
        <Grid
          container
          mt={3}
          md={12}
          spacing={1}
          alignContent="right"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ color: 'background.paper' }}
            >
              Erstellen
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
