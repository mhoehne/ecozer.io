import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeroBanner from '../Components/Homepage/HeroBanner';
import HowItWorks from '../Components/Homepage/HowItWorks';
import MostClickedProducts from '../Components/Homepage/MostClickedProducts';
import NewestProducts from '../Components/Homepage/NewestPorducts';

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
      <HowItWorks />
      {/* display the 3 latest published products */}
      <NewestProducts />
      {/* display the 3 most viewed products */}
      <MostClickedProducts />
    </>
  );
}
