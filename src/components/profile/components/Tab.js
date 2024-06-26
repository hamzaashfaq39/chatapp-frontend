import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Overview from "./Overview";

const tab_style = (theme) => {
  return {
    color: theme.palette.primary.gray,
    fontFamily: "avenir",
    fontSize: "14px",
    textTransform: "none",
  };
};

function CustomTabPanel(props) {
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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center !important",
            },
          }}
        >
          <Tab label="Overview" {...a11yProps(0)} sx={tab_style} />
          <Tab label="Contact History" {...a11yProps(1)} sx={tab_style} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Overview data={data} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        No contact history found!
      </CustomTabPanel>
    </Box>
  );
}
