import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MenuDots } from "../../../assets/images";
import ChatList from "./List";
import { useSelector } from "react-redux";

const main_div = (theme) => {
  return {
    maxWidth: { xs: "100%", sm: "330px" },
    minWidth: { xs: "100%", sm: "200px", md: "275px" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRight: `1px solid ${theme.palette.divider}`,
    borderLeft: `1px solid ${theme.palette.divider}`,
    overflowY: "scroll",
  };
};

const chat_heading_style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  mb: 2.5,
};

const icon_button = {
  background: "transparent",
  padding: "4px",
  width: "25px",
  height: "25px",
};

const chat_list_search = {
  display: "flex",
  flexDirection: "column",
  padding: 2,
};

const textFieldStyle = (theme) => {
  return {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
      padding: "0px 0px 0px 20px  !important",
      textAlign: "left",
      borderRadius: "8px",
      height: "40px",
      background: theme.palette.primary.bg_gray,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.lightGray,
        border: "0px",
      },
    },
  };
};

const ChatSideBar = () => {
  const open = useSelector((state) => state.data.sideBar);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (open && isSmallScreen) || !isSmallScreen ? (
    <Box sx={main_div}>
      <Box sx={chat_list_search}>
        <Box sx={chat_heading_style}>
          <Typography variant="h3">Chats</Typography>
          <IconButton sx={icon_button}>
            <img src={MenuDots} alt="broadcast" width="100%" />
          </IconButton>
        </Box>
        <TextField placeholder="Search" sx={textFieldStyle} />
      </Box>
      <ChatList />
    </Box>
  ) : null;
};

export default ChatSideBar;
