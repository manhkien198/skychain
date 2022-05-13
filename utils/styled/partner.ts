import { styled } from "@mui/material/styles";
import theme from "../theming/theming";

export const PartnerSection = styled("section")(() => ({
  padding: "68px 220px 44px",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));
