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
          columnSpacing={{ xs: 1, sm: 1, md: 2 }}
          sx={{ p: 2 }}
        >
          <Grid item xs={7}>
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
            <ImageFileUploadIndex />
          </Grid>
          <Grid item xs={5} sx={{ mt: -2 }}>
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
                id="productName"
                label="Produktname"
              />
            </Grid>
            <Grid item xs={12}>
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
              />
            </Grid>
            <Grid item xs={12}>
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
                label="Unternehmen"
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
                multiline
                rows={10}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
