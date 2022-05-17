import { Typography, Grid, useMediaQuery } from "@mui/material";
import * as React from "react";
import { TeamSection } from "../../utils/styled";
import Box from "@mui/material/Box";
import Image from "next/image";
import Jame from "../../assets/images/jame.svg";
import Jackson from "../../assets/images/jackson.svg";
import Custast from "../../assets/images/custast.svg";
import Baelfire from "../../assets/images/baelfire.svg";
import Jung from "../../assets/images/jung.svg";
import Kevin from "../../assets/images/kevin.svg";
import Miechan from "../../assets/images/miechan.svg";
import Justin from "../../assets/images/justin.svg";
import theme from "../../utils/theming/theming";
import { makeStyles } from "@mui/styles";
import { teams } from "../../common/constant";
const useStyles = makeStyles(() => ({
  root: {},
  title: {
    marginBottom: 24,
    fontWeight: 700,
  },
  subtitle: {
    marginBottom: 64,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "scale(1.2)",
      transitionDuration: "0.5s",
    },
  },
  name: {
    marginTop: 24,
  },
}));
export default function Team() {
  const classes = useStyles();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TeamSection id="team" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        MEET OUR TEAM
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        We are a team of specialists in the field of cryptocurrency which has
        been acknowledged through our working experience and insightful
        knowledge about the industry
      </Typography>
      <Grid container rowSpacing={isMd ? 0 : 5}>
        {teams.map((x, id) => (
          <Grid item xs={6} md={6} lg={3} key={id}>
            <Box className={classes.box}>
              <Image
                width={180}
                height={180}
                src={x.src}
                alt={x.alt}
                quality={100}
                priority
              />
              <Typography variant="h4" className={classes.name}>
                {x.name}
              </Typography>
              <Typography variant="subtitle2">{x.position}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </TeamSection>
  );
}
