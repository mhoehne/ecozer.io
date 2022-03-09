import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
  },
  {
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
  },
  {
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
  },
  {
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
  },
  {
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
  }
];


export default function UserProducts() {


  return (

    <>
      {/* <Box 
          px={{ xs: 2, sm: 2}}
          py={{ xs: 2, sm: 2}}
          mx={{ xs: 0, sm: 0}}
          my={{ xs: 2, sm: 2}}
          bgcolor="background.paper"
          color="text.primary">

      </Box> */}
      <Card >
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>

    </>
  );
}
