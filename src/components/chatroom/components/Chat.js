import React, { useState, useEffect, useRef } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const Message = ({ sender, text, avatarUrl, selfie, timestamp }) => {
  const theme = useTheme();
  const isCurrentUser = sender === "You";

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: isCurrentUser ? "row-reverse" : "row",
        gap: "10px",
        "& .MuiAvatar-root": { width: "30px", height: "30px" },
      }}
    >
      <ListItemAvatar sx={{ minWidth: "30px  !important" }}>
        <Avatar src={isCurrentUser ? selfie : avatarUrl} />
      </ListItemAvatar>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 0.5,
            flexDirection: isCurrentUser ? "row-reverse" : "row",
          }}
        >
          <Typography variant="h4">{sender}</Typography>
          <Typography variant="body1">
            {new Date(timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: isCurrentUser
              ? "10px 0px 10px 10px"
              : "0px 10px 10px 10px",
            background: isCurrentUser
              ? theme.palette.primary.main
              : theme.palette.primary.bg_chat,
            padding: 1,
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="subtile1"
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "20px",
              letterSpacing: "normal",
              color: isCurrentUser ? "#fff" : "#1B1F29",
              textAlign: "left",
              wordBreak: "break-word",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

const Conversation = ({ messages, data }) => {
  const conversationEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the conversation when it updates
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        height: `calc(100% - 152px)`,
        overflowY: "scroll",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          text={message.text}
          timestamp={message.timestamp}
          avatarUrl={data?.userDetail?.imageUrl}
          selfie={data?.imageUrl}
        />
      ))}
      <div ref={conversationEndRef} />
    </Box>
  );
};

export default Conversation;
