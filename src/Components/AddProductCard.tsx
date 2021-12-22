import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";



export default function AddProductCard() {
  return (
    <Card sx={{ maxWidth: 345, height: 360, margin: '2rem', display: 'flex' }}>
      <Box sx={{ m: 'auto'}} >
        <MenuItem component={Link} to='/'>
      <CardActions>
        <Button size="large" href="/my-products/add-product">+ erstellen</Button>
      </CardActions>
      </MenuItem>
      </Box>
    </Card>
  );
}
