import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
      textTransform: "none",
    },
    h3: {
      fontSize: 24,
      marginBottom: 44,
      fontWeight: 600,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500,
      color: "#C0C0C0",
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      color: "#C0C0C0",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "inherit",
          cursor: "pointer",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          textAlign: "center",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: 176,
          height: 1,
          margin: "auto",

          "&.MuiDivider-vertical": {
            width: "1px",
            height: "176px",
          },
        },
      },
    },
  },
});
export default theme;
