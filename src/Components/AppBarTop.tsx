import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import {
    Box, Button, CardMedia, MenuItem, Stack, styled, Toolbar, Tooltip, Typography
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { AccountType } from '../API';
import Logo from '../images/Q04_HTW_Berlin_Logo_quer_pos_FARBIG_RGB.jpg';
import AccountMenu from './AccountMenu';
import AccountSettings from './AccountSettings';
import NotificationMenu from './NotificationMenu';

interface AppBarTopProps {
  account: AccountType | null;
}

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function loggedoutbox() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ color: 'background.paper' }}
          href="/signup"
        >
          Produkt erstellen
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<LoginIcon />}
          href="/signin"
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}

function loggedoinbox(account: AccountType | null) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <NotificationMenu Account={account} />
      <AccountMenu Account={account} />
      <AccountSettings Account={account} />
    </Box>
  );
}

export default function AppBarTop(props: AppBarTopProps) {
  // check if cookie received from signin page

  const isLoggedOut = props.account === null;

  return (
    <Box sx={{ display: 'flex', padding: 0 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Tooltip title="zur Startseite">
              <MenuItem component={Link} to="/">
                <CardMedia
                  component="img"
                  sx={{ maxHeight: '40px' }}
                  alt="Startseite"
                  image={Logo}
                />
              </MenuItem>
            </Tooltip>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {isLoggedOut ? loggedoutbox() : loggedoinbox(props.account)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
