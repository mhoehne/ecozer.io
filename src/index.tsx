import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </ThemeProvider>,
  document.querySelector('#root')
);
