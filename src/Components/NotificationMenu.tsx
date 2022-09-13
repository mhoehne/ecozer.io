import * as React from 'react';
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Benachrichtigungen">
          <IconButton onClick={handleClick} size="medium" color="inherit">
            <Badge
              color="secondary"
              variant="dot"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <NotificationsIcon color="info" />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
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
        <MenuItem component={Link} to="/notification-log">
          Dieses Feature ist bald verfügbar
        </MenuItem>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
          <Divider variant="fullWidth" component="li" />
          <ListItem
            alignItems="center"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <CancelOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#fc998d' }}>
                <CloseOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Abgelehnt" secondary="Begründung..." />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem
            alignItems="center"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <CancelOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#50cc52' }}>
                <CheckOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Veröffentlicht"
              secondary="Ihr Produkt `Name` wurde veröffentlicht. "
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem
            // sx={{ backgroundColor: '#ffec96' }}
            alignItems="center"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <CancelOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#ffbf03' }}>
                <AccessTimeOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Überprüfung ausstehend"
              secondary="Ihr Produkt `Name` wird in kürze von einem Administrator überprüft."
            />
          </ListItem>
        </List>
      </Menu>
    </React.Fragment>
  );
}
