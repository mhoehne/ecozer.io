import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ListNewestProducts, ProductType } from '../../API';
import ImgMediaCard from '../ImgMediaCard';

export default function NewestProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    ListNewestProducts()
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
          Die neuesten Produkte
        </Typography>
      </Container>

      {/* 3 newest products, filtered by newest creation date */}
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
