import Container from '@mui/material/Container';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import { Box, Button, Grid } from '@mui/material';
import Item from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { CreateProduct } from '../API';

export default function AddProduct() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // TODO: image import for product image
    // const productImage = data.get('productImage')?.

    const productName = data.get('productName')?.toString();

    if (productName === undefined) {
      alert('invalid or missing product name');
      return;
    }

    const product = {
      productName,
    };

    //   CreateProduct(product)
    //     .then((product) => {
    //       alert('success');
    //       // success
    //     })
    //     .catch((msg) => {
    //       alert('error');
    //       // error
    //     });
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          my: 15,
        }}
      >
        {/* needs props to get field values */}
        <ProductDetailViewCard />

        {/* needs props to get boolean values */}
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
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ color: 'background.paper' }}
            >
              Erstellen
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
