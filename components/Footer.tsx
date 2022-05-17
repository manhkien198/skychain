import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Telegram from "../assets/images/tele.png";
import FooterLogo from "../assets/images/logo.svg";
import Gmail from "../assets/images/gmail.png";
import Twitter from "../assets/images/twitter.png";
import { FooterSkyChain } from "../utils/styled";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  info: {
    width: 256,
    margin: "0 auto 26px",
  },
  infoItem: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    marginBottom: 44,
    fontWeight: 500,
  },
  email: {
    padding: theme.spacing(0, 2),
    borderLeft: "1px dashed #c0c0c0",
    borderRight: "1px dashed #c0c0c0",
    textAlign: "center",
    "&>a": {
      textDecoration: "none",
      color: "#2D3A44",
      fontWeight: 500,
    },
  },
  tele: {
    padding: theme.spacing(0, 2),
    borderRight: "1px dashed #c0c0c0",
    cursor: "pointer",
  },
  color: {
    color: "#2D3A44",
    fontWeight: 500,
  },
  infoDetail: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 44,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  copyright: {
    fontWeight: 400,
  },
}));
export default function Footer() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <FooterSkyChain id="contact" className={classes.root}>
      <Box className={classes.logo}>
        <Image
          src={FooterLogo}
          width={181}
          height={44}
          alt="logo"
          quality={100}
        />
      </Box>
      <Typography variant="h3" className={classes.title}>
        Begin your journey in the blockchain era with us
      </Typography>
      <Grid container className={classes.info}>
        <Grid item xs={4} md={4} lg={4} className={classes.infoItem}>
          <Link href="mailto:admin@skychain.capital" passHref>
            <Image
              width={44}
              height={44}
              src={Gmail}
              alt="Gmail"
              quality={100}
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          className={classes.infoItem}
          onClick={() => window.open("https://t.me/skychaincapital", "_blank")}
        >
          <Image
            width={44}
            height={44}
            src={Telegram}
            alt="Telegram"
            quality={100}
          />
        </Grid>

        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          className={classes.infoItem}
          onClick={() =>
            window.open("https://mobile.twitter.com/skychaincapital", "_blank")
          }
        >
          <Image
            width={44}
            height={44}
            src={Twitter}
            alt="Twitter"
            quality={100}
          />
        </Grid>
      </Grid>
      <Box className={classes.infoDetail}>
        <Box className={classes.email}>
          <Link href="mailto:admin@skychain.capital" passHref>
            Email: admin@skychain.capital
          </Link>
        </Box>
        <Box
          className={classes.tele}
          onClick={() => window.open("https://t.me/skychaincapital", "_blank")}
        >
          <Typography className={classes.color}>
            Telegram: @skychaincapital
          </Typography>
        </Box>
        <Box
          className={classes.tele}
          onClick={() =>
            window.open("https://mobile.twitter.com/skychaincapital", "_blank")
          }
        >
          <Typography className={classes.color}>
            Twitter: @SkychainCapital
          </Typography>
        </Box>
      </Box>
      <Typography variant="subtitle2" className={classes.copyright}>
        Copyright © 2020 SkyChain Capital. All rights reserved.
      </Typography>
    </FooterSkyChain>
  );
}
