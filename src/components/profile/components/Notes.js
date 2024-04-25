import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";

const Notes = () => {
  return (
    <Box
      sx={{
        width: "1OO%",
        height: "110px",
        background: "#F0F2F6",
        overflowY: "scroll",
        overflowX: "scroll",
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "left", mb: 1 }}>
        Notes
      </Typography>
      <textarea
        aria-label="minimum height"
        style={{
          borderRadius: "8px",
          width: "100%",
          minHeight: "70px",
          borderColor: "#B5B8BE",
        }}
      />
    </Box>
  );
};

export default Notes;
