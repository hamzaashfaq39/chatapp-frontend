import React from "react";
import Header from "./components/Header";
import LabTabs from "./components/Tab";
import { Box, Drawer, Hidden } from "@mui/material";
import Notes from "./components/Notes";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfile } from "../../store/slices/dataSlice";

const mainDivStyles = (open) => ({
  maxWidth: "330px",
  width: "100%",
  display: open ? "flex" : "none",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
});

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const open = useSelector((state) => state.data.open);

  return (
    <>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          onClose={() => {
            dispatch(setOpenProfile(false));
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "330px",
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={mainDivStyles}>
            <Header data={data} />
            <LabTabs data={data} />
            <Notes />
          </Box>
        </Drawer>
      </Hidden>
      <Box sx={mainDivStyles(open)}>
        <Header data={data} />
        <LabTabs data={data} />
        <Notes />
      </Box>
    </>
  );
};

export default Profile;
