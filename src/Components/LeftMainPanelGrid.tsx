{
  /*CURRENTLY NOT IN USE*/
}

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function LeftMainPanelGrid() {
  return (
    <>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid
          item
          xs={4}
          sm={4}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            px={{ xs: 2, sm: 2 }}
            py={{ xs: 0, sm: 0 }}
            mx={{ xs: 4, sm: 4 }}
            my={{ xs: 4, sm: 4 }}
            bgcolor="background.paper"
            color="text.primary"
          >
            0
          </Box>
        </Grid>

        <Grid
          item
          xs={8}
          sm={8}
          height="50rem"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Box
            px={{ xs: 2, sm: 2 }}
            py={{ xs: 0, sm: 0 }}
            mx={{ xs: 4, sm: 4 }}
            my={{ xs: 4, sm: 4 }}
            bgcolor="background.paper"
            color="text.primary"
          >
            <Grid item xs={12} sm={6}>
              1
            </Grid>
            <Grid item xs={12} sm={6}>
              2
            </Grid>
            <Grid item xs={12} sm={6}>
              3
            </Grid>
            <Grid item xs={12} sm={6}>
              4
            </Grid>
            <Grid item xs={12} sm={6}>
              5
            </Grid>
            <Grid item xs={12} sm={6}>
              6
            </Grid>
            <Grid item xs={12} sm={6}>
              7
            </Grid>
            <Grid item xs={12} sm={6}>
              8
            </Grid>
            <Grid item xs={12} sm={6}>
              9
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
