import * as React from 'react';
import { Link } from 'react-router-dom';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import {
    Avatar, Badge, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton,
    ListItemText, Menu, MenuItem, Tooltip
} from '@mui/material';

import { AccountType } from '../API';
import MultiStepSurvey from './MultiStepSurvey';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface NotificationMenuProps {
  Account: AccountType | null;
}

export default function NotificationMenu(props: NotificationMenuProps) {
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
                secondary="Dir wurde ein Produkt zugewiesen. Nimm gern zusätzlich an unserer 3 minütigen Umfrage teil."
              />
            </ListItemButton>
          </ListItem>

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
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#fc998d' }}>
                  <CloseOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Produkt abgelehnt"
                secondary="{Begründung}"
              />
            </ListItemButton>
          </ListItem>

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
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#50cc52' }}>
                  <CheckOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Produkt veröffentlicht"
                secondary="Ihr Produkt `Name` wurde veröffentlicht und ist nun für alle sichtbar. "
              />
            </ListItemButton>
          </ListItem>
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
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#ffbf03' }}>
                  <AccessTimeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Überprüfung ausstehend"
                secondary="Ihr Produkt `Name` wird in kürze von einem Administrator überprüft. Bitte habe etwas Geduld."
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
      <MultiStepSurvey open={surveyOpen} setOpen={setsurveyOpen} />
    </React.Fragment>
  );
}
