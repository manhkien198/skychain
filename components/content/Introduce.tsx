import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IntroduceImg from "../../assets/images/introduce.png";
import { Section, Title } from "../../utils/styled";
import { makeStyles } from "@mui/styles";
import theme from "../../utils/theming/theming";
const useStyles = makeStyles(() => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(10),
    },
  },
  image: {
    marginBottom: 63,
    width: 944,
    height: 322,
    position: "relative",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
    },
  },
  title: {
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 500,
  },
}));
export default function Introduce() {
  const classes = useStyles();
  return (
    <Section id="introduce" className={classes.root}>
      <Title>
        <Typography variant="h1" className={classes.title}>
          MORE THAN AN INVESTOR
        </Typography>
        <Typography variant="h1" className={classes.subtitle}>
          A guide to success, innovation, progression
        </Typography>
      </Title>
      <Box className={classes.image}>
        <Image
          src={IntroduceImg}
          alt="Introduce"
          layout="responsive"
          quality={100}
        />
      </Box>
      <Typography variant="subtitle1">
        Emerging into the blockchain era, we proudly claim that we are providing
        firm values to blockchain projects. We want to invest in all aspects of
        blockchain, from fields as sophisticated as DeFi to essential as Web3 or
        entertaining as GameFi and NFTs… <br />
        As an Asia-based blockchain capital, we are aiming to build a community
        in which each member can be the masterpiece of their own.
      </Typography>
    </Section>
  );
}
