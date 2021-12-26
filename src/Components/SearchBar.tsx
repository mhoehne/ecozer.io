import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


export default function SearchBar() {

  return (
    
      <TextField sx={{ width: 350 }}
        label="Produkt suchen..."
        InputProps={{
          type: 'search',
        }}
      >
        <SearchIcon/>
        </TextField>
    )};

