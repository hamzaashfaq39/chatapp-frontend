import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { ChatData, QueuedData } from "../../../utils/ChatData";
import { setOpenSideBar, setUserData } from "../../../store/slices/dataSlice";
import { useDispatch } from "react-redux";
import { Box, Divider } from "@mui/material";

const txt_style = {
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "200px",
  lineHeight: "20px",
};

const txt_style1 = {
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "180px",
  lineHeight: "20px",
};

const item_style = (isActive) => {
  return {
    borderBottom: `1px solid #DFE2E8`,
    cursor: "pointer",
    backgroundColor: isActive ? "#FEF0EA" : "transparent",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  };
};

const ChatList = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeQueuedIndex, setQueuedActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    dispatch(setUserData(ChatData[index]));
    dispatch(setOpenSideBar(false));

    setActiveIndex(index);
    setQueuedActiveIndex(null);
  };

  const handleQueuedItemClick = (index) => {
    dispatch(setUserData(ChatData[index]));
    dispatch(setOpenSideBar(false));

    setQueuedActiveIndex(index);
    setActiveIndex(null);
  };

  useEffect(() => {
    ChatData && dispatch(setUserData(ChatData[0]));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <List>
        <Box sx={{ padding: "8px 16px" }}>
          <Typography variant="h2">Queued</Typography>
        </Box>

        {QueuedData.map((data, index) => (
          <ListItem
            key={index}
            sx={item_style(index === activeQueuedIndex)}
            onClick={() => handleQueuedItemClick(index)}
          >
            <ListItemAvatar sx={{ minWidth: "50px !important" }}>
              <Avatar src={data.userDetail.imageUrl}>
                {data.userDetail.name.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              primary={
                <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
                  {data?.userDetail?.name}
                </Typography>
              }
              secondary={
                <div>
                  {data.wait ? (
                    <Typography variant="subtitle" style={txt_style1}>
                      {data?.userDetail?.designation} |{" "}
                      {data?.userDetail?.company}
                    </Typography>
                  ) : (
                    <Typography variant="body1" style={txt_style1}>
                      {data?.messages[data.messages.length - 1].sender === "You"
                        ? `You: ${
                            data?.messages[data.messages.length - 1].text
                          }`
                        : data?.messages[data.messages.length - 1].text}
                    </Typography>
                  )}
                </div>
              }
            />
            {data.wait && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  m: 1,
                  "@media (max-width: 670px) and (min-width: 600px)": {
                    display: "none",
                  },
                }}
              />
            )}
            <Box
              sx={{
                width: "85px",
                "@media (max-width: 670px) and (min-width: 600px)": {
                  display: "none",
                },
              }}
            >
              {data.wait ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" align="right">
                    wait time
                  </Typography>
                  <Typography variant="caption" align="right">
                    {data.wait}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="caption" align="right">
                  {data.time}
                </Typography>
              )}
            </Box>
          </ListItem>
        ))}
      </List>

      <List>
        <Box sx={{ padding: "24px 16px" }}>
          <Typography variant="h2">Chats</Typography>
        </Box>

        {ChatData.map((data, index) => (
          <ListItem
            key={index}
            sx={item_style(index === activeIndex)}
            onClick={() => handleItemClick(index)}
          >
            <ListItemAvatar sx={{ minWidth: "50px !important" }}>
              <Avatar src={data.userDetail.imageUrl}>
                {data.userDetail.name.charAt(0).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              primary={
                <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
                  {data.userDetail.name}
                </Typography>
              }
              secondary={
                <div>
                  <Typography variant="subtitle" style={txt_style}>
                    {data?.userDetail?.designation} |{" "}
                    {data?.userDetail?.company}
                  </Typography>

                  <Typography variant="body1" style={txt_style}>
                    {data?.messages[data.messages.length - 1].sender === "You"
                      ? `You: ${data?.messages[data.messages.length - 1].text}`
                      : data?.messages[data.messages.length - 1].text}
                  </Typography>
                </div>
              }
            />
            <Typography variant="caption" align="right">
              1h
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ChatList;
