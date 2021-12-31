import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import UserListGrid from '../Components/UserListGrid';
import SearchBar from '../Components/SearchBar';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import { Box } from '@mui/material';


export default function UserList() {


  return (

      <>
        <Container>
          <SearchBarBoxed/>
          <Box>
            <UserListGrid/>
          </Box>
        </Container>
      </>
  );
}