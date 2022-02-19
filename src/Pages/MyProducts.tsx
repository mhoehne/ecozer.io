import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import ImageBanner from '../Components/ImageBanner';


export default function MyProducts() {

  const Product = [
    {
      productName: "Umberto 5",
      productDescription: "This software makes your live easier! I promise.",
      zielgruppe: {
        "Geschäftsführung": false,
        "Umweltbeauftragte": true,
        "Fachabteilung": true,
        "Mitarbeiter": false,
        "externe Stakeholder": false,
        "Behörden": false
      },
      anwendungsbereich: {
        "Gesetzeskonformität": false,
        "Zertifizierung": false,
        "Ökobilanzierung": true,
        "Berichterstattung": false,
        "Entscheidungsunterstützung": true,
        "Arbeitsschutz": false
      },
      gradDerIntegrierung: {
        "integriert": false,
        "AddOn": false,
        "StandAlone": true,
        "SaaSLösung": false
      },
      objektAspekt: {
        "Abfall": true,
        "Anlagen": false,
        "Gefahrstoffe": false,
        "Emissionen": true,
        "Energie": true,
        "StoffeStoffströme": true,
        "Kosten": true
      },
      systemgrenzen: {
        "StandortBetrieb": true,
        "Prozess": true,
        "Produkt": true
      },
      betrachtungskonzept: {
        "Verwaltungszentriert": false,
        "Bewertungszentriert": true,
        "Managementzentriert": false
      }
    },
    {
      productName: "Product2",
      productDescription: "Hello World2",
      zielgruppe: {
        "Geschäftsführung": false,
        "Umweltbeauftragte": true,
        "Fachabteilung": true,
        "Mitarbeiter": false,
        "externe Stakeholder": false,
        "Behörden": false
      },
      anwendungsbereich: {
        "Gesetzeskonformität": false,
        "Zertifizierung": false,
        "Ökobilanzierung": true,
        "Berichterstattung": false,
        "Entscheidungsunterstützung": true,
        "Arbeitsschutz": false
      },
      gradDerIntegrierung: {
        "integriert": false,
        "AddOn": false,
        "StandAlone": true,
        "SaaSLösung": false
      },
      objektAspekt: {
        "Abfall": true,
        "Anlagen": false,
        "Gefahrstoffe": false,
        "Emissionen": true,
        "Energie": true,
        "StoffeStoffströme": true,
        "Kosten": true
      },
      systemgrenzen: {
        "StandortBetrieb": true,
        "Prozess": true,
        "Produkt": true
      },
      betrachtungskonzept: {
        "Verwaltungszentriert": false,
        "Bewertungszentriert": true,
        "Managementzentriert": false
      }
    }

    ]

  return (

      <>
        <ImageBanner/>
          <SearchBarBoxed/>
        <Grid container spacing={0}> 
          <Grid item xs={12} sm={4}>
            {/* <AddProductCard/> */}
          </Grid>

          {
            Product.map((product) => {
              return <Grid item key={product.productName} xs={12} sm={4}>
                <ImgMediaCard Product={product}/> 
              </Grid>
            })
          }
        </Grid>
      </>
  );
}