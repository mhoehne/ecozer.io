import SampleImg from '../images/sample-img.png';
import { useCallback, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Container,
  Grid,
  Stack,
} from '@mui/material';
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
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import Tooltip from '@mui/material/Tooltip';
import { AccountType, ProductType, DeleteProduct, PutProducts } from '../API';

{
  /* TODO */
}
{
  /* 
  
   */
}

{
  /* Note: */
}

interface ImageMediaCardProps {
  Product: ProductType;
  enableActionButtons: boolean;
  Account: AccountType | null;
  onProductDeleted: Function;
}

export default function ImgMediaCard(props: ImageMediaCardProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const deleteProduct = useCallback(
    (id) => () => {
      let product = props.Product;

      DeleteProduct(props.Product).then(() => {
        props.onProductDeleted(props.Product);
      });
    },
    [props.Product]
  );

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
        {/* <CardMedia
          component="img"
          alt="Produkt"
          height="250"
          image={props.Product.productImage}
        /> */}
        <CardContent>
          <Grid container>
            {/* <Typography variant="body2" color="text.secondary">
            Status: {props.Product.state}
          </Typography> */}
            <Grid item xs={10}>
              <Typography gutterBottom variant="h5" component="div">
                {props.Product.productName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                {props.enableActionButtons ||
                props.Account?.isAdmin === true ? (
                  <>
                    <Chip
                      icon={<VisibilityOutlinedIcon />}
                      label={props.Product.viewCounter}
                    />
                    <Chip
                      icon={<FingerprintOutlinedIcon />}
                      label={props.Product._id}
                    />
                  </>
                ) : null}
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.Product.productCompany}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body2" color="text.secondary">
                {props.Product.productDescription}
              </Typography>
            </Grid>
          </Grid>
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
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Button
              size="small"
              href={`/search/product-detail/${props.Product._id}`}
              startIcon={<AddOutlinedIcon />}
            >
              Details
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {props.enableActionButtons &&
              props.Account?.isAdmin === true &&
              props.Product.state === 'pending' ? (
                <Tooltip title="überprüfen" enterDelay={500} leaveDelay={200}>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    href={`/approval/detail/${props.Product._id}`}
                    sx={{}}
                  >
                    <ImageSearchIcon />
                  </Button>
                </Tooltip>
              ) : null}

              {props.enableActionButtons ? (
                <>
                  <Tooltip title="editieren" enterDelay={500} leaveDelay={200}>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      href={`/my-product/${props.Product._id}/edit`}
                      sx={{}}
                    >
                      <EditIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title="löschen" enterDelay={500} leaveDelay={200}>
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={deleteProduct(props.Product._id)}
                      sx={{}}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </Tooltip>
                </>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
