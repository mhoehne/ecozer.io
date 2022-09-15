import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import SampleImg from '../images/sample-img.png';
import TextField from '@mui/material/TextField';
import FileDrop from '../Components/ImageFileDrop/FileDrop';
import FileUploadBox from '../Components/ImageFileDrop/FileUploadBox';
import ImageFileUpload from './ImageFileDrop/ImageFileUpload';
import { ProductType } from '../API';
import ImageFileUploadIndex from './ImageFileUpload/ImageFileUploadIndex';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface ProductDetailViewCardProps {
  product: ProductType;
  setProduct: Function;
}

export default function ProductDetailViewCard(
  props: ProductDetailViewCardProps
) {
  console.log(props.product.account_id);

  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
        sx={{ width: '100%', mt: 2 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
          sx={{ p: 2 }}
          bgcolor="background.paper"
          color="text.primary"
        >
          {/* <Grid item xs={0}> */}
          {/* <CardMedia
              component="img"
              id="productImage"
              alt="product image"
              height="300"
              image={SampleImg}
            /> */}
          {/* file drop should set the image for the product and just available
            in /add-product or when editing a product, then the image gets
            replaced by the new uploaded image */}
          {/* <FileDrop /> */}
          {/* <ImageFileUploadIndex
              onUpload={function (url: string) {
                const productimageupload = {
                  ...props.product,
                  productImage: url,
                };
                props.setProduct(productimageupload);
              }}
            />*/}
          {/* </Grid> */}
          <Grid item xs={12} sx={{ mt: -2 }}>
            <Grid item xs={12}>
              <TextField
                onChange={function (event) {
                  const productname = {
                    ...props.product,
                    productName: event.currentTarget.value,
                  };
                  props.setProduct(productname);
                }}
                margin="normal"
                fullWidth
                focused
                id="productName"
                label="Produktname"
                required={true}
                value={props.product.productName}
              />

              <TextField
                onChange={function (event) {
                  const productwebsite = {
                    ...props.product,
                    productLink: event.currentTarget.value,
                  };
                  props.setProduct(productwebsite);
                }}
                margin="normal"
                fullWidth
                id="productLink"
                label="Website"
                required={true}
                value={props.product.productLink}
              />
              <TextField
                onChange={function (event) {
                  const productcompany = {
                    ...props.product,
                    productCompany: event.currentTarget.value,
                  };
                  props.setProduct(productcompany);
                }}
                margin="normal"
                fullWidth
                id="productCompany"
                label="Firmenname"
                required={true}
                value={props.product.productCompany}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mx: 0, mt: 0 }}>
              <TextField
                onChange={function (event) {
                  const productdescription = {
                    ...props.product,
                    productDescription: event.currentTarget.value,
                  };
                  props.setProduct(productdescription);
                }}
                margin="normal"
                fullWidth
                id="productDescription"
                label="Produktbeschreibung"
                required={true}
                multiline
                rows={10}
                value={props.product.productDescription}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
