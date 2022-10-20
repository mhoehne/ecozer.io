import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Item from '@mui/material/Grid';

import { AccountType, CreateProduct, ProductType } from '../API';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

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
    state: '',
    viewCounter: undefined,
    productImage: '',
    productName: '',
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
      <Container component="main" maxWidth="md">
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
              {/* catch the url from the file upload an pass it when the button is clicked */}
              {/* otherwise the button is disabled */}

              <Button
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
                sx={{ color: 'background.paper' }}
              >
                Erstellen
              </Button>
              {/* after creating a product, set state to pending */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
