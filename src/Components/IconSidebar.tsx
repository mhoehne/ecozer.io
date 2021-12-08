import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BadgeIcon from '@mui/icons-material/Badge';
import AppBarTop from './AppBarTop';
import { Link } from 'react-router-dom';



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };



  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBarTop open={open} setOpen={setOpen}/>
      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> 
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem component={Link} to="/"><ListItemIcon><HomeIcon fontSize="large"/></ListItemIcon>Home</ListItem>
          <ListItem component={Link} to="/overview"><ListItemIcon><GridViewIcon fontSize="large"/></ListItemIcon>Overview</ListItem>
          <ListItem component={Link} to="/search"><ListItemIcon><ManageSearchIcon fontSize="large"/></ListItemIcon>Search</ListItem>
          <ListItem component={Link} to="/product-detail"><ListItemIcon><AppsIcon/></ListItemIcon>Product Detail</ListItem>
        </List>

        <Divider />

        <List>
        <ListItem component={Link} to="/account"><ListItemIcon><AppsIcon/></ListItemIcon>Account</ListItem>
        <ListItem component={Link} to="/my-products"><ListItemIcon><ArtTrackIcon fontSize="large"/></ListItemIcon>My Products</ListItem>
        <ListItem component={Link} to="/add-product"><ListItemIcon><AppsIcon/></ListItemIcon>Add Product</ListItem>
        <ListItem component={Link} to="/signup"><ListItemIcon><AppsIcon/></ListItemIcon>SignUp</ListItem>
        <ListItem component={Link} to="/signin"><ListItemIcon><AppsIcon/></ListItemIcon>SignIn</ListItem>
        </List>

        <Divider />

        <List>
        <ListItem component={Link} to="/approval"><ListItemIcon><FactCheckIcon fontSize="large"/></ListItemIcon>Admin Approval</ListItem>  
        <ListItem component={Link} to="/approval-detail"><ListItemIcon><AppsIcon/></ListItemIcon>Admin Approval Detail</ListItem>
        <ListItem component={Link} to="/user-list"><ListItemIcon><BadgeIcon fontSize="large"/></ListItemIcon>User List</ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
