import Container from '@mui/material/Container';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import { Box, Button, Grid } from '@mui/material';
import Item from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { CreateProduct, ProductType, AccountType } from '../API';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

//create new props
interface AddProductProps {
  account: AccountType | null;
}

export default function AddProduct(props: AddProductProps) {
  const navigate = useNavigate();
  if (props.account?._id === undefined) {
    alert('Error: Account ID is not expected to be undefined');
    return null;
  }
  const [product, setProduct] = useState<ProductType>({
    _id: undefined,
    account_id: props.account._id,
    productName: '',
    // productImage: string;
    productLink: '',
    productCompany: '',
    productDescription: '',
    zielgruppe: {
      Geschäftsführung: false,
      Umweltbeauftragte: false,
      Fachabteilung: false,
      Mitarbeiter: false,
      'externe Stakeholder': false,
      Behörden: false,
    },
    anwendungsbereich: {
      Gesetzeskonformität: false,
      Zertifizierung: false,
      Ökobilanzierung: false,
      Lebenszyklus: false,
      Berichterstattung: false,
      Entscheidungsunterstützung: false,
      Arbeitsschutz: false,
    },
    gradDerIntegrierung: {
      integriert: false,
      'Add-On': false,
      'Stand-Alone': false,
      'SaaS-Lösung': false,
    },
    objektAspekt: {
      Abfall: false,
      Anlagen: false,
      Gefahrstoffe: false,
      Emissionen: false,
      Energie: false,
      'Stoffe/Stoffströme': false,
      Kosten: false,
    },
    systemgrenzen: {
      'Standort/Betrieb': false,
      Prozess: false,
      Produkt: false,
      Zwischenbetrieblich: false,
    },
    betrachtungskonzept: {
      Verwaltungszentriert: false,
      Bewertungszentriert: false,
      Managementzentriert: false,
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // onSubmit call createProduct
    CreateProduct(product)
      .then((product) => {
        return navigate('/my-products');
      })
      .catch((msg) => {
        alert('error');
      });
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
        sx={{
          my: 15,
        }}
      >
        <ProductDetailViewCard product={product} setProduct={setProduct} />

        <MorphologicalBoxVertical product={product} setProduct={setProduct} />
        <Grid
          container
          mt={3}
          md={12}
          spacing={1}
          alignContent="right"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              sx={{ color: 'background.paper' }}
            >
              Erstellen
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
