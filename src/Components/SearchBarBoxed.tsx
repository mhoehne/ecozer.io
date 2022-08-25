import SearchBar from '../Components/SearchBar';
import { Stack, Button, Tooltip, TextField, Autocomplete } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductType } from '../API';

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
  // products: ProductType;
}

export default function SearchBarBoxed(props: SearchBarBoxedProps) {
  // const publishedProducts = [props.products.productName]
  // const options = publishedProducts.map((option) => {
  //   const firstLetter = option.props.products.productName[0].toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
  //     ...option,
  //   };
  // });

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
            {/* {props.enableAutocompleteSearch ? (
              <>
              <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="With categories" />}
    />
</>
            ): null} */}
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
