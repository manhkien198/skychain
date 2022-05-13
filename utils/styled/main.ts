import { styled } from "@mui/material/styles";
export const Main = styled("main")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
