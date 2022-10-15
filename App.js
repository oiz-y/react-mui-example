import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';

function TabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'rgb(50, 200, 150)',
              height: '10px'
            }
          }}
          aria-label="basic tabs example">
          <Tab label={<span className='tabLabel'>Item One</span>} {...a11yProps(0)} />
          <Tab label={<span className='tabLabel'>Item Two</span>} {...a11yProps(1)} />
          <Tab label={<span className='tabLabel'>Item Three</span>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

function App() {
  return (
    <Box className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Sample</Typography>
        </Grid>
        <Grid item xs={8}>
          <BasicTabs />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
