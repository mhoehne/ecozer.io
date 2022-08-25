import React from 'react';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import { useEffect, useState } from 'react';
import { GetProducts, ProductType, AccountType } from '../API';
import { Typography, Container, Box, Tab, Tabs } from '@mui/material';
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface MyProductProps {
  account: AccountType;
}

export default function MyProducts(props: MyProductProps) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [products, setProducts] = useState<ProductType[]>([]);
  const account_id = props.account._id;
  const zielgruppe: string[] = [];
  const anwendungsbereich: string[] = [];
  const gradDerIntegrierung: string[] = [];
  const objektAspekt: string[] = [];
  const systemgrenzen: string[] = [];
  const betrachtungskonzept: string[] = [];

  useEffect(() => {
    let state = 'pending';
    if (value == 0) {
      state = 'published';
    }
    if (value == 1) {
      state = 'pending';
    }
    if (value == 2) {
      state = 'rejected';
    }
    GetProducts(
      account_id ?? null,
      zielgruppe,
      anwendungsbereich,
      gradDerIntegrierung,
      objektAspekt,
      systemgrenzen,
      betrachtungskonzept,
      state
    )
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, [value]);

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
      <SearchBarBoxed
        enableAddProductButton={true}
        enableAutocompleteSearch={false}
      />

      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        my={{ xs: 0, sm: 0 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Veröffentlicht" {...a11yProps(0)} />
            <Tab label="Prüfung ausstehend" {...a11yProps(1)} />
            <Tab label="Abgelehnt" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={0}>
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
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={0}>
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
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={0}>
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
        </Grid>
      </TabPanel>
    </>
  );
}
