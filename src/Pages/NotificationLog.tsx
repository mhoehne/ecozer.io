import react, { useEffect, useState } from 'react';

import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {
    DataGrid, deDE, GridActionsCellItem, GridEditRowsModel, GridToolbarContainer,
    GridToolbarDensitySelector
} from '@mui/x-data-grid';

import { AccountType, DeleteProduct, GetProducts, ProductType, PutProducts } from '../API';
import AssignProduct from '../Components/AssignProduct';
import Account from '../Pages/Account';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

const onRowEdit = (products: ProductType[], state: GridEditRowsModel) => {
  for (const _id in state) {
    const productNewFields: { [key: string]: string | number } = {
      _id: parseInt(_id),
    };

    // Get all new values from `state` into `productNewFields`
    for (const field in state[_id]) {
      const newValue = state[_id][field].value?.toString();
      if (newValue === undefined) {
        continue;
      }

      productNewFields[field] = newValue;
    }

    // Find an product inside `products` state variable
    let product = products.find((acc) => acc._id === parseInt(_id));

    // Did not find an product: should never happen. Send error to console and skip this email to avoid a crash.
    if (product === undefined) {
      console.error(
        `Could not find an product with ID "${_id}". This is most likely a bug.`
      );
      continue;
    }

    // Paste all fields inside `productNewFields` into `product`
    product = Object.assign(product, productNewFields);

    // Update `product`
    PutProducts(product)
      .then(() => {
        // TODO: products updated successfuly
        // trigger success snackbar alert
      })
      .catch(() => {
        // could not update products
        // trigger error snackbar alert
        console.error(`Could not update the product with ID "${_id}"`);
      });
  }
};

interface NotificationLogProps {
  account: AccountType | null;
}

export default function NotificationLog(props: NotificationLogProps) {
  const [pageSize, setPageSize] = useState<number>(20);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType>();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (id: number) => () => {
    let product = products.find((p) => p._id === id);
    if (product === undefined) {
      console.error(
        `Could not find a product with ID "${id}". This is most likely a bug.`
      );
      return;
    }
    setOpen(true);
    setProduct(product);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      width: 40,
      getActions: (params: { id: string }) => [
        <GridActionsCellItem
          icon={<AssignmentIndOutlinedIcon />}
          label="Zuweisen"
          onClick={handleClickOpen(parseInt(params.id))}
          showInMenu
        />,
      ],
    },
    {
      field: '_id',
      headerName: 'ID',
      type: 'string',
      width: 50,
      editable: false,
    },
    {
      field: 'state',
      headerName: 'Status',
      width: 100,
      editable: false,
    },

    {
      field: 'productName',
      headerName: 'Produktname',
      width: 250,
      editable: true,
    },
    {
      field: 'productLink',
      headerName: 'Website-Link',
      width: 200,
      editable: true,
    },
    {
      field: 'productCompany',
      headerName: 'Firmenname',
      width: 200,
      editable: true,
    },
    {
      field: 'productDescription',
      headerName: 'Beschreibung',
      width: 500,
      editable: true,
    },
  ];

  useEffect(() => {
    GetProducts(null, null, [], [], [], [], [], [], null)
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch();
  }, []);

  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        mt={{ xs: 10, sm: 10 }}
        mb={{ xs: 10, sm: 10 }}
        bgcolor="background.paper"
        color="text.primary"
        alignItems="center"
      >
        <Typography alignItems="center">
          Hier entsteht bald ein Log mit all deinen Notifications
        </Typography>
      </Box>

      <Box
        px={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid
            localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
            rows={products}
            columns={columns}
            getRowId={(product) => product._id}
            onEditRowsModelChange={(state) => onRowEdit(products, state)}
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
      {product ? (
        <AssignProduct
          open={open}
          handleClose={handleClose}
          Account={props.account}
          Product={product}
        />
      ) : null}
    </>
  );
}
