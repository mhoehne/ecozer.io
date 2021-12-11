import Navigation from '../Components/Navigation';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import UserListGrid from '../Components/UserListGrid';


export default function UserList() {


  return (

      <>
        <Navigation/>
        <Container>
          <Paper>
            <UserListGrid/>
          </Paper>
          
        </Container>
      </>
  );
}