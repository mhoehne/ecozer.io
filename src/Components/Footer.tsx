import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { StyledComponent } from '@emotion/styled';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(6),
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(1),
  marginLeft: '3rem',
  textAlign: 'left',
  color: theme.palette.background.paper,
  borderRadius: 0,
}));

Item.defaultProps = {
  square: true,
};

export default function Footer() {
  return <Div>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item>logo here</Item>
      </Grid>
      <Grid item xs={4}>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
        <Item><Button href="#text-buttons">Link</Button></Item>
      </Grid>
    </Grid>
    </Div>;
}
