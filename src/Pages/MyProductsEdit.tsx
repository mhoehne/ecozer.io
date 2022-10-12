import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import {
    Box, Container, Grid, Paper, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

import { AccountType, getProduct, ProductType, PutProducts } from '../API';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import SampleImg from '../images/sample-img.png';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

interface MyProductsEditProps {
  account: AccountType | null;
}

export default function MyProductsEdit(props: MyProductsEditProps) {
  const navigate = useNavigate();
  if (props.account?._id === undefined) {
    alert('Error: Account ID is not expected to be undefined');
    return null;
  }
  const params = useParams();

  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProduct(params.id ?? '-1').then((result) => {
      setProduct(result.data);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (product === undefined) {
      return;
    }
    // onSubmit call setProduct, make sure that the values are set correctly
    PutProducts(product)
      .then(() => {
        return navigate('/my-products');
      })
      .catch((msg) => {
        alert('error');
      });
  };

  return (
    <>
      <Box
        sx={{ my: 10 }}
        component="form"
        noValidate
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <Container component="main" maxWidth="md">
          {product ? (
            <ProductDetailViewCard product={product} setProduct={setProduct} />
          ) : null}
          {product ? (
            <MorphologicalBoxVertical
              product={product}
              setProduct={setProduct}
            />
          ) : null}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={0}
            sx={{ mt: 3 }}
          >
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              startIcon={<SaveOutlinedIcon />}
              sx={{ color: 'background.paper' }}
              href=""
              type="submit"
            >
              Speichern
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
