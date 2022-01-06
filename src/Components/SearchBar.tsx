import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


export default function SearchBar() {

  return (
    
      <TextField sx={{ width: 350 }}
        label="Suchen..."
        InputProps={{
          type: 'search',
        }}
      >
        <SearchIcon/>
        </TextField>
    )};

