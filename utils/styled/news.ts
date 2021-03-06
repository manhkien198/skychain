import { styled } from "@mui/material/styles";
import theme from "../theming/theming";
export const NewsSection = styled("section")(() => ({
  padding: "0 134px 120px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(10),
  },
}));
