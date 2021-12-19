import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import UserListGrid from '../Components/UserListGrid';
import SearchBar from '../Components/SearchBar';
import SearchBarBoxed from '../Components/SearchBarBoxed';


export default function UserList() {


  return (

      <>
        <Navigation/>
        <Container>
          <SearchBarBoxed/>
          <Paper>
            <UserListGrid/>
          </Paper>
          
        </Container>
      </>
  );
}