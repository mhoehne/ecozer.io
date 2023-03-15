import react, { useEffect, useState } from 'react';

import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {
    DataGrid, deDE, GridActionsCellItem, GridEditRowsModel, GridToolbarContainer,
    GridToolbarDensitySelector
} from '@mui/x-data-grid';

import {
    AccountType, DeleteProduct, GetNotifications, GetProducts, NotificationsType, NotificationType,
    ProductType, PutProducts
} from '../API';
import AssignProduct from '../Components/AssignProduct';
import Account from '../Pages/Account';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

interface NotificationLogProps {
  account: AccountType | null;
}

export default function NotificationLog(props: NotificationLogProps) {
  const [pageSize, setPageSize] = useState<number>(20);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [notification, setNotification] = useState<NotificationType>();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (id: number) => () => {
    let notification = notifications.find((p) => p._id === id);
    if (notification === undefined) {
      console.error(
        `Could not find a product with ID "${id}". This is most likely a bug.`
      );
      return;
    }
  };

  const columns = [
    // {
    //   field: '_id',
    //   headerName: 'ID',
    //   type: 'string',
    //   width: 50,
    //   editable: false,
    // },
    {
      field: 'isRead',
      headerName: 'gelesen',
      type: 'boolean',
      width: 80,
      editable: false,
    },
    {
      field: 'messageType',
      headerName: 'Status',
      width: 100,
      editable: false,
    },
    {
      field: 'createdAt',
      headerName: 'Datum',
      type: 'dateTime',
      width: 200,
      editable: false,
    },
    {
      field: 'productName',
      headerName: 'Produktname',
      width: 200,
      editable: false,
    },
    {
      field: 'rejectReason',
      headerName: 'Nachricht',
      width: 400,
      editable: false,
    },
  ];

  useEffect(() => {
    GetNotifications()
      .then((result) => {
        setNotifications(result.data.notifications);
      })
      .catch();
  }, []);

  return (
    <>
      <Box
        mx={{ xs: 4, sm: 4 }}
        mt={{ xs: 2, sm: 12 }}
        mb={{ xs: 2, sm: 5 }}
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
        alignItems="center"
      >
      

      <Box
        px={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Benachrichtigungen
        </Typography>
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
            rows={notifications}
            columns={columns}
            getRowId={(notification) => notification._id}
            disableSelectionOnClick
            density="standard"
            components={{
              Toolbar: CustomToolbar,
            }}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[20, 40, 60]}
          />
        </div>
      </Box>
      </Box>
    </>
  );
}
