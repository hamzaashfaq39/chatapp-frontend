import React from "react";
import Profile from "../../components/profile";
import ChatRoom from "../../components/chatroom";
import { Box } from "@mui/material";
import ChatSideBar from "./components/ChatSideBar";

const Chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: `calc(100vh - 57px)`,
      }}
    >
      <ChatSideBar />
      <ChatRoom />
      <Profile />
    </Box>
  );
};

export default Chat;
