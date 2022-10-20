import * as React from 'react';
import { useCookies } from 'react-cookie';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

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
      <MenuItem component={Link} to="/account">
        <ListItemIcon>
          <AccountBoxIcon fontSize="small" />
        </ListItemIcon>
        Einstellungen
      </MenuItem>
      <MenuItem component="form" onClick={handleSubmit}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
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
      <MenuItem component={Link} to="/account">
        <ListItemIcon>
          <AccountBoxIcon fontSize="small" />
        </ListItemIcon>
        Einstellungen
      </MenuItem>
      <MenuItem component="form" onClick={handleSubmit}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default function AccountSettings(props: AccountMenuProps) {
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
        <Tooltip title="Account">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <AccountCircleIcon fontSize="large" color="info" />
          </IconButton>
        </Tooltip>
      </Box>
      {isAdminMenu
        ? getAdminMenu(open, anchorEl, setAnchorEl)
        : getUserMenu(open, anchorEl, setAnchorEl)}
    </React.Fragment>
  );
}
