import { styled } from "@mui/material/styles";
import theme from "../theming/theming";
export const MediaSection = styled("section")(() => ({
  padding: "120px 234px",
  [theme.breakpoints.between("xs", "md")]: {
    padding: 0,
  },
}));
export const MediaInstance = styled("div")(() => ({
  padding: "80px 0 0",
}));
