import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '2rem', }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="./images/sample-img.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Feature
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
