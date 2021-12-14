import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import UserListGrid from '../Components/UserListGrid';
import SearchBar from '../Components/SearchBar';


export default function UserList() {


  return (

      <>
        <Navigation/>
        <Container>
          <SearchBar/>
          <Paper>
            <UserListGrid/>
          </Paper>
          
        </Container>
      </>
  );
}