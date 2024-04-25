import React from "react";
import TopBar from "../components/topbar";
import SideBar from "../components/sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          height: `calc(100vh - 57px)`,
        }}
      >
        <SideBar />
        <Box sx={{ width: `calc(100% - 66px)` }}>{children}</Box>
      </Box>
    </div>
  );
};

export default Layout;
