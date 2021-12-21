import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SampleImg from '../images/sample-img.png';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";


export default function ImgMediaCard() {
  return (
    
    <Card sx={{ maxWidth: 345, margin: '2rem', }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={SampleImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Produktname
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Produktbeschreibung Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/search/product-detail">+ details</Button>
        <Button size="small" href="/search/product-detail" sx={{}}>+ editieren</Button>
      </CardActions>
    </Card>
    
  );
}
