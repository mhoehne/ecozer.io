import * as React from 'react';
import { useCookies } from 'react-cookie';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BadgeIcon from '@mui/icons-material/Badge';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

import { AccountType } from '../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface AccountMenuProps {
  Account: AccountType | null;
}

// function to remove the cookie
export async function deauthenticate(
  navigate: NavigateFunction,
  removeCookie: Function
) {
  try {
    removeCookie('email', { path: '/' });
    return navigate('/');
  } catch (e) {
    console.log(e);
  }
}

function getAdminMenu(
  open: boolean,
  anchorEl: null | HTMLElement,
  setAnchorEl: Function
) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [cookies, setCookie, removeCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await deauthenticate(navigate, removeCookie);
    } catch {
      alert('something went wrong');
    }
  };
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component={Link} to="/">
        <ListItemIcon>
          <HomeIcon fontSize="small" />
        </ListItemIcon>
        Startseite
      </MenuItem>
      <MenuItem component={Link} to="/search">
        <ListItemIcon>
          <ManageSearchIcon fontSize="small" />
        </ListItemIcon>
        Produktsuche
      </MenuItem>
      {/* <MenuItem component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
      </MenuItem> */}
      <MenuItem component={Link} to="/my-products">
        <ListItemIcon>
          <DashboardCustomizeIcon fontSize="small" />
        </ListItemIcon>
        Meine Produkte
      </MenuItem>

      <Divider />
      <MenuItem component={Link} to="/approval">
        <ListItemIcon>
          <FactCheckIcon fontSize="small" />
        </ListItemIcon>
        Zulassung
      </MenuItem>
      <MenuItem component={Link} to="/user-list">
        <ListItemIcon>
          <BadgeIcon fontSize="small" />
        </ListItemIcon>
        Benutzerliste
      </MenuItem>
      <MenuItem component={Link} to="/product-list">
        <ListItemIcon>
          <ViewListIcon fontSize="small" />
        </ListItemIcon>
        Produktliste
      </MenuItem>
    </Menu>
  );
}

function getUserMenu(
  open: boolean,
  anchorEl: null | HTMLElement,
  setAnchorEl: Function
) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [cookies, setCookie, removeCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await deauthenticate(navigate, removeCookie);
    } catch {
      alert('something went wrong');
    }
  };
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem component={Link} to="/">
        <ListItemIcon>
          <HomeIcon fontSize="small" />
        </ListItemIcon>
        Startseite
      </MenuItem>
      <MenuItem component={Link} to="/search">
        <ListItemIcon>
          <ManageSearchIcon fontSize="small" />
        </ListItemIcon>
        Produktsuche
      </MenuItem>
      {/* <MenuItem component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
      </MenuItem> */}
      <MenuItem component={Link} to="/my-products">
        <ListItemIcon>
          <DashboardCustomizeIcon fontSize="small" />
        </ListItemIcon>
        Meine Produkte
      </MenuItem>
    </Menu>
  );
}

export default function AccountMenu(props: AccountMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAdminMenu = props.Account?.isAdmin === true;

  const [cookies, setCookie, removeCookie] = useCookies(['email']);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await deauthenticate(navigate, removeCookie);
    } catch {
      alert('something went wrong');
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Menü">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <MenuRoundedIcon fontSize="large" color="info" />
          </IconButton>
        </Tooltip>
      </Box>
      {isAdminMenu
        ? getAdminMenu(open, anchorEl, setAnchorEl)
        : getUserMenu(open, anchorEl, setAnchorEl)}
    </React.Fragment>
  );
}
