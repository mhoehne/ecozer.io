import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import UserListGrid from '../Components/UserListGrid';
import SearchBar from '../Components/SearchBar';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import { Box } from '@mui/material';


export default function UserList() {


  return (

      <><Box sx={{mt: 12}}></Box>
        <Box
          mx={{ xs: 4, sm: 4}}
          my={{ xs: 2, sm: 2}}
          px={{ xs: 2, sm: 2}}
          py={{ xs: 2, sm: 2}}
          bgcolor="background.paper"
          color="text.primary">
          <SearchBarBoxed/>
          <UserListGrid/>
        </Box>
      </>
  );
}