import { Grid, useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Connection from "../../assets/images/connect.png";
import Invest from "../../assets/images/invest.png";
import Marketing from "../../assets/images/promote.png";
import Product from "../../assets/images/advise.png";
import { SectionWrapper } from "../../utils/styled/whatwedid";
import theme from "../../utils/theming/theming";
import Box from "@mui/material/Box";
const useStyles = makeStyles(() => ({
  root: {},
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    marginTop: 49,
    marginBottom: 8,
  },
  divider: {
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  horizontalD: {
    marginBottom: 16,
  },
  titleMain: {
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  boxImg: {
    width: 100,
    height: 100,

    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));
export default function WhatWeDid() {
  const classes = useStyles();
  return (
    <SectionWrapper id="whatwedid" className={classes.root}>
      <Typography variant="h3" className={classes.titleMain}>
        WHAT WE DO
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="start"
        direction="row"
        justifyContent="center"
      >
        <Grid
          item
          className={classes.gridItem}
          xs={12}
          md={12}
          lg={2.7}
          xl={2.8125}
        >
          <Box className={classes.boxImg}>
            <Image
              layout="responsive"
              src={Invest}
              alt="Invest"
              quality={100}
            />
          </Box>
          <Typography variant="h4" className={classes.title}>
            INVEST
          </Typography>
          <Divider orientation="horizontal" className={classes.horizontalD} />
          <Typography variant="subtitle1" className={classes.subtitle}>
            We want to be an influencer among entrepreneurs and investors by
            supporting innovative and enthusiastic blockchain projects.
          </Typography>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={0.25} className={classes.divider}>
          <Divider orientation="vertical" flexItem variant="middle" />
        </Grid>
        <Grid
          item
          className={classes.gridItem}
          xs={12}
          md={12}
          lg={2.7}
          xl={2.8125}
        >
          <Box className={classes.boxImg}>
            <Image
              width={100}
              height={100}
              src={Connection}
              alt="Connect"
              quality={100}
            />
          </Box>
          <Typography variant="h4" className={classes.title}>
            CONNECT
          </Typography>
          <Divider orientation="horizontal" className={classes.horizontalD} />
          <Typography variant="subtitle1" className={classes.subtitle}>
            We are a liaison helping you connect with other ventures and scale
            up your projects.
          </Typography>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={0.25} className={classes.divider}>
          <Divider orientation="vertical" flexItem variant="middle" />
        </Grid>
        <Grid
          item
          className={classes.gridItem}
          xs={12}
          md={12}
          lg={2.7}
          xl={2.8125}
        >
          <Box className={classes.boxImg}>
            <Image
              width={100}
              height={100}
              src={Product}
              alt="Advise"
              quality={100}
            />
          </Box>
          <Typography variant="h4" className={classes.title}>
            PRODUCT ADVISE
          </Typography>
          <Divider orientation="horizontal" className={classes.horizontalD} />
          <Typography variant="subtitle1" className={classes.subtitle}>
            Not only are we an investor, we also give companies clear
            instructions to enhance their abilities to present better products
            and services.
          </Typography>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={0.25} className={classes.divider}>
          <Divider orientation="vertical" flexItem variant="middle" />
        </Grid>

        <Grid
          item
          className={classes.gridItem}
          xs={12}
          md={12}
          lg={2.7}
          xl={2.8125}
        >
          <Box className={classes.boxImg}>
            <Image
              width={100}
              height={100}
              src={Marketing}
              alt="Promote"
              quality={100}
            />
          </Box>
          <Typography variant="h4" className={classes.title}>
            PROMOTE
          </Typography>
          <Divider orientation="horizontal" className={classes.horizontalD} />
          <Typography variant="subtitle1" className={classes.subtitle}>
            All projects receiving investment from us also get access to the
            whole marketing strategy with the help of all-in-one marketing
            channels.
          </Typography>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
