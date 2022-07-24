import UserListGrid from '../Components/Grids/UserListGrid';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import { Box } from '@mui/material';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

export default function UserList() {
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
      >
        <SearchBarBoxed />
        <UserListGrid />
      </Box>
    </>
  );
}
