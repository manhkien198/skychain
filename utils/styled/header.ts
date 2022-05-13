import { styled } from "@mui/material/styles";
export const NavBar = styled("nav")(({ theme }) => ({
  position: "fixed",
  top: 0,
  padding: "24px 143px 24px 136px",
  display: "flex",
  backgroundColor: "#FBFBFD",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0",
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.only("lg")]: {
    padding: 0,
    justifyContent: "center",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    justifyContent: "space-between",
  },
}));
export const List = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  paddingLeft: 0,
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const ListItem = styled("li")(({ theme }) => ({
  padding: "0 20px",
  fontSize: 15,
  fontWeight: 400,
  color: "#6F777B",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(1.5),
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: theme.spacing(1),
  },
  "&.active-link": {
    fontWeight: 600,
    color: "#222222",
  },
}));
