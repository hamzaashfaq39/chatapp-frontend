import { palette } from "../palette";

export const MuiButton = {
  styleOverrides: {
    // Name of the slot
    contained: {
      borderRadius: "30px",
      padding: "10px 10px",
      width: "100% ",
      height: 40,
      boxShadow: "none",
      color: "#fff",
      background: "linear-gradient(90deg, #4FADE8 0%, #2C6182 100%)",
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 0.36,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "linear-gradient(90deg, #4FADE8 0%, #2C6182 100%)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      "&.Mui-disabled": {
        backgroundColor: `#013eb796 !important`,
        color: "#fff",
        opacity: 1,
      },
    },
    outlined: {
      padding: "15px 15px",
      minWidth: "20px",
      width: "100% ",
      height: 38,
      border: `1px solid rgb(214, 221, 235)`,
      boxShadow: "none",
      borderRadius: "30px",
      color: "rgb(52 114 152)",
      backgroundColor: "#fff",
      fontSize: 14,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: 600,
      letterSpacing: 0.36,
      textTransform: "capitalize",

      "&:hover": {
        backgroundColor: palette.primary.main,
        border: `1px solid #3f6dfd ${palette.primary.main}`,
        color: "#fff",
        
      },
      
      "&.Mui-disabled": {
        backgroundColor: "#D5D4DC !important",
        color: "#8B849B",
        opacity: 1,
      },
    },

    text: {
      textDecoration: "none",
      padding: "6px 0px",
      fontSize: 16,
      fontWeight: 500,
      fontStretch: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "left",
      color: palette.primary.dark,
      textTransform: "none",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: "transparent",
      },
    },
    white: {
      padding: "18px 35px ",
      maxWidth: "243px",
      width: "100% ",
      height: 49,
      boxShadow: "rgba(1, 62, 183, 0.3) 5px 5px 10px",
      borderRadius: "10px",
      color: palette.white,
      backgroundColor: "#fff",
      fontFamily: "Poppins-Regular",
      fontSize: 18,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "Bold",
      letterSpacing: 0.36,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&.Mui-disabled": {
        backgroundColor: "#D5D4DC !important",
        color: "#8B849B",
        opacity: 1,
      },
    },

    activity: {
      padding: "0px",
      maxWidth: 120,
      width: "100%",
      height: 30,
      color: palette.white,
      background: "#0575E6",
      fontFamily: "Poppins-Medium",
      fontSize: 12,
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: 0.36,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#3f6dfd",
        border: "1px solid #3f6dfd",
        color: "#fff",
      },
      "&.Mui-disabled": {
        backgroundColor: "#D5D4DC !important",
        color: "#8B849B",
        opacity: 1,
      },
    },
    
  },
};
