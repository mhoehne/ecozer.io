import * as React from 'react';
import { Tabs, Tab, Typography, Box, Container, Grid } from '@mui/material';
import ImgMediaCard from '../Components/ImgMediaCard';
import { useEffect, useState, useCallback } from 'react';
import { GetProducts, ProductType, AccountType } from '../API';

{
  /* TODO */
}
{
  /* # unable to see all pending, rejected or published product from all users */
}

{
  /* Note: */
}

{
  /*  */
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

interface AdminApprovalProps {
  account: AccountType;
}

export default function AdminApproval(props: AdminApprovalProps) {
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
    if (value == 2) {
      state = 'published';
    }
    if (value == 0) {
      state = 'pending';
    }
    if (value == 1) {
      state = 'rejected';
    }
    GetProducts(null, null, [], [], [], [], [], [], state)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, [value]);

  return (
    <>
      <Container>
        <Box
          px={{ xs: 2, sm: 2 }}
          py={{ xs: 2, sm: 2 }}
          mx={{ xs: 0, sm: 0 }}
          my={{ xs: 2, sm: 2 }}
          bgcolor="background.paper"
          color="text.primary"
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Prüfung ausstehend" {...a11yProps(0)} />
              <Tab label="Abgelehnt" {...a11yProps(1)} />
              <Tab label="Veröffentlicht" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={0}>
            <Grid container spacing={0} justifyContent="center">
              {products.map((product) => {
                return (
                  <Grid item key={product._id} xs={10} sm={10}>
                    <ImgMediaCard
                      Product={product}
                      enableActionButtons={true}
                      Account={props.account}
                      onProductDeleted={() => {}}
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
                  <Grid item key={product._id} xs={10} sm={10}>
                    <ImgMediaCard
                      Product={product}
                      enableActionButtons={true}
                      Account={props.account}
                      onProductDeleted={() => {}}
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
                  <Grid item key={product._id} xs={10} sm={10}>
                    <ImgMediaCard
                      Product={product}
                      enableActionButtons={true}
                      Account={props.account}
                      onProductDeleted={() => {}}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </>
  );
}
