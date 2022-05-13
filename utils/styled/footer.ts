import { styled } from "@mui/material/styles";
import theme from "../theming/theming";
export const FooterSkyChain = styled("footer")(() => ({
  padding: "64px 367px 24px",
  backgroundColor: "#F0F4F7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));
