import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import AccountMenu from './AccountMenu';
import Logo from '../images/Q04_HTW_Berlin_Logo_quer_pos_FARBIG_RGB.jpg';
import CardMedia from '@mui/material/CardMedia';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";



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



type AppBarTopProps = {open: boolean, setOpen: Function}

export default function AppBarTop(props: AppBarTopProps) {

  return (
    <Box sx={{ display: 'flex', padding: 0 }} >
      <AppBar position="fixed" open={props.open} sx= {{backgroundColor: "#fff"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={ () => props.setOpen(true) }
            edge="start"
            sx={{
              fontSize: 'large',
              marginRight: '36px',
              ...(props.open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <MenuItem component={Link} to='/'>
          <CardMedia
            component="img"
            sx={{maxHeight: '40px'}}
            alt="green iguana"
            image={Logo}
          />
          </MenuItem>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          
          {/* Display when logged out
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" size="small">
          Signup
          </Button>
          <Button variant="outlined" size="small">
          SignIn
          </Button>
          </Box>
          
          */}

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
              </Badge>
            </IconButton>

            <AccountMenu/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
