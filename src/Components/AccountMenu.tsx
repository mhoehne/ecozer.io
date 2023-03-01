import * as React from 'react';
import { Link } from 'react-router-dom';

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

import { AccountType } from '../API';

interface AccountMenuProps {
  account: AccountType | null;
}

function getAdminMenu(
  isOpen: boolean,
  anchorEl: null | HTMLElement,
  handleDropdownMenuClose: Function,
) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={() => handleDropdownMenuClose()}
      onClick={() => handleDropdownMenuClose()}
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
          <HomeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Startseite
      </MenuItem>
      <MenuItem component={Link} to="/search">
        <ListItemIcon>
          <ManageSearchOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Produktsuche
      </MenuItem>
      <MenuItem component={Link} to="/my-products">
        <ListItemIcon>
          <DashboardCustomizeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Meine Produkte
      </MenuItem>

      <Divider />
      <MenuItem component={Link} to="/approval">
        <ListItemIcon>
          <FactCheckOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Zulassung
      </MenuItem>
      <MenuItem component={Link} to="/user-list">
        <ListItemIcon>
          <BadgeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Benutzerliste
      </MenuItem>
      <MenuItem component={Link} to="/product-list">
        <ListItemIcon>
          <ListOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Produktliste
      </MenuItem>
      <MenuItem component={Link} to="/reportings">
        <ListItemIcon>
          <ListAltOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Reportings
      </MenuItem>
    </Menu>
  );
}

function getUserMenu(
  isOpen: boolean,
  anchorEl: null | HTMLElement,
  handleDropdownMenuClose: Function
) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={() => handleDropdownMenuClose()}
      onClick={() => handleDropdownMenuClose()}
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
          <HomeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Startseite
      </MenuItem>
      <MenuItem component={Link} to="/search">
        <ListItemIcon>
          <ManageSearchOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Produktsuche
      </MenuItem>
      <MenuItem component={Link} to="/my-products">
        <ListItemIcon>
          <DashboardCustomizeOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Meine Produkte
      </MenuItem>
    </Menu>
  );
}

export default function AccountMenu({ account }: AccountMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isOpen = Boolean(anchorEl);
  const isAdminMenu = account?.isAdmin === true;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Menü">
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
            size="small"
            sx={{ ml: 2 }}
          >
            <MenuRoundedIcon fontSize="large" color="info" />
          </IconButton>
        </Tooltip>
      </Box>
      {isAdminMenu
        ? getAdminMenu(isOpen, anchorEl, () => setAnchorEl(null))
        : getUserMenu(isOpen, anchorEl, () => setAnchorEl(null))}
    </>
  );
}
