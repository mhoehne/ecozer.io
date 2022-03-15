import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import ImageBanner from '../Components/ImageBanner';
import { useEffect, useState } from 'react';
import { GetProducts, ProductType } from '../API';

export default function MyProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    GetProducts()
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, []);

  return (
    <>
      <ImageBanner />
      <SearchBarBoxed />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          {/* <AddProductCard/> */}
        </Grid>

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
