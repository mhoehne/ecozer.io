import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Divider, Paper } from '@mui/material';
import MorphologicalBox from '../Components/MorphologicalBox';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';


export default function ProductDetail() {


  return (

      <>
          <ProductDetailViewCard/>
          <MorphologicalBox/>
          <MorphologicalBoxVertical/>
          <Paper/>
      </>
  );
}