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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { ProductType } from '../API';

{
  /* TODO */
}
{
  /* 
  add a label (just visible for admins & the owner) with the current product state "pending"/"published"(approved)/"rejected"/"unpublished" is displayed
  add 3x buttons to edit, delete and unpublish the product (just visible for admins & the owner)
   */
}

{
  /* Note: */
}

interface ImageMediaCardProps {
  Product: ProductType;
}

export default function ImgMediaCard(props: ImageMediaCardProps) {
  const chips = [];

  for (const key in props.Product.zielgruppe) {
    switch (key) {
      case 'Geschäftsführung':
      case 'Umweltbeauftragte':
      case 'Fachabteilung':
      case 'Mitarbeiter':
      case 'externe Stakeholder':
      case 'Behörden':
        if (props.Product.zielgruppe[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  for (const key in props.Product.anwendungsbereich) {
    switch (key) {
      case 'Gesetzeskonformität':
      case 'Zertifizierung':
      case 'Ökobilanzierung':
      case 'Berichterstattung':
      case 'Entscheidungsunterstützung':
      case 'Arbeitsschutz':
        if (props.Product.anwendungsbereich[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  for (const key in props.Product.gradDerIntegrierung) {
    switch (key) {
      case 'integriert':
      case 'Add-On':
      case 'Stand-Alone':
      case 'SaaS-Lösung':
        if (props.Product.gradDerIntegrierung[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  for (const key in props.Product.objektAspekt) {
    switch (key) {
      case 'Abfall':
      case 'Anlagen':
      case 'Gefahrstoffe':
      case 'Emissionen':
      case 'Energie':
      case 'Stoffe/Stoffströme':
      case 'Kosten':
        if (props.Product.objektAspekt[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  for (const key in props.Product.systemgrenzen) {
    switch (key) {
      case 'Standort/Betrieb':
      case 'Prozess':
      case 'Produkt':
        if (props.Product.systemgrenzen[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  for (const key in props.Product.betrachtungskonzept) {
    switch (key) {
      case 'Verwaltungszentriert':
      case 'Bewertungszentriert':
      case 'Managementzentriert':
        if (props.Product.betrachtungskonzept[key] == true) {
          chips.push(
            <Chip
              color="primary"
              size="small"
              icon={<DoneIcon />}
              label={key}
              key={key}
              sx={{ mr: 1, mb: 1, color: 'background.paper' }}
            />
          );
        }
        break;
    }
  }

  return (
    <Card sx={{ margin: '2rem' }}>
      <CardActionArea href={`/search/product-detail/${props.Product._id}`}>
        <CardMedia
          component="img"
          alt="Produkt"
          height="250"
          image={SampleImg}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Status: {props.Product.state}
          </Typography>
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
        <AccordionDetails>{chips}</AccordionDetails>
      </Accordion>

      <Divider />
      <CardActions>
        <Button
          size="small"
          href={`/search/product-detail/${props.Product._id}`}
        >
          + details
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          href="/search/product-detail"
          sx={{}}
        >
          <EditIcon />
        </Button>
        <Button
          size="small"
          variant="contained"
          color="warning"
          href="/approval/detail"
          sx={{}}
        >
          <ImageSearchIcon />
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          href="/approval/detail"
          sx={{}}
        >
          <DeleteOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
