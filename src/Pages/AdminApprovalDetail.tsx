import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export default function AdminApprovalDetail() {


  return (

      <>
        <Box sx={{mt: 10}}>
          <Button variant="text" color="info" startIcon={<ArrowBackIosNewOutlinedIcon/>} href="/approval">
            Zurück
          </Button>
        </Box>
        <ProductDetailViewCard/>
        <MorphologicalBoxVertical/>

        <Stack 
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={2}
          sx={{m: 5}}
          >
          <Button size="medium" variant="contained" color="error" startIcon={<CloseIcon/>} href="">
            Ablehnen
          </Button>
          <Button size="medium" variant="contained" color="success" startIcon={<DoneIcon/>} href="">
            Veröffentlichen
          </Button>
        </Stack>
      </>
  );
}