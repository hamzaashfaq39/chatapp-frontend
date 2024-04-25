import { Box, IconButton, Typography, Avatar } from "@mui/material";
import React from "react";
import { Heart, MenuDots } from "../../../assets/images";
import StaticRating from "../../rating";

const icon_button = {
  background: "#F0F2F6",
  padding: "4px",
  width: "25px",
  height: "25px",
};

const Header = ({ data }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start", // Center vertically
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar src={data?.userDetail?.imageUrl}>
            {data?.userDetail?.name?.charAt(0).toUpperCase()}
          </Avatar>
          <Box
            sx={{
              ml: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5,
              minHeight: "72px",
            }}
          >
            <Typography variant="h5">{data?.userDetail?.name}</Typography>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              {data?.userDetail?.designation} at {data?.userDetail?.company}
            </Typography>
            <StaticRating value={3.5} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton sx={icon_button}>
            <img src={Heart} alt="broadcast" width="100%" />
          </IconButton>
          <IconButton sx={icon_button}>
            <img src={MenuDots} alt="broadcast" width="100%" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
