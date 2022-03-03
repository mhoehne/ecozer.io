import Grid from '@mui/material/Grid';
import ImageBanner from '../Components/ImageBanner';
import Box from '@mui/material/Box';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import AccordionFilter from '../Components/AccordionFilter';
import ImgMediaCard from '../Components/ImgMediaCard';
import AddProductCard from '../Components/AddProductCard';
import { 
  useEffect, 
  useState,
} from 'react';
import { 
  GetProducts, 
  ProductType
} from '../API';


export default function Search() {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    GetProducts()
    .then((result) => {setProducts(result.data.products)})
    .catch();
  },[]);

  return (

      <>
        <ImageBanner/>
        <SearchBarBoxed/>

        <Grid
        container
        rowSpacing={0} 
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >

          <Grid
          item xs={4} sm={4}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
            <Box  px={{ xs: 2, sm: 2}}
                  py={{ xs: 0, sm: 0}}
                  mx={{ xs: 4, sm: 4}}
                  my={{ xs: 4, sm: 4}}
                  bgcolor="background.paper"
                  color="text.primary">
              <AccordionFilter/>
            </Box>
          </Grid>

          <Grid 
            container
            item xs={8} sm={8}
            spacing={0}
            > 
              {
            products.map((product) => {
              return <Grid item key={product._id} xs={12} sm={6}>
                <ImgMediaCard Product={product}/> 
              </Grid>
            })
          }
              </Grid>



        </Grid>


            
        
      </>
  );
}