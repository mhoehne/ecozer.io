import { useCallback, useEffect, useState } from 'react';

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import {
    DataGrid, deDE, GridActionsCellItem, GridEditRowsModel, GridRowId, GridToolbarContainer,
    GridToolbarDensitySelector
} from '@mui/x-data-grid';

import { GetSurveyEntries, SurveyType } from '../../API';

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

const onRowEdit = (surveys: SurveyType[], state: GridEditRowsModel) => {
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

    let survey = surveys.find((acc) => acc._id === parseInt(_id));
    console.log(surveys, _id);
    if (surveys === undefined) {
      console.error(
        `Could not find an survey with ID "${_id}". This is most likely a bug.`
      );
      continue;
    }

    // reporting = Object.assign(reporting, reportingNewFields);
  }
};

export default function ReportingListGrid() {
  const [pageSize, setPageSize] = useState<number>(20);

  const [surveys, setSurveys] = useState<SurveyType[]>([]);

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
      headerName: '#',
      type: 'string',
      width: 50,
      editable: false,
    },
    {
      field: 'account_id',
      headerName: 'ACC.ID',
      type: 'string',
      width: 50,
      editable: false,
    },
    {
      field: 'firstName',
      headerName: 'Vorname',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Nachname',
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
      field: 'role',
      headerName: 'Position',
      width: 250,
      editable: true,
    },

    {
      field: 'companySize',
      headerName: 'Unternehmensgröße',
      width: 150,
      editable: true,
    },
    {
      field: 'Q1',
      headerName: 'Frage 1',
      width: 200,
      editable: true,
    },
    {
      field: 'Q2',
      headerName: 'Frage 2',
      width: 200,
      editable: true,
    },
    {
      field: 'Q3',
      headerName: 'Frage 3',
      width: 200,
      editable: true,
    },
    {
      field: 'Q4',
      headerName: 'Frage 4',
      width: 200,
      editable: true,
    },
    {
      field: 'feedbackField',
      headerName: 'Feedback',
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

  useEffect(() => {
    GetSurveyEntries()
      .then((result) => {
        setSurveys(result.data.surveyEntries);
      })
      .catch();
  }, []);

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
          rows={surveys}
          columns={columns}
          getRowId={(reporting) => reporting._id}
          onEditRowsModelChange={(state) => onRowEdit(surveys, state)}
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
