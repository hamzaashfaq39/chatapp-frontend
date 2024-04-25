import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Bell, Broadcast, Logo, ProfileCard } from "../../assets/images";

const main_div = (theme) => {
  return {
    minHeight: "56px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 25px",
  };
};

const icon_div = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1,
};

const icon_button = { background: "#F0F2F6", padding: "8px" };

const profile_div = (theme) => {
  return {
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px",
    backgroundColor: theme.palette.primary.main,
    width: "15px",
    height: "14px",
  };
};

const TopBar = () => {
  return (
    <Box sx={main_div}>
      <Box>
        <img src={Logo} alt="logo" />
      </Box>

      <Box sx={icon_div}>
        <IconButton sx={icon_button}>
          <img src={Broadcast} alt="broadcast" width="100%" />
        </IconButton>

        <IconButton sx={icon_button}>
          <img src={ProfileCard} alt="broadcast" width="100%" />
        </IconButton>

        <IconButton sx={icon_button}>
          <img src={Bell} alt="broadcast" width="100%" />
        </IconButton>

        <Box sx={profile_div}>
          <Typography variant="body2">OR</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
