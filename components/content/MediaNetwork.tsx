import { Box, Button, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { Data } from "../../common/constant";
import { kFormatter } from "../../utils/kFormatter";
import { MediaInstance, MediaSection } from "../../utils/styled";
import theme from "../../utils/theming/theming";

const useStyles = makeStyles(() => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(10, 0),
    },
  },
  title: {
    marginBottom: 16,
    fontWeight: 700,
  },
  description: {
    marginBottom: 44,
  },
  divider: {
    marginTop: 24,
    marginBottom: 24,
  },
  box: {
    background: "#fbfbfd",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
    padding: "25px 32px",
    marginBottom: 16,
    width: 200,
    height: 80,
    margin: "auto",
  },
  statistic: {
    marginBottom: 0,
  },
  boxContainer: {
    display: "flex",
    flexWrap: "wrap",
    columnGap: 44,
    rowGap: 44,
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      columnGap: 20,
    },
  },
  inline: {
    display: "inline",
  },
  boxImg: {
    width: "100px",
    height: "100px",
    position: "relative",
    margin: "0 auto",
  },
  boxTag: {
    width: 700,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cardTitle: {
    marginBottom: 24,
    color: "#000",
  },
  cardFollows: {
    color: "#000",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: 8,
  },
}));
interface MediaProps {
  data: Data[];
}
export default function MediaNetwork({ data }: MediaProps) {
  const classes = useStyles();
  return (
    <MediaSection id="media" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        MEDIA NETWORK
      </Typography>
      <Typography variant="h5" className={classes.description}>
        We support you with marketing campaigns via various social media
        networks across a wide range of ecosystems
      </Typography>
      <Box className={classes.boxTag}>
        <Grid container columnSpacing={6.25} justifyContent="center">
          <Grid item xs={12} md={12} lg={4}>
            <Box className={classes.box}>
              <Typography variant="h3" className={classes.statistic}>
                300 +
              </Typography>
            </Box>
            <Typography variant="h5">Monthly Profile Visits</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Box className={classes.box}>
              <Typography variant="h3" className={classes.statistic}>
                5M +
              </Typography>
            </Box>
            <Typography variant="h5">Monthly Tweet Impressions</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Box className={classes.box}>
              <Typography variant="h3" className={classes.statistic}>
                40.6% +
              </Typography>
            </Box>
            <Typography variant="h5">Engagement Rate</Typography>
          </Grid>
        </Grid>
      </Box>

      <MediaInstance>
        <Box className={classes.boxContainer}>
          {data.map((x, id) => (
            <Box className="card-parent" key={id}>
              <Button
                className="card"
                onClick={() => {
                  window.open(x.url, "_blank");
                }}
                style={{
                  borderRadius: "40px",
                }}
              >
                <Box className={classes.boxImg}>
                  <Image
                    src={x.src}
                    alt={x.name}
                    quality={100}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </Box>
                <Divider className={classes.divider} />
                <Typography variant="h4" className={classes.cardTitle}>
                  {x.name}
                </Typography>
                <Typography className={classes.cardFollows}>
                  {kFormatter(x.followers)}
                  <span className="followers">&nbsp;Followers</span>
                </Typography>
                <Typography variant="subtitle2">@{x.screen_name}</Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </MediaInstance>
    </MediaSection>
  );
}
