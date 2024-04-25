import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  Dots,
  Heart,
  InfoIcon,
  PhoneIcon,
  videoIcon,
} from "../../../assets/images";
import { useDispatch } from "react-redux";
import {
  setOpenProfile,
  setOpenSideBar,
} from "../../../store/slices/dataSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const main_div = (theme) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "60px",
    padding: "0px 16px",
    borderBottom: `1px solid ${theme.palette.divider}`,
  };
};

const avatar_style = (theme) => {
  return {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    padding: 0.5,
  };
};

const icon_button = {
  background: "#F0F2F6",
  padding: "4px",
  width: "25px",
  height: "25px",
};

const icon_button2 = {
  background: "transparent",
  padding: "4px",
  width: "25px",
  height: "25px",
};

const Header = ({ data, isSmallScreen }) => {
  const dispatch = useDispatch();
  return (
    <Box sx={main_div}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isSmallScreen && (
          <IconButton
            sx={icon_button}
            onClick={(e) => dispatch(setOpenSideBar(true))}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Box sx={avatar_style}>
          <Typography variant="body2">
            {data?.userDetail?.name?.charAt(0).toUpperCase()}
          </Typography>
        </Box>

        <Typography variant="subtitle" sx={{ fontWeight: 500 }}>
          {data?.userDetail?.name}
        </Typography>
        <IconButton sx={icon_button}>
          <img src={Heart} alt="broadcast" width="100%" />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton sx={icon_button2}>
          <img src={PhoneIcon} alt="broadcast" width="100%" />
        </IconButton>
        <IconButton sx={icon_button2}>
          <img src={videoIcon} alt="broadcast" width="100%" />
        </IconButton>
        <IconButton sx={icon_button2}>
          <img src={Dots} alt="broadcast" width="100%" />
        </IconButton>
        <IconButton
          sx={icon_button2}
          onClick={() => dispatch(setOpenProfile())}
        >
          <img src={InfoIcon} alt="broadcast" width="100%" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
