import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MensProduct from "./MensProduct";
import WomensProduct from "./WomensProduct";
import KidsProduct from "./KidsProduct";

const ProductTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box className="w-full flex flex-col items-center">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Mens" value="1" />
              <Tab label="Womens" value="2" />
              <Tab label="Kids" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <MensProduct />
          </TabPanel>
          <TabPanel value="2">
            <WomensProduct />
          </TabPanel>
          <TabPanel value="3">
            <KidsProduct />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ProductTabs;
