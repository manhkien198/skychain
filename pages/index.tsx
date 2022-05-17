import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";
import "animate.css";
import type { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Avax from "../assets/images/avax.png";
import BackToTop from "../assets/images/backtotop.svg";
import Bnb from "../assets/images/bnb.png";
import Celo from "../assets/images/celo.png";
import Ethereum from "../assets/images/ethereum.png";
import Fantom from "../assets/images/fantom.png";
import Near from "../assets/images/near.png";
import Polkadot from "../assets/images/polkadot.png";
import Solana from "../assets/images/solana.png";
import Terra from "../assets/images/terra.png";
import { Data, Tweet, urlList } from "../common/constant";
import Introduce from "../components/content/Introduce";
import MediaNetwork from "../components/content/MediaNetwork";
import News from "../components/content/News";
import Partner from "../components/content/Partner";
import PortFolio from "../components/content/PortFolio";
import Team from "../components/content/Team";
import WhatWeDid from "../components/content/WhatWeDid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Seo } from "../components/Seo";
import { Main } from "../utils/styled";
export const imgArr = [
  Fantom,
  Bnb,
  Polkadot,
  Avax,
  Solana,
  Terra,
  Celo,
  Ethereum,
  Near,
];
const useStyles = makeStyles((theme) => ({
  root: {},
  backToTop: {
    position: "fixed",
    bottom: 0,
    right: 50,
    animation: `$bounce 1s infinite`,
  },
  "@keyframes bounce": {
    "0%,100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
    },
    "50%": {
      transform: "translateY(0)",
      animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    },
  },
  body: {
    backgroundColor: "#F0F4F7",
  },
}));
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  data: Data[];
  window?: () => Window;
}
if (typeof window !== "undefined") {
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");
  window.onscroll = function () {
    if (pageYOffset >= 100) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.width = "100%";
      header.style.zIndex = "1000";
    } else {
      header.style.position = "relative";
      header.style.display = "flex";
    }
    if (pageYOffset >= 500) {
      backToTop.style.visibility = "visible";
    } else {
      backToTop.style.visibility = "hidden";
    }
  };
}

const Home = (props: Props) => {
  const { window, data } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    btn.style.visibility = "hidden";
    document.getElementById("header").style.position = "relative";
    document.getElementById("header").style.display = "flex";
  }, []);

  const newData = data.map((x, id) => ({
    ...x,
    src: imgArr[id],
    url: urlList[id],
  }));
  return (
    <Box className={classes.root}>
      <Seo data={{title:"SkyChain.Capital | MORE THAN AN INVESTOR",
description:"As an Asia-based blockchain capital, we are aiming to build a community in which each member can be the masterpiece of their own.",
url:'https://skychain.capital/',


}}/>
      <Box className={classes.body}>
        <Header />
        <Main>
          <Introduce />
          <WhatWeDid />
          <MediaNetwork data={newData} />
          {/* <Partner /> */}
          <PortFolio />
          <Team />
          {/* <News /> */}
          <Box
            className={classes.backToTop}
            aria-label="scroll back to top"
            id="backToTop"
            onClick={handleClick}
          >
            <Link href="#" passHref>
              <Image src={BackToTop} alt="Back To Top" quality={100} />
            </Link>
          </Box>
        </Main>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    `${process.env.BASE_URL}/1.1/users/lookup.json?screen_name=fantom_nation&screen_name=bnbnation_&screen_name=polkadotnation&screen_name=avaxnation&screen_name=solana_nation&screen_name=terra_nation_&screen_name=celo_nation&screen_name=ethereum_nation&screen_name=NearAtlas`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      }),
    }
  );

  const data = await res.json();
  return {
    props: {
      data: data
        ? data.map((x: Tweet) => ({
            name: x.name,
            followers: x.followers_count,
            screen_name: x.screen_name,
          }))
        : [],
    },
  };
};
