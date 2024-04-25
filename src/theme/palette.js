import { red, blue, blueGrey, grey } from "@mui/material/colors";

const bg_gray = "#F0F2F6";
const gray = "#5F6269";
const orange = "#F36531";
const black = "#202223";
const white = "#ffff";
const txt_dark = "#344054";
const txt_light = "#667085";
const bg_chat = "#DFE2E8";

export const palette = {
  black,
  white,
  gray,

  primary: {
    main: orange,
    white,
    black,
    gray,
    bg_gray,
    txt_dark,
    txt_light,
    bg_chat,
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400],
  },
  text: {
    primary: black,
    secondary: white,
    link: blue[600],
  },
  link: blue[800],
  icon: blueGrey[600],
  background: {
    default: white,
    paper: white,
  },
  divider: "#DFE2E8",
};
