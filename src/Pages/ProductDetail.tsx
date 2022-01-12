import Navigation from '../Components/Navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Divider, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


export default function ProductDetail() {


  return (

      <>
          <Box sx={{mt: 10}}>
          <Button variant="text" color="info" startIcon={<ArrowBackIosNewOutlinedIcon/>} href="/search">
            Zurück
          </Button>
        </Box>
        <ProductDetailViewCard/>
        <MorphologicalBoxVertical/>
      </>
  );
}