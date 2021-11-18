import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function FormPropsTextFields() {


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '10rem', margin: '0rem', },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          size="medium"
          label="E-Mail"
          defaultValue="hello@world.com"
        />
      </div>
    </Box>
  );
}
