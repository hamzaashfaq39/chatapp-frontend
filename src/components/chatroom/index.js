import React, { useEffect, useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import Header from "./components/Header";
import Chat from "./components/Chat";
import {
  BoldIcon,
  CameraIcon,
  Emojiicon,
  EraseIcon,
  ItallicIcon,
  LinkIcon,
  PhotoIcon,
  PlusCircle,
  SIcon,
  ShareCard,
} from "../../assets/images";
import { useSelector } from "react-redux";

const iconButtonStyle = {
  padding: "8px",
  width: "28px",
  height: "28px",
};

const smallIconButtonStyle = {
  padding: "6px",
  width: "28px",
  height: "28px",
};

const extraSmallIconButtonStyle = {
  padding: "4px",
  width: "28px",
  height: "28px",
};

const smallestIconButtonStyle = {
  padding: "2px",
  width: "28px",
  height: "28px",
};

const mainDivStyle = (theme) => ({
  display: "block",
  width: "100%",
  minWidth: { xs: "100%", sm: "325px", md: "325px" },
  height: "100%",
  borderRight: `1px solid ${theme.palette.divider}`,
});

const textfieldStyle = (theme) => {
  return {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.lightGray,
        borderLeft: "0px",
        borderRight: "0px",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.lightGray,
        borderLeft: "0px",
        borderRight: "0px",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.lightGray,
        borderRadius: "0px",
        outline: "none",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#E8E9E9",
        borderLeft: "0px",
        borderRight: "0px",
      },
      borderRadius: "0px",
    },
  };
};

const ChatRoom = () => {
  const open = useSelector((state) => state.data.sideBar);
  const data = useSelector((state) => state.data.data);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Implement your logic to send the message
    const data = {
      sender: "You", // Static sender
      text: newMessage, // Dynamic message from user input
      avatarUrl: "https://mui.com/static/images/avatar/1.jpg", // Static avatar
      timestamp: new Date().toISOString(), // Dynamic timestamp based on current time
    };
    setConversation([...conversation, data]); // Reset the message input field after sending
    setNewMessage("");
  };

  useEffect(() => {
    data.messages && setConversation(data.messages);
  }, [data]);

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

  return (!open && isSmallScreen) || !isSmallScreen ? (
    <Box sx={mainDivStyle}>
      <Header data={data} isSmallScreen={isSmallScreen} />
      <Chat messages={conversation} data={data} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          background: "#fff",
          height: "80px",
          marginTop: "10px",
        }}
      >
        <form onSubmit={handleSendMessage} style={{ width: "100%" }}>
          <TextField
            fullWidth
            placeholder="Message to Sophie | Away for one hour"
            size="small"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            sx={textfieldStyle}
          />
        </form>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 0.5,
            alignItems: "center",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton sx={iconButtonStyle}>
              <img src={BoldIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={iconButtonStyle}>
              <img src={ItallicIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={smallIconButtonStyle}>
              <img src={SIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={smallIconButtonStyle}>
              <img src={EraseIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={smallIconButtonStyle}>
              <img src={Emojiicon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={extraSmallIconButtonStyle}>
              <img src={LinkIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={smallIconButtonStyle}>
              <img src={PhotoIcon} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={extraSmallIconButtonStyle}>
              <img src={CameraIcon} alt="broadcast" width="100%" />
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={smallIconButtonStyle}>
              <img src={ShareCard} alt="broadcast" width="100%" />
            </IconButton>
            <IconButton sx={smallestIconButtonStyle}>
              <img src={PlusCircle} alt="broadcast" width="100%" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default ChatRoom;
