import React, { useCallback, useEffect, useState } from 'react';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, Button, Container, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AccountType, GetProducts, ProductType } from '../API';
import ImgMediaCard from '../Components/ImgMediaCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
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
  tab: string | undefined;
}

export default function MyProducts(props: MyProductProps) {
  const [searchterm, setSearchterm] = useState<string | null>(null);
  const [value, setValue] = React.useState(props.tab == 'rejected' ? 2 : 0);
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

  let onProductDeleted = useCallback(
    (deletedProduct: ProductType) => {
      setProducts((prevRows) =>
        prevRows.filter((row) => row._id !== deletedProduct._id)
      );
    },
    [products]
  );

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
      null,
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

      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        my={{ xs: 0, sm: 0 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Grid container>
          <Grid item xs={5}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ borderBottom: 1, borderColor: 'divider' }}
                label="Veröffentlicht"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ borderBottom: 1, borderColor: 'divider' }}
                label="Prüfung ausstehend"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ borderBottom: 1, borderColor: 'divider' }}
                label="Abgelehnt"
                {...a11yProps(2)}
              />
            </Tabs>
          </Grid>
          <Grid item xs={7}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Tooltip title="" enterDelay={500} leaveDelay={200}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  href="/my-products/add-product"
                  sx={{}}
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                >
                  Produkt erstellen
                </Button>
              </Tooltip>
            </Stack>
            {/* <SearchBarBoxed
              enableAddProductButton={false}
              enableAutocompleteSearch={false}
              setSearchterm={setSearchterm}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={0}>
          <Grid container spacing={0} justifyContent="center">
            {products.map((product) => {
              return (
                <Grid item key={product._id} xs={10} sm={8}>
                  <ImgMediaCard
                    Product={product}
                    enableActionButtons={true}
                    Account={props.account}
                    onProductDeleted={onProductDeleted}
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
                <Grid item key={product._id} xs={10} sm={8}>
                  <ImgMediaCard
                    Product={product}
                    enableActionButtons={true}
                    Account={props.account}
                    onProductDeleted={onProductDeleted}
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
                <Grid item key={product._id} xs={10} sm={8}>
                  <ImgMediaCard
                    Product={product}
                    enableActionButtons={true}
                    Account={props.account}
                    onProductDeleted={onProductDeleted}
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
