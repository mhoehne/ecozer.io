import Container from '@mui/material/Container';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import { Box, Button, Grid } from '@mui/material';
import Item from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { CreateProduct, ProductType } from '../API';
import { useEffect, useState, useCallback } from 'react';

//create new props
interface AddProductProps {
  Product: ProductType;
}

export default function AddProduct() {
  const [product, setProduct] = useState<ProductType>({
    _id: undefined,
    // account_id: number;
    productName: '',
    // productImage: string;
    // productLink: string;
    // productCompany: string;
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
    },
    betrachtungskonzept: {
      Verwaltungszentriert: false,
      Bewertungszentriert: false,
      Managementzentriert: false,
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(product);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // TODO: image import for product image
    // const productImage = data.get('productImage')?.

    const productName = data.get('productName')?.toString();

    if (productName === undefined) {
      alert('invalid or missing product name');
      return;
    }

    //   CreateProduct(product)
    //     .then((product) => {
    //       alert('success');
    //       // success
    //     })
    //     .catch((msg) => {
    //       alert('error');
    //       // error
    //     });
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
