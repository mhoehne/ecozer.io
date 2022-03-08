import 
{ 
  createTheme 
} from '@mui/material/styles';

// Custom theme for this app
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
      main: '#575757',
    },
    success: {
      main: '#0bdb00',
    },
    text: {
      primary: '#000',
      secondary: '#575757',
      disabled: '#AFAFAF',
    },
    background: {
      paper: '#fff',
      default: '#EBEBEB',
    }

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
