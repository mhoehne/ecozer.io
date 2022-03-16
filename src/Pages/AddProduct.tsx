import Container from '@mui/material/Container';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';

export default function AddProduct() {
  return (
    <>
      <Container
        sx={{
          my: 15,
        }}
      >
        <ProductDetailViewCard />

        <MorphologicalBoxVertical />
      </Container>
    </>
  );
}
