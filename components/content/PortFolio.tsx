import { Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import theme from "../../utils/theming/theming";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { portFolio } from "../../common/constant";
const useStyles = makeStyles(() => ({
  root: {
    padding: "180px 131px 0",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
      marginBottom: 30,
    },
  },
  title: {
    marginBottom: 0,
    fontWeight: 700,
  },
  subtitle: {
    marginBottom: 30,
    width: 450,
    height: 24,
    margin: "auto",
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
  badge: {
    background: "#F5F5F5",
    borderRadius: 10,
    padding: "20px 24px",
    display: "flex",
    justifyContent: "center",
    border: "1px solid #E6EBF1",
    cursor: "pointer",
  },
  container: {
    margin: "16px auto 0",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      columnGap: 5,
    },
  },
}));
export default function PortFolio() {
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index: number) => {
    setToggle(index);
  };
  return (
    <Box id="portFolio" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        PORTFOLIO
      </Typography>
      <Grid
        container
        columnSpacing={isMd ? 2 : 0}
        className={classes.subtitle}
        justifyContent="center"
      >
        <Grid item xs={12} sm={2.5} md={12} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(1)}>
            <button className={toggle === 1 ? "tabs active-tab" : "tabs"}>
              Web3 & Data
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={12} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(2)}>
            <button className={toggle === 2 ? "tabs active-tab" : "tabs"}>
              Metaverse
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={12} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(3)}>
            <button className={toggle === 3 ? "tabs active-tab" : "tabs"}>
              DAO / social
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2.5} md={12} lg={3}>
          <Box className={classes.box} onClick={() => toggleTab(4)}>
            <button className={toggle === 4 ? "tabs active-tab" : "tabs"}>
              Infrastructure
            </button>
          </Box>
        </Grid>
      </Grid>
      <Box className={toggle === 1 ? "content active-content" : "content"}>
        <Grid
          container
          columnSpacing={isMd ? 0 : 5}
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {portFolio.map((x, id) => (
            <Grid item xs={12} sm={6} md={2.4} lg={2.4} key={id}>
              <Box className={classes.badge}>
                <Image
                  width={150}
                  height={40}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 2 ? "content active-content" : "content"}>
        <Grid
          container
          columnSpacing={isMd ? 0 : 5}
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {portFolio.slice(0, 6).map((x, id) => (
            <Grid item xs={12} sm={6} md={2.4} lg={2.4} key={id}>
              <Box className={classes.badge}>
                <Image
                  width={150}
                  height={40}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 3 ? "content active-content" : "content"}>
        <Grid
          container
          columnSpacing={isMd ? 0 : 5}
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {portFolio.slice(7, 9).map((x, id) => (
            <Grid item xs={12} sm={6} md={2.4} lg={2.4} key={id}>
              <Box className={classes.badge}>
                <Image
                  width={150}
                  height={40}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={toggle === 4 ? "content active-content" : "content"}>
        <Grid
          container
          columnSpacing={isMd ? 0 : 5}
          rowSpacing={isMd ? 2 : 3}
          className={classes.container}
          justifyContent="center"
        >
          {portFolio.slice(10, 15).map((x, id) => (
            <Grid item xs={12} sm={6} md={2.4} lg={2.4} key={id}>
              <Box className={classes.badge}>
                <Image
                  width={150}
                  height={40}
                  src={x.src}
                  alt={x.alt}
                  quality={100}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
