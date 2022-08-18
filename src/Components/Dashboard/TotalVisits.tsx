import { Avatar, Box, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function TotalVisits() {
  return (
    <>
      <Box
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        mx={{ xs: 0, sm: 0 }}
        my={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Aufgerufen insgesamt:
            </Typography>
            <Typography color="textPrimary" variant="h4">
              1973
            </Typography>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2,
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box> */}
      </Box>
    </>
  );
}
