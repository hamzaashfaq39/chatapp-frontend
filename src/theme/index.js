"use client";
import { typography } from "./typography";
import { palette } from "./palette";
import { overrides } from "./overrides";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette,
  typography: {
    // fontFamily: "Poppins-Medium",
    // fontSize: 14,
    ...typography,
  },
  components: {
    ...overrides,
  },
});

export default Theme;
