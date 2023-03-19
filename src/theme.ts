import { createTheme } from '@mui/material/styles';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

// Custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#76B900',
      light: '#76B90090',
    },
    secondary: {
      main: '#0082D1',
    },
    error: {
      main: '#FF5F00',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#575757',
    },
    success: {
      main: '#76B900',
    },
    text: {
      primary: '#292929',
      secondary: '#575757',
      disabled: '#AFAFAF',
    },
    background: {
      paper: '#fff',
      default: '#EBEBEB',
    },
  },

  components: {
    // Name of the component
    MuiCard: {
      defaultProps: {
        // The props to change the default for.
        square: true, // No more ripple!
      },
    },
  },
});

export default theme;
