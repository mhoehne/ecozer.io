import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import AppBar from './AppBar';
import { Button } from '@mui/material';






export default function App() {

const [count, setCount] = useState(0);
const incrementCounter = () => {
  setCount(count+1);
}

const decreaseCounter = () => {
  setCount(count-1);
}

  return (
    <> {/* fragment */}
    <AppBar/><Container maxWidth="sm">
      <Button onClick={incrementCounter} >Count {count}</Button>
      <Button onClick={decreaseCounter} >-1</Button>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        React App v5 example with TypeScript
      </Typography>
      <ProTip />
      <Copyright />
    </Box>
  </Container>
  </>
    
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}