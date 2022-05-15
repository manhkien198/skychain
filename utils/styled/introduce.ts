import { styled } from "@mui/material/styles";
export const Title = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
export const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 24.1, 2.5, 24.1),
  marginBottom: theme.spacing(20),

  [theme.breakpoints.down("md")]: {
    padding: 0,
    marginTop: theme.spacing(10),
  },
}));
