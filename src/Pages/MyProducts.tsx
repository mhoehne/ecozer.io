import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';
import AddProductCard from '../Components/AddProductCard';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import ImageBanner from '../Components/ImageBanner';


export default function MyProducts() {

  const Product = [
    {
      productName: "Produkt1",
      productDescription: "Hello World1",
      zielgruppe: "test"
      // anwendungsbereich:  "test2"
      // gradDerIntegrierung: "test3"
      // objektAspekt: "test4"
      // systemgrenzen: "test5"
      // betrachtungskonzept: "test6"
    },
    {
      productName: "Product2",
      productDescription: "Hello World2",
      zielgruppe: "test1"
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