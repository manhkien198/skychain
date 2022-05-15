import { styled } from "@mui/material/styles";
import theme from "../theming/theming";
export const TeamSection = styled("section")(() => ({
  padding: "120px 134px 120px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
}));
