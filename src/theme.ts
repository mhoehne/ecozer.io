import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#76B900',
    },
    secondary: {
      main: '#0082D1',
    },
    error: {
      main: '#FF5F00',
      light: '',
      dark: '',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#00ffff',
    },
    success: {
      main: '#76B900',
    },
    text: {
      primary: '#000',
      secondary: '#292929',
      disabled: '#AFAFAF',
    },
    background: {
      paper: '#fff',
      default: '#EBEBEB',
    }

  },
});

export default theme;
