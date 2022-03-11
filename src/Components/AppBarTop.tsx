import 
{ 
  styled 
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, 
{ 
  AppBarProps as MuiAppBarProps 
} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountMenu from './AccountMenu';
import Logo from '../images/Q04_HTW_Berlin_Logo_quer_pos_FARBIG_RGB.jpg';
import CardMedia from '@mui/material/CardMedia';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import 
{
Button,
Stack
} from '@mui/material';
import 
{ 
  Link 
} from "react-router-dom";
import NotificationMenu from './NotificationMenu';
import 
{ 
  AccountsType 
} from '../API';


interface AppBarTopProps {
  Account: AccountsType | null;
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
      <Button variant="contained" size="small" sx={{color: 'background.paper'}}>
      Jetzt registrieren
      </Button>
      <Button variant="outlined" size="small" startIcon={<LoginIcon/>}>
      Login
      </Button>
      </Stack>
    </Box>
  )
}

function loggedoinbox() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <NotificationMenu/>
      <AccountMenu/>
    </Box>
  )
}



export default function AppBarTop(props: AppBarTopProps) {

// check if cookie received from signin page

const isLoggedOut = props.Account === null;

  return (
    <Box sx={{ display: 'flex', padding: 0 }} >
      <AppBar position="fixed" sx= {{backgroundColor: "#fff"}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <MenuItem component={Link} to='/'>
          <CardMedia
            component="img"
            sx={{maxHeight: '40px'}}
            alt="htw logo"
            image={Logo}
          />
          </MenuItem>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          
          {isLoggedOut?loggedoutbox():loggedoinbox()}
          

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
