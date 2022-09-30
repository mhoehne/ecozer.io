import Container from '@mui/material/Container';
import ImgMediaCard from '../ImgMediaCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { ListMostViewedProducts, ProductType } from '../../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function MostClickedProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    ListMostViewedProducts()
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, []);

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
          Meistaufgerufene Produkte
        </Typography>
      </Container>

      {/* 3 most clicked products, filtered by click counter */}
      <Grid container spacing={0}>
        <Grid container spacing={0} justifyContent="center">
          {products.map((product) => {
            return (
              <Grid item key={product._id} xs={10} sm={8}>
                <ImgMediaCard
                  Product={product}
                  enableActionButtons={false}
                  Account={null}
                  onProductDeleted={() => {}}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
