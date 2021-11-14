import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          size="small"
          label="E-Mail"
          defaultValue="hello@world.com"
        />
      </div>
      
      
    </Box>
  );
}
