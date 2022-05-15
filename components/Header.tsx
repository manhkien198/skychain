import { Box, Link as MuiLink } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../assets/images/logo.svg";
import { List, ListItem, NavBar } from "../utils/styled";
import theme from "../utils/theming/theming";

const useStyles = makeStyles(() => ({
  root: {},

  logo: {
    [theme.breakpoints.between("sm", "lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <NavBar id="header" className={classes.root}>
      <Link href="#" passHref>
        <Box className={classes.logo}>
          <Image
            src={Logo}
            alt="Logo Sky Chain"
            width={132}
            height={32}
            quality={100}
          />
        </Box>
      </Link>
      <List>
        <ListItem
          className={router.asPath === "/#introduce" ? "active-link" : ""}
        >
          <Link href="#introduce" passHref>
            <MuiLink>About us</MuiLink>
          </Link>
        </ListItem>
        <ListItem
          className={router.asPath === "/#whatwedid" ? "active-link" : ""}
        >
          <Link href="#whatwedid" passHref>
            <MuiLink>What we do</MuiLink>
          </Link>
        </ListItem>
        <ListItem className={router.asPath === "/#media" ? "active-link" : ""}>
          <Link href="#media" passHref>
            <MuiLink>Media network</MuiLink>
          </Link>
        </ListItem>
        {/* <ListItem
          className={router.asPath === "/#partner" ? "active-link" : ""}
        >
          <Link href="#partner" passHref>
            <MuiLink>Partner</MuiLink>
          </Link>
        </ListItem> */}
        <ListItem
          className={router.asPath === "/#portFolio" ? "active-link" : ""}
        >
          <Link href="#portFolio" passHref>
            <MuiLink>Portfolio</MuiLink>
          </Link>
        </ListItem>
        <ListItem className={router.asPath === "/#team" ? "active-link" : ""}>
          <Link href="#team" passHref>
            <MuiLink>Team</MuiLink>
          </Link>
        </ListItem>
        {/* <ListItem className={router.asPath === "/#news" ? "active-link" : ""}>
          <Link href="#news" passHref>
            <MuiLink>News</MuiLink>
          </Link>
        </ListItem> */}
        <ListItem
          className={
            router.asPath === "/#contact" ? "li-last active-link" : "li-last"
          }
        >
          <Link href="#contact" passHref>
            <MuiLink>Contact</MuiLink>
          </Link>
        </ListItem>
      </List>
    </NavBar>
  );
}
