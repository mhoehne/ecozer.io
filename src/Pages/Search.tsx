import { useEffect, useState } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';

import { AccountType, GetProducts, ProductType } from '../API';
import AccordionFilter from '../Components/AccordionFilter';
import ImageBanner from '../Components/ImageBanner';
import ImgMediaCard from '../Components/ImgMediaCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import BannerBackgroundImage from '../images/layered-waves-haikei_1.svg';

interface SearchProps {
  account: AccountType | null;
}

export default function Search(props: SearchProps) {
  const [searchterm, setSearchterm] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);
  const account_id = props.account?._id;
  const [zielgruppe, setZielgruppe] = useState<string[]>([]);
  const [anwendungsbereich, setAnwendungsbereich] = useState<string[]>([]);
  const [gradDerIntegrierung, setGradDerIntegrierung] = useState<string[]>([]);
  const [objektAspekt, setObjektAspekt] = useState<string[]>([]);
  const [systemgrenzen, setSystemgrenzen] = useState<string[]>([]);
  const [betrachtungskonzept, setBetrachtungskonzept] = useState<string[]>([]);

  useEffect(() => {
    GetProducts(
      searchterm,
      null,
      zielgruppe,
      anwendungsbereich,
      gradDerIntegrierung,
      objektAspekt,
      systemgrenzen,
      betrachtungskonzept,
      'published'
    )
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, [
    searchterm,
    zielgruppe,
    anwendungsbereich,
    gradDerIntegrierung,
    objektAspekt,
    systemgrenzen,
    betrachtungskonzept,
  ]);

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
          backgroundImage: `url(${BannerBackgroundImage})`,
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
            Produktsuche
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hier kannst du nach Produkten suchen und nach deinen Kriterien
            filtern, um deine passende Firmensoftware zu finden!
          </Typography>
        </Container>
      </Box>
      <SearchBarBoxed
        enableAddProductButton={false}
        enableAutocompleteSearch={true}
        setSearchterm={setSearchterm}
      />
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        minHeight="115rem"
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={3}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            px={{ xs: 2, sm: 2 }}
            py={{ xs: 0, sm: 0 }}
            mx={{ xs: 4, sm: 4 }}
            mt={{ xs: 4, sm: 4 }}
            mb={{ xs: 50, sm: 50 }}
            bgcolor="background.paper"
            color="text.primary"
          >
            <AccordionFilter
              setZielgruppe={setZielgruppe}
              Zielgruppe={zielgruppe}
              setAnwendungsbereich={setAnwendungsbereich}
              Anwendungsbereich={anwendungsbereich}
              setGradDerIntegrierung={setGradDerIntegrierung}
              GradDerIntegrierung={gradDerIntegrierung}
              setObjektAspekt={setObjektAspekt}
              ObjektAspekt={objektAspekt}
              setSystemgrenzen={setSystemgrenzen}
              Systemgrenzen={systemgrenzen}
              setBetrachtungskonzept={setBetrachtungskonzept}
              Betrachtungskonzept={betrachtungskonzept}
            />
          </Box>
        </Grid>

        <Grid container item xs={12} sm={12} md={8} lg={8} xl={7} spacing={0}>
          {products.map((product) => {
            return (
              <Grid
                item
                key={product._id}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
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
