import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SampleImg from '../images/sample-img.png';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { ProductType } from '../API';

interface ImageMediaCardProps {
  Product: ProductType;
}

export default function ImgMediaCard(props: ImageMediaCardProps) {
  return (
    
    <Card sx={{ maxWidth: 500, margin: '2rem', }}>
      <CardActionArea href="/search/product-detail">
      <CardMedia
        component="img"
        alt="Produkt"
        height="200"
        image={SampleImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.Product.productDescription}
        </Typography>
      </CardContent>
      </CardActionArea>

      <Accordion 
        defaultExpanded={true}
        square={true}
        disableGutters={true}
        elevation={0}
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ausprägungen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Chip color="primary" size="small" icon={<DoneIcon />} label={props.Product.zielgruppe}   sx={{mr:1, mb:1}} />
        </AccordionDetails>
      </Accordion>
    
      <Divider/>
      <CardActions>
        <Button size="small" href="/search/product-detail">+ details</Button>
        <Button size="small" href="/search/product-detail" sx={{}}>+ editieren</Button>
        <Button size="small" variant="contained" color="secondary" href="/approval/detail" sx={{}}>überprüfen</Button>
      </CardActions>
      
      
    </Card>
    
  );
}
