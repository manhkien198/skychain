import * as React from "react";
import { NewsSection } from "../../utils/styled";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Metalunch from "../../assets/images/metalunch.svg";
import theme from "../../utils/theming/theming";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {},
  title: {
    marginBottom: 74,
  },
  box: {
    border: "1px solid #C0C0C0",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    padding: "64px 24px 24px",
    position: "relative",
  },
  notation: {
    position: "absolute",
    backgroundColor: "#F0F4F7",
    width: 96,
    top: -30,
    left: "50%",
    transform: "translateX(-50%)",
  },
  text: {
    textAlign: "left",
    fontSize: 12,
    color: "#c0c0c0",
  },
  divider: {
    transform: "rotate(-38deg)",
    height: 1,
    width: 60,
    left: 15,
    top: 25,
    background: "#c0c0c0",
    position: "absolute",
  },
  amount: {
    fontSize: 40,
    color: "#c0c0c0",
    fontWeight: 600,
    textAlign: "right",
  },
  des: {
    marginTop: 24,
    marginBottom: 16,
  },
  seeMore: {
    fontWeight: 600,
  },
}));
export default function News() {
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <NewsSection id="news" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        NEWS
      </Typography>
      <Grid container columnSpacing={isMd ? 0 : 5} rowSpacing={5}>
        <Grid item xs={12} md={12} lg={4}>
          <Box className={classes.box}>
            <Box className={classes.notation}>
              <Typography className={classes.text}>News</Typography>
              <Box className={classes.divider}></Box>
              <Typography className={classes.amount}>01</Typography>
            </Box>
            <Image
              src={Metalunch}
              alt="MetaLunch"
              layout="responsive"
              quality={100}
              priority
            />
            <Typography className={classes.des} variant="h4">
              MetaLaunch powered asva labs
            </Typography>
            <Typography variant="subtitle2" className={classes.seeMore}>
              See More
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={4}>
          <Box className={classes.box}>
            <Box className={classes.notation}>
              <Typography className={classes.text}>News</Typography>
              <Box className={classes.divider}></Box>
              <Typography className={classes.amount}>02</Typography>
            </Box>
            <Box>
              <Image
                src={Metalunch}
                alt="MetaLunch"
                layout="responsive"
                quality={100}
                priority
              />
            </Box>
            <Typography className={classes.des} variant="h4">
              MetaLaunch powered asva labs
            </Typography>
            <Typography variant="subtitle2" className={classes.seeMore}>
              See More
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Box className={classes.box}>
            <Box className={classes.notation}>
              <Typography className={classes.text}>News</Typography>
              <Box className={classes.divider}></Box>
              <Typography className={classes.amount}>03</Typography>
            </Box>
            <Image
              src={Metalunch}
              alt="MetaLunch"
              layout="responsive"
              quality={100}
              priority
            />
            <Typography className={classes.des} variant="h4">
              MetaLaunch powered asva labs
            </Typography>
            <Typography variant="subtitle2" className={classes.seeMore}>
              See More
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </NewsSection>
  );
}
