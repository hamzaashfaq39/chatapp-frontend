import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Iconpeople from "../../assets/images/Iconpeople";
import RoomIcon from "../../assets/images/rooms";
import MessageIcon from "../../assets/images/MessageIcon";

const SideBar = () => {
  const theme = useTheme();
  const location = useLocation();

  const main_div = {
    width: "66px",
    borderRight: `1px solid ${theme.palette.divider}`,
  };

  const listItemStyle = (item) => {
    return {
      padding: "12px 12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: item === location.pathname ? "#F36531" : "#5F6269",
      background: item === location.pathname ? "#FEF0EA" : "transparent",
      borderRight: item === location.pathname ? "2px solid #F36531" : "0px",
    };
  };

  return (
    <Box sx={main_div}>
      <List sx={{ padding: "0px" }}>
        <ListItem
          button
          component={Link}
          to="/chats"
          sx={listItemStyle("/chats")}
        >
          <ListItemIcon sx={{ minWidth: "0px !important" }}>
            <MessageIcon
              color={"/chats" === location.pathname ? "#F36531" : "#5F6269"}
            />
          </ListItemIcon>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 800,
              mt: 1,
              color: "/chats" === location.pathname ? "#F36531" : "#5F6269",
            }}
          >
            Chats
          </Typography>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/people"
          sx={listItemStyle("/people")}
        >
          <ListItemIcon sx={{ minWidth: "0px !important" }}>
            <Iconpeople
              color={"/people" === location.pathname ? "#F36531" : "#5F6269"}
            />
          </ListItemIcon>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 800,
              mt: 1,
              color: "/people" === location.pathname ? "#F36531" : "#5F6269",
            }}
          >
            People
          </Typography>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/rooms"
          sx={listItemStyle("/rooms")}
        >
          <ListItemIcon sx={{ minWidth: "0px !important" }}>
            <RoomIcon
              color={"/rooms" === location.pathname ? "#F36531" : "#5F6269"}
            />
          </ListItemIcon>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 800,
              mt: 1,
              color: "/rooms" === location.pathname ? "#F36531" : "#5F6269",
            }}
          >
            Rooms
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
