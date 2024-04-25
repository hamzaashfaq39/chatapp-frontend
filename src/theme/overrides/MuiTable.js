import { palette } from "../palette";

export const MuiTable = {
  styleOverrides: {
    root: {
      minWidth: "900px",
      backgroundColor: "transparent", // Set the table background to transparent

      "& .MuiTableHead-root": {
        color: "#fff",
        background: "transparent !important",
      },
      "& .MuiTableRow-root:nth-of-type(odd)": { // Change ":nth-child" to ":nth-of-type"
        backgroundColor: palette.primary.tableRowColor, // Set the odd rows' background color
      },
      "& .MuiTableCell-root": {
        whiteSpace: "noWrap",
        borderBottom: "none !important",
        padding: "0px 12px 0px 8px !important",
      },
      "& .MuiTableRow-root": {
        height: "45px",
        "& .MuiTableCell-root:last-child": {
          width: "7%", // Align text in the last cell of each row to the right
        },
      },
    },
  },
};

