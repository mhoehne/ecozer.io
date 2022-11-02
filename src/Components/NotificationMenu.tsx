import * as React from 'react';
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

import { AccountType, NotificationType } from '../API';
import MultiStepSurvey from './Survey/MultiStepSurvey';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

{
  /*  */
}

interface NotificationMenuProps {
  Account: AccountType | null;
  // Notification: NotificationType | null;
}

export default function NotificationMenu(props: NotificationMenuProps) {
  const [notifications, setNotifications] = React.useState<NotificationType[]>([
    {
      _id: 1,
      account_id: 0,
      productName: 'Test',
      message: 'pending',
      messageType: 'pending',
      rejectReason: 'null',
      createdAt: new Date(),
      isRead: false,
    },
    {
      _id: 2,
      account_id: 0,
      productName: 'null',
      message: 'rejected',
      messageType: 'rejected',
      rejectReason: 'rejected',
      createdAt: new Date(),
      isRead: false,
    },
    {
      _id: 3,
      account_id: 0,
      productName: 'null',
      message: 'published',
      messageType: 'published',
      rejectReason: 'null',
      createdAt: new Date(),
      isRead: false,
    },
    {
      _id: 4,
      account_id: 0,
      productName: 'null',
      message: 'assigned',
      messageType: 'assigned',
      rejectReason: 'null',
      createdAt: new Date(),
      isRead: false,
    },
  ]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [surveyOpen, setsurveyOpen] = React.useState(false);
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
          {notifications.map((notification) => {
            let backgroundColor = '#292929';
            let avatarIcon = <NotificationsOutlinedIcon />;
            let notificationTextPrimary = '';
            let notificationTextSecondary = '';
            let linkTo = '';

            if (notification.messageType === 'rejected') {
              backgroundColor = '#fc998d';
              avatarIcon = <CloseOutlinedIcon />;
              notificationTextPrimary = 'Produkt abgelehnt';
              notificationTextSecondary = '{RejectReason}';
              linkTo = '/my-products/rejection';
            }
            if (notification.messageType === 'published') {
              backgroundColor = '#50cc52';
              avatarIcon = <CheckOutlinedIcon />;
              notificationTextPrimary = 'Produkt veröffentlicht';
              notificationTextSecondary =
                'Ihr Produkt' +
                {} +
                'wurde veröffentlicht und ist nun für alle sichtbar.';
              linkTo = '/my-products';
            }
            if (notification.messageType === 'pending') {
              backgroundColor = '#ffbf03';
              avatarIcon = <AccessTimeOutlinedIcon />;
              notificationTextPrimary = 'Überprüfung ausstehend';
              notificationTextSecondary = `Dein Produkt ${notification.productName} wird in kürze von einem Administrator überprüft. Bitte habe etwas Geduld.`;
              linkTo = '/my-products';
            }
            if (notification.messageType === 'assigned') {
              backgroundColor = '#c861ff';
              avatarIcon = <PollOutlinedIcon />;
              notificationTextPrimary = 'Produkt zugewiesen';
              notificationTextSecondary =
                'Dir wurde Produkt' +
                {} +
                'zugewiesen. Nehme gern zusätzlich an unserer kurzen Umfrage teil.';
              linkTo = '#';
            }

            return (
              <>
                <Divider variant="fullWidth" component="li" />

                <ListItem
                  disablePadding={true}
                  alignItems="center"
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {}}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    component={Link}
                    to={linkTo}
                    onClick={() => {
                      if (notification.messageType === 'assigned') {
                        setsurveyOpen(true);
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: backgroundColor }}>
                        {avatarIcon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notificationTextPrimary}
                      secondary={notificationTextSecondary}
                    />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}

          <Divider variant="fullWidth" component="li" />

          <ListItem
            disablePadding={true}
            alignItems="center"
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => {}}>
                <CancelOutlinedIcon />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={() => {
                setsurveyOpen(true);
              }}
            >
              <ListItemAvatar
                onClick={() => {
                  setsurveyOpen(true);
                }}
              >
                <Avatar sx={{ backgroundColor: '#c861ff' }}>
                  <PollOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                onClick={() => {
                  setsurveyOpen(true);
                }}
                primary="Produkt zugewiesen"
                secondary="Dir wurde ein Produkt zugewiesen. Nimm gern zusätzlich an unserer kurzen Umfrage teil."
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
      <MultiStepSurvey open={surveyOpen} setOpen={setsurveyOpen} />
    </React.Fragment>
  );
}
