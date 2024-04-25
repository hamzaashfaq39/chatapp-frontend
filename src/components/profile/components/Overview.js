import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";

const accordion_style = (theme) => {
  return {
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    margin: "0px !important",
    borderRadius: "0px !important",
    "& .Mui-expanded": {
      "& .MuiSvgIcon-root": {
        fill: theme.palette.primary.main,
      },
    },
  };
};

const info_style = { display: "flex", flexDirection: "column", mb: 1 };

export default function Overview({ data }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(expanded);

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={accordion_style}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="subtitle"
            sx={{
              width: "45%",
              flexShrink: 0,
              color:
                expanded === "panel1"
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          >
            User Detail
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            maxHeight: `calc(100vh - 480px)`,
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Box sx={info_style}>
            <Typography variant="subtitle1">Email Address:</Typography>
            <Typography variant="subtitle">
              {data?.userDetail?.email}
            </Typography>
          </Box>
          <Box sx={info_style}>
            <Typography variant="subtitle1">Alternative Email: </Typography>
            <Typography variant="subtitle">
              {data?.userDetail?.altEmail}
            </Typography>
          </Box>
          <Box sx={info_style}>
            <Typography variant="subtitle1">Date of Birth: </Typography>
            <Typography variant="subtitle">{data?.userDetail?.dob}</Typography>
          </Box>

          <Box sx={info_style}>
            <Typography variant="subtitle1">Country: </Typography>
            <Typography variant="subtitle">
              {" "}
              {data?.userDetail?.country}
            </Typography>
          </Box>

          <Box sx={info_style}>
            <Typography variant="subtitle1">State: </Typography>
            <Typography variant="subtitle">
              {" "}
              {data?.userDetail?.state}
            </Typography>
          </Box>

          <Box sx={info_style}>
            <Typography variant="subtitle1">City: </Typography>
            <Typography variant="subtitle">
              {" "}
              {data?.userDetail?.city}
            </Typography>
          </Box>

          <Box sx={info_style}>
            <Typography variant="subtitle1">Postal Code: </Typography>
            <Typography variant="subtitle">
              {data?.userDetail?.postalCode}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={accordion_style}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant="subtitle"
            sx={{
              width: "45%",
              flexShrink: 0,
              color:
                expanded === "panel2"
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          >
            Tags (5)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle">No tag found!</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
