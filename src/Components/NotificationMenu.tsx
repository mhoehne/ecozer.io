import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import {
    Avatar, Badge, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton,
    ListItemText, Menu, Tooltip
} from '@mui/material';

import { AccountType, GetNotifications, markAsReadNotification, NotificationType } from '../API';

interface NotificationMenuProps {
  account: AccountType | null;
}

export default function NotificationMenu(props: NotificationMenuProps) {
  const [notifications, setNotifications] = useState<NotificationType[] | null>(null);
console.log(notifications)
useEffect(() => {
  if(notifications == null) {
    GetNotifications().then((result) => {
      setNotifications(result.data.notifications)
  }).catch()

}
},[] )


// improvement: use redux to listen for events (notification)
const [timer, setTimer] = useState<NodeJS.Timer | null>(null)
if (timer == null) {
  const refreshNotificationsCallback = () => {
    GetNotifications().then((result) => {
      setNotifications(result.data.notifications)
    }).catch();
  }

document.addEventListener("refreshNotifications", refreshNotificationsCallback)

  const newTimer = setInterval(() => {
    document.dispatchEvent(new CustomEvent('refreshNotifications'));
}, 60000 );
  setTimer(newTimer);
}

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const isNotificationListEmpty = notifications?.filter((notification) => {
  if (notification.isRead === false) {
    return true
  }
  return false;}).length == 0

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Benachrichtigungen">
          <IconButton onClick={handleClick} size="medium" color="inherit">
            
            {isNotificationListEmpty ? (
            
              <NotificationsIcon color="info" />
            ) : (<Badge
              color="secondary"
              variant="dot"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <NotificationsIcon color="info" />
            </Badge>)} 
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
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

        <ListItem disablePadding={true} alignItems="center">
          <ListItemButton component={Link} to={'/notification-log'}>
            <ListItemAvatar>
              <Avatar>
                <CircleNotificationsOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Alle Benachrichtigungen ansehen</ListItemText>
          </ListItemButton>
        </ListItem>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >

          {notifications?.filter((notification) => {
            if (notification.isRead === false) {
              return true
            }
            return false;
          }).map((notification) => {
            let backgroundColor = '#292929';
            let avatarIcon = <NotificationsOutlinedIcon />;
            let notificationTextPrimary = '';
            let notificationTextSecondary = '';
            let linkTo = '';

            if (notification.messageType === 'rejected') {
              backgroundColor = '#fc998d';
              avatarIcon = <CloseOutlinedIcon />;
              notificationTextPrimary = 'Produkt abgelehnt';
              notificationTextSecondary = `Dein Produkt: ${notification.productName} wurde abgelehnt. Begründung: ${notification.rejectReason}`;
              linkTo = '/my-products/rejection';
            }
            if (notification.messageType === 'published') {
              backgroundColor = '#50cc52';
              avatarIcon = <CheckOutlinedIcon />;
              notificationTextPrimary = 'Produkt veröffentlicht';
              notificationTextSecondary =
                `Dein Produkt: ${notification.productName} wurde veröffentlicht und ist nun für alle sichtbar.`;
              linkTo = '/my-products';
            }
            if (notification.messageType === 'pending') {
              backgroundColor = '#ffbf03';
              avatarIcon = <AccessTimeOutlinedIcon />;
              notificationTextPrimary = 'Überprüfung ausstehend';
              notificationTextSecondary = `Dein Produkt: ${notification.productName} wird in kürze von einem Administrator überprüft. Bitte habe etwas Geduld.`;
              linkTo = '/my-products';
            }
            if (notification.messageType === 'assigned') {
              backgroundColor = '#c861ff';
              avatarIcon = <PollOutlinedIcon />;
              notificationTextPrimary = 'Produkt zugewiesen';
              notificationTextSecondary =
                `Dir wurde Produkt: ${notification.productName} zugewiesen.`;
              linkTo = '/my-products';
            }

            return (
              <div key={notification._id}>
                <Divider variant="fullWidth" component="li" />

                <ListItem
                  disablePadding={true}
                  alignItems="center"
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="markAsIsRead"
                      onClick={() => {notification.isRead = true
                        markAsReadNotification(notification._id).then(() => {setNotifications((prev) => prev?.map((notification) => {return notification})?? [])});
                    // useCallback to rerender the notification menu list, after marking a notification isRead=true
                      }
                  }
                      
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    component={Link}
                    to={linkTo}
                    
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: backgroundColor }}>
                        {avatarIcon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notificationTextPrimary}
                      secondary={notificationTextSecondary}
                      onClick={handleClose}
                    />
                  </ListItemButton>
                </ListItem>
              </div>
            );
          })}
        </List>
      </Menu>
      
    </>
  );
}
