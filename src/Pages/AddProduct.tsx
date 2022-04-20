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
  const [product, setProduct] = useState<ProductType>({
    _id: undefined,
    // account_id: number;
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
    // just for testing, can be removed later
    console.log(product);
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
        onSubmit={handleSubmit}
        sx={{
          my: 15,
        }}
      >
        {/* needs props to get field values */}
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
