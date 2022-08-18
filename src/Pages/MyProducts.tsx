import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import ImageBanner from '../Components/ImageBanner';
import { useEffect, useState } from 'react';
import { GetProducts, ProductType, AccountType } from '../API';
import { Typography, Container, Box } from '@mui/material';
import BannerBackground2 from '../images/layered-waves-haikei_2.svg';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface MyProductProps {
  account: AccountType;
}

export default function MyProducts(props: MyProductProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const account_id = props.account._id;
  const zielgruppe: string[] = [];
  const anwendungsbereich: string[] = [];
  const gradDerIntegrierung: string[] = [];
  const objektAspekt: string[] = [];
  const systemgrenzen: string[] = [];
  const betrachtungskonzept: string[] = [];

  useEffect(() => {
    GetProducts(
      account_id ?? null,
      zielgruppe,
      anwendungsbereich,
      gradDerIntegrierung,
      objektAspekt,
      systemgrenzen,
      betrachtungskonzept
    )
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 12,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${BannerBackground2})`,
        }}
      >
        <Container maxWidth={false}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Deine Produktübersicht
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hier kannst du all deine Produkte ansehen, neue erstellen und
            bestehende bearbeiten!
          </Typography>
        </Container>
      </Box>
      <SearchBarBoxed enableAddProductButton={true} />
      <Grid container spacing={0} justifyContent="center">
        {products.map((product) => {
          return (
            <Grid item key={product._id} xs={12} sm={10}>
              <ImgMediaCard
                Product={product}
                enableActionButtons={true}
                Account={props.account}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
