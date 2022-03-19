import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import HeroBanner from '../Components/HeroBanner';
import Typography from '@mui/material/Typography';
import HowItWorks from '../Components/Homepage/HowItWorks';
import NewestProducts from '../Components/Homepage/NewestPorducts';
import MostClickedProducts from '../Components/Homepage/MostClickedProducts';

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  Item.defaultProps = {
    square: true,
  };

  return (
    <>
      <HeroBanner />
      <NewestProducts />
      <MostClickedProducts />
      <HowItWorks />
    </>
  );
}
