import { useCallback, useEffect, useState } from 'react';

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {
    DataGrid, deDE, GridActionsCellItem, GridEditRowsModel, GridRowId, GridToolbarContainer,
    GridToolbarDensitySelector
} from '@mui/x-data-grid';

import { GetReportings, ReportingType } from '../../API';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

const onRowEdit = (reportings: ReportingType[], state: GridEditRowsModel) => {
  for (const _id in state) {
    const reportingNewFields: { [key: string]: string | number } = {
      _id: parseInt(_id),
    };

    for (const field in state[_id]) {
      const newValue = state[_id][field].value?.toString();
      if (newValue === undefined) {
        continue;
      }

      reportingNewFields[field] = newValue;
    }

    let reporting = reportings.find((acc) => acc._id === parseInt(_id));
    console.log(reportings, _id);
    if (reportings === undefined) {
      console.error(
        `Could not find an reporting with ID "${_id}". This is most likely a bug.`
      );
      continue;
    }

    // reporting = Object.assign(reporting, reportingNewFields);
  }
};

export default function ReportingListGrid() {
  const [pageSize, setPageSize] = useState<number>(20);

  const [reportings, setReportings] = useState<ReportingType[]>([]);

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      width: 40,
      getActions: (params: { id: string }) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Löschen"
          //onClick={}
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
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'emailAddress',
      headerName: 'E-Mail-Adresse',
      width: 250,
      editable: true,
    },

    {
      field: 'issue',
      headerName: 'Anliegen',
      width: 150,
      editable: true,
    },
    {
      field: 'browser',
      headerName: 'Browser',
      width: 200,
      editable: true,
    },
    {
      field: 'pageName',
      headerName: 'Seite',
      width: 200,
      editable: true,
    },
    {
      field: 'feedbackField',
      headerName: 'Feedback/Beschreibung',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'erstellt am',
      type: 'dateTime',
      width: 200,
      editable: false,
    },
  ];

  // React.useEffect(() => {
  //   GetReportings(null, [], [], [], [], [], [], null)
  //     .then((result) => {
  //       setReportings(result.data.reporting);
  //     })
  //     .catch();
  // }, []);

  return (
    <Box
      px={{ xs: 2, sm: 2 }}
      mx={{ xs: 0, sm: 0 }}
      bgcolor="background.paper"
      color="text.primary"
    >
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid
          localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
          rows={reportings}
          columns={columns}
          getRowId={(reporting) => reporting._id}
          onEditRowsModelChange={(state) => onRowEdit(reportings, state)}
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
  );
}
