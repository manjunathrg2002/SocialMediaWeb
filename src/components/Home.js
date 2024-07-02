import React, { useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import { Box, Tab, Tabs, } from "@mui/material";
import ImageCard from "./AdsCard";
import Sidebar from "./Sidebar";
import SidebarImg from "./SidebarImg";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = ( newValue) => {
    setActiveTab(newValue);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#F1F1F1" }}>
        <Header />
        <Box sx={{ display: "flex" }}>
          <Box height={"707px"} width={"260px"} pt={2}>
            <SideNav />
          </Box>
          <Box>
            <Box sx={{ p: 2, ml: 8, br: "10px" }}>
              <TabPanel value={activeTab} index={0}>
                <ImageCard />
              </TabPanel>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab label="Artists" />
              <Tab label="Photographers" />
            </Tabs>
            <TabPanel value={activeTab} index={0}>
              <Box sx={{ p: 2, br: "10px" }}>
                <Sidebar />
              </Box>
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <Box sx={{ p: 2, br: "10px" }}>
                <SidebarImg />
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default Home;
