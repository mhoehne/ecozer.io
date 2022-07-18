import ProductDetailViewCard from '../Components/ProductDetailViewCard';
import MorphologicalBoxVertical from '../Components/MorphologicalBoxVertical';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export default function AdminApprovalDetail() {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Button
          variant="text"
          color="info"
          startIcon={<ArrowBackIosNewOutlinedIcon />}
          href="/approval"
        >
          Zurück
        </Button>
      </Box>

      {/* placeholder for productdetailviewcard and MBvertical */}

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
        sx={{ m: 5 }}
      >
        <Button
          size="medium"
          variant="contained"
          color="error"
          startIcon={<CloseIcon />}
          href=""
        >
          Ablehnen
        </Button>
        {/* "Ablehnen"/reject button triggers a dialog, where the admin can put a short description why he rejected the product */}
        {/* User gets a notification about the rejection and the description of the admin dialog */}
        {/* after rejecting the product, set state to "rejected" */}
        <Button
          size="medium"
          variant="contained"
          color="success"
          startIcon={<DoneIcon />}
          href=""
        >
          Veröffentlichen
        </Button>
        {/* user gets a notification about the approval of his product */}
        {/* after approving the product, set state to "published". (product should appear in the search) */}
      </Stack>
    </>
  );
}
