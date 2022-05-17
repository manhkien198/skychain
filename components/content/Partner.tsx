import { Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { useState } from "react";
import { partner } from "../../common/constant";
import { PartnerSection } from "../../utils/styled";
import theme from "../../utils/theming/theming";

const useStyles = makeStyles(() => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(10),
    },
  },
  title: {
    marginBottom: 0,
    fontWeight: 700,
  },
  subtitle: {
    width: 450,
    height: 24,
    margin: "0 auto 30px",
    textAlign: "center",
    marginTop: 16,
    [theme.breakpoints.down("md")]: {
      marginBottom: 44,
      width: "100%",
      gap: 5,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 144,
      width: "100%",
      gap: 5,
    },
  },
  box: {
    padding: "4px 8px",
    borderRadius: 20,
    border: "1px solid #c0c0c0",
    marginRight: 8,
    cursor: "pointer",
  },
  container: {
    margin: "16px auto 24px",
  },
  boxImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export default function Partner() {
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  return (
    <PartnerSection id="partner" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        PARTNER
      </Typography>
      <Grid container className={classes.subtitle} justifyContent="center">
        <Grid item xs={12} sm={2.5} md={3} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(1)}>
            <button className={toggle === 1 ? "tabs active-tab" : "tabs"}>
              Communities
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={3} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(2)}>
            <button className={toggle === 2 ? "tabs active-tab" : "tabs"}>
              KOLs
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={3} lg={3} onClick={() => toggleTab(3)}>
          <Box className={classes.box}>
            <button className={toggle === 3 ? "tabs active-tab" : "tabs"}>
              VCs
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={3} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(4)}>
            <button className={toggle === 4 ? "tabs active-tab" : "tabs"}>
              Launchpads
            </button>
          </Box>
        </Grid>
      </Grid>
      <Box className={toggle === 1 ? "content active-content" : "content"}>
        <Grid
          container
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {partner.map((x, id) => (
            <Grid item xs={6} md={4} lg={1.7142} key={id}>
              <Box className={classes.boxImg}>
                <Image
                  width={100}
                  height={100}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                  priority
                />
                <Typography variant="caption">{x.caption}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 2 ? "content active-content" : "content"}>
        <Grid
          container
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {partner.slice(0, 7).map((x, id) => (
            <Grid item xs={6} md={4} lg={1.7142} key={id}>
              <Box className={classes.boxImg}>
                <Image
                  width={100}
                  height={100}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                  priority
                />
                <Typography variant="caption">{x.caption}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 3 ? "content active-content" : "content"}>
        <Grid
          container
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {partner.slice(8, 11).map((x, id) => (
            <Grid item xs={6} md={4} lg={1.7142} key={id}>
              <Box className={classes.boxImg}>
                <Image
                  width={100}
                  height={100}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                  priority
                />
                <Typography variant="caption">{x.caption}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 4 ? "content active-content" : "content"}>
        <Grid
          container
          rowSpacing={isMd ? 2 : 3}
          columnSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {partner.slice(11, 13).map((x, id) => (
            <Grid item xs={6} md={4} lg={1.7142} key={id}>
              <Box className={classes.boxImg}>
                <Image
                  width={100}
                  height={100}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                  priority
                />
                <Typography variant="caption">{x.caption}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PartnerSection>
  );
}
