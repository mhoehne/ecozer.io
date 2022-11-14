import { Box, Typography } from '@mui/material';

import { AccountType, ReportingType } from '../API';
import ReportingListGrid from '../Components/Grids/ReportingListGrid';
import SearchBarBoxed from '../Components/SearchBarBoxed';
import Account from './Account';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

interface ReportingListProps {
  account: AccountType | null;
}

export default function ReportingList(props: ReportingListProps) {
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
          Reportings
        </Typography>
        {/* <SearchBarBoxed
          enableAddProductButton={false}
          enableAutocompleteSearch={false}
        /> */}
        <ReportingListGrid />
      </Box>
    </>
  );
}
