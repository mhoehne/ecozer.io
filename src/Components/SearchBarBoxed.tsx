import SearchBar from '../Components/SearchBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function SearchBarBoxed() {
  return (
    <>
      <Box
        mx={{ xs: 0, sm: 0 }}
        py={{ xs: 2, sm: 2 }}
        px={{ xs: 2, sm: 4 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Box>
    </>
  );
}
