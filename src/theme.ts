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
      primary: '#292929',
      secondary: '#2929ff',
      disabled: '#AFAFAF',
    },
    background: {
      paper: '#EBEBEB',
      default: '#EBEBEB',
    }

  },
});

export default theme;
