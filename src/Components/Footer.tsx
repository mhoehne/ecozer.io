import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function Footer() {
  return <Div>
    {"This div will be the footer soon! I promise. "}
    </Div>;
}
