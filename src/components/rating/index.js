import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const start_style = { color: "#FFA32D", height: "0.8em", width: "0.8em" };

const StaticRating = ({ value }) => {
  const theme = useTheme();
  const filledStars = Math.floor(value); // Number of fully filled stars
  const hasHalfStar = value % 1 !== 0; // Whether there is a half-filled star

  // Render filled stars
  const renderFilledStars = () => {
    const filledStarsArray = [];
    for (let i = 0; i < filledStars; i++) {
      filledStarsArray.push(<StarRoundedIcon key={i} sx={start_style} />);
    }
    return filledStarsArray;
  };

  // Render half star
  const renderHalfStar = () => {
    return hasHalfStar ? <StarHalfRoundedIcon sx={start_style} /> : null;
  };

  // Render remaining empty stars
  const renderEmptyStars = () => {
    const emptyStarsArray = [];
    const totalStars = 5;
    const remainingStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      emptyStarsArray.push(
        <StarOutlineRoundedIcon key={filledStars + i} sx={start_style} />
      );
    }
    return emptyStarsArray;
  };

  return (
    <Box display="flex" alignItems="center">
      {renderFilledStars()}
      {renderHalfStar()}
      {renderEmptyStars()}
      <Typography variant="subtitle1" sx={{ fontWeight: 800, ml: 1 }}>
        {value}
      </Typography>
    </Box>
  );
};

export default StaticRating;
