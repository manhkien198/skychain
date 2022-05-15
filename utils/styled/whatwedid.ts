import { styled } from "@mui/material/styles";
export const SectionWrapper = styled("section")(({ theme }) => ({
  padding: "44px",
  border: "4px solid #FBFCFD;",
  borderRadius: 20,
  margin: "0 135px",
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(1),
  },
  [theme.breakpoints.only("lg")]: {
    marginBottom: 0,
  },
  boxShadow: "0 4px 10px #ccc",
}));
