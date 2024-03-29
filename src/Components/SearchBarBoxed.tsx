import { useEffect, useState } from 'react';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Autocomplete, Button, Stack, TextField, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { GetProducts, ProductType } from '../API';
import SearchBar from '../Components/SearchBar';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface SearchBarBoxedProps {
  enableAddProductButton: boolean;
  enableAutocompleteSearch: boolean;
  setSearchterm: Function;
}

export default function SearchBarBoxed(props: SearchBarBoxedProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    GetProducts(null, null, [], [], [], [], [], [], 'published').then(
      (result) => {
        setProducts(result.data.products);
      }
    );
  }, []);

  const options = products.map(({ productName, _id }) => {
    const firstLetter = productName[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      text: productName,
      _id,
    };
  });

  return (
    <>
      <Box
        mx={{ xs: 0, sm: 0 }}
        py={{ xs: 2, sm: 2 }}
        px={{ xs: 2, sm: 4 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {props.enableAutocompleteSearch ? (
              <>
                <Autocomplete
                  id="grouped-demo"
                  onChange={(event, obj) => {
                    console.log(event, obj);
                    if (obj != null) {
                      window.open(
                        `/search/product-detail/${obj._id}`,
                        '_blank'
                      );
                    }
                  }}
                  options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option?.text ?? option}
                  sx={{ width: '28.5vw' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Produktsuche" />
                  )}
                />
              </>
            ) : null}
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {props.enableAddProductButton ? (
                <>
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
                </>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
