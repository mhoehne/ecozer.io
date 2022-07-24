import Container from '@mui/material/Container';
import ImgMediaCard from '../ImgMediaCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { ListNewestProducts, ProductType } from '../../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

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
          Neuste Produkte
        </Typography>
      </Container>

      {/* 3 newest products, filtered by newest creation date */}
      <Grid container item xs={12} sm={12} spacing={0}>
        {products.map((product) => {
          return (
            <Grid item key={product._id} xs={12} sm={4}>
              <ImgMediaCard Product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
