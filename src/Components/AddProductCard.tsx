import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardActionArea, CardContent, Typography } from '@mui/material';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function AddProductCard() {
  return (
    <Card sx={{ maxWidth: 345, height: 500, margin: '2rem', display: 'flex' }}>
      <CardActionArea href="/my-products/add-product">
        <CardContent>
          <Box
            sx={{
              my: 25,
              bgcolor: 'background.paper',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Neues Produkt Erstellen
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
