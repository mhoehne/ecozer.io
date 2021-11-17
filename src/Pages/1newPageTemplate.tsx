import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProTip from '../Components/ProTip';


export default function PutPageNameHere() {

/* Custom Counter */
const [count, setCount] = useState(0);
const incrementCounter = () => {
  setCount(count+1);
}

const decreaseCounter = () => {
  setCount(count-1);
}

  return (

      <div>
          <Box sx={{
              marginLeft: '50px',}}>
      <Button onClick={incrementCounter} >Count {count}</Button>
      <Button onClick={decreaseCounter} >-1</Button>
      <Typography variant="h4" component="h1" gutterBottom color="#FFF">
        React App v5 example with TypeScript
      </Typography>
      <ProTip />
      {/*<Copyright />*/}
    </Box>
      </div>
  );
}
