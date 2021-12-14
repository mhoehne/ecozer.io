import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export default function AddProductCard() {
  return (
    <Card sx={{ maxWidth: 345, height: 360, margin: '2rem', }}>
      <Box>
      <CardActions>
        <Button size="large" href="/my-products/add-product">+ erstellen</Button>
      </CardActions>
      </Box>
    </Card>
  );
}
