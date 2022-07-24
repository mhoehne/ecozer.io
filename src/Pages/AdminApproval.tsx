import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

{
  /* TODO */
}
{
  /*  */
}

{
  /* Note: */
}

{
  /* catch each product with their state and display them in the correct tab "pending"/"rejected"/"published"(approved) */
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Overview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Box
          px={{ xs: 2, sm: 2 }}
          py={{ xs: 2, sm: 2 }}
          mx={{ xs: 0, sm: 0 }}
          my={{ xs: 2, sm: 2 }}
          bgcolor="background.paper"
          color="text.primary"
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending" {...a11yProps(0)} />
              <Tab label="Rejected" {...a11yProps(1)} />
              <Tab label="Approved" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={0}></Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={0}></Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={0}></Grid>
        </TabPanel>
      </Container>
    </>
  );
}
