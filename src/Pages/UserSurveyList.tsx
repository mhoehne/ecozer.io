import { Box, Typography } from '@mui/material';

import { AccountType } from '../API';
import SurveyListGrid from '../Components/Grids/SurveyListGrid';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import Account from './Account';

{
  /* TODO */
}
{
  /* # replace list data with survey entries */
}

{
  /* Note: */
}

interface UserListProps {
  account: AccountType | null;
}

export default function UserList(props: UserListProps) {
  if (props.account === null) {
    return null;
  }

  return (
    <>
      <Box
        mx={{ xs: 4, sm: 4 }}
        mt={{ xs: 2, sm: 12 }}
        mb={{ xs: 2, sm: 5 }}
        px={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="background.paper"
        color="text.primary"
      >
        <Typography variant="h4" sx={{ mx: 2 }}>
          Umfragedaten
        </Typography>
        {/* <SearchBarBoxed
          enableAddProductButton={false}
          enableAutocompleteSearch={false}
        /> */}
        <SurveyListGrid />
      </Box>
    </>
  );
}
