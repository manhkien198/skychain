import { StaticImageData } from "next/image";
import Astar from "../../assets/images/astar.png";
import Avalanche from "../../assets/images/avalanche.png";
import ChainLink from "../../assets/images/chainlink.png";
import Cosmos from "../../assets/images/cosmos.png";
import Graph from "../../assets/images/graph.png";
import Harmony from "../../assets/images/harmony.png";
import Immutable from "../../assets/images/immutable.png";
import Moonbean from "../../assets/images/moonbean.png";
import Polygon from "../../assets/images/polygon.png";
import SmallCelo from "../../assets/images/smallCelo.png";
import SmallNear from "../../assets/images/smallNear.png";
import SmallPolkadot from "../../assets/images/smallPolkadot.png";
import SmallSolana from "../../assets/images/smallsolana.png";
import StarAtlas from "../../assets/images/starAslat.png";
import Theta from "../../assets/images/theta.png";
import Contentos from "../../assets/images/contentos.png";
import Custodia from "../../assets/images/custodia.png";
import Dfx from "../../assets/images/dfx.png";
import House from "../../assets/images/house.png";
import Media from "../../assets/images/media.png";
import Seed from "../../assets/images/seed.png";
import Jame from "../../assets/images/jame.svg";
import Jackson from "../../assets/images/jackson.svg";
import Custast from "../../assets/images/custast.svg";
import Baelfire from "../../assets/images/baelfire.svg";
import Jung from "../../assets/images/jung.svg";
import Kevin from "../../assets/images/kevin.svg";
import Miechan from "../../assets/images/miechan.svg";
import Justin from "../../assets/images/justin.svg";

export interface PortFolio {
  src: StaticImageData;
  alt: string;
  url: string;
}
export const portFolio: Array<PortFolio> = [
  {
    src: Astar,
    alt: "Astar",
    url: "https://twitter.com/AstarNetwork	",
  },
  {
    src: StarAtlas,
    alt: "StarAtlas",
    url: "https://twitter.com/staratlas",
  },
  {
    src: SmallSolana,
    alt: "Solana",
    url: "https://twitter.com/solana",
  },
  {
    src: Avalanche,
    alt: "Avalanche",
    url: "https://twitter.com/avalancheavax",
  },
  {
    src: SmallPolkadot,
    alt: "Polkadot",
    url: "https://twitter.com/Polkadot",
  },
  {
    src: Polygon,
    alt: "Polygon",
    url: "https://twitter.com/0xPolygonNews",
  },
  {
    src: SmallNear,
    alt: "Near",
    url: "https://twitter.com/NEARProtocol",
  },
  {
    src: ChainLink,
    alt: "ChainLink",
    url: "https://twitter.com/chainlink",
  },
  {
    src: Cosmos,
    alt: "Cosmos",
    url: "https://twitter.com/cosmos",
  },
  {
    src: Graph,
    alt: "Graph",
    url: "https://twitter.com/graphprotocol",
  },
  {
    src: SmallCelo,
    alt: "Celo",
    url: "https://twitter.com/CeloOrg",
  },
  {
    src: Harmony,
    alt: "Harmony",
    url: "https://twitter.com/harmonyprotocol",
  },
  {
    src: Theta,
    alt: "Theta",
    url: "https://twitter.com/Theta_Network",
  },
  {
    src: Moonbean,
    alt: "Moonbean",
    url: "https://twitter.com/MoonbeamNetwork",
  },
  {
    src: Immutable,
    alt: "Immutable",
    url: "https://twitter.com/Immutable",
  },
];
export interface Partner {
  src: StaticImageData;
  alt: string;
  caption: string;
}
export const partner: Array<Partner> = [
  {
    src: Contentos,
    alt: "Contentos",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Media,
    alt: "Media",
    caption: "Skychain Media",
  },
  {
    src: House,
    alt: "House",
    caption: "Skychain Media",
  },
  {
    src: Seed,
    alt: "Seed",
    caption: "Skychain Media",
  },
  {
    src: Custodia,
    alt: "Custodia",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Contentos,
    alt: "Contentos",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
  {
    src: Dfx,
    alt: "Dfx",
    caption: "Skychain Media",
  },
];
export interface Person {
  src: StaticImageData;
  alt: string;
  name: string;
  position: string;
}
export const teams: Array<Person> = [
  {
    src: Jame,
    alt: "Jame - Co-Founder",
    name: "JAMES",
    position: "Co-Founder",
  },
  {
    src: Jackson,
    alt: "Jason - Co-Founder",
    name: "JASON",
    position: "Co-Founder",
  },
  {
    src: Custast,
    alt: "Custast - Co-Founder",
    name: "CUSTAST",
    position: "Co-Founder",
  },
  {
    src: Baelfire,
    alt: "Baelfire - BD executive",
    name: "BAELFIRE",
    position: "BD Executive",
  },
  {
    src: Jung,
    alt: "Molly - BD executive",
    name: "MOLLY",
    position: "BD Executive",
  },
  {
    src: Kevin,
    alt: "Kevin - BD executive",
    name: "KEVIN",
    position: "BD Executive",
  },
  {
    src: Miechan,
    alt: "Mie chan - Marketing Executive",
    name: "MIE CHAN",
    position: "Marketing Executive",
  },
  {
    src: Justin,
    alt: "Justin - Content Creator",
    name: "JUSTIN",
    position: "Content Creator",
  },
];
export interface Tweet {
  id?: number;
  id_str?: string;
  name: string;
  screen_name: string;
  location?: string;
  description?: string;
  url?: any;
  entities?: Entities;
  protected?: boolean;
  followers_count: number;
  friends_count?: number;
  listed_count?: number;
  created_at?: string;
  favourites_count?: number;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled?: boolean;
  verified?: boolean;
  statuses_count?: number;
  lang?: any;
  status?: Status;
  contributors_enabled?: boolean;
  is_translator?: boolean;
  is_translation_enabled?: boolean;
  profile_background_color?: string;
  profile_background_image_url?: any;
  profile_background_image_url_https?: any;
  profile_background_tile?: boolean;
  profile_image_url?: string;
  profile_image_url_https?: string;
  profile_banner_url?: string;
  profile_link_color?: string;
  profile_sidebar_border_color?: string;
  profile_sidebar_fill_color?: string;
  profile_text_color?: string;
  profile_use_background_image?: boolean;
  has_extended_profile?: boolean;
  default_profile?: boolean;
  default_profile_image?: boolean;
  following?: any;
  follow_request_sent?: any;
  notifications?: any;
  translator_type?: string;
  withheld_in_countries?: any[];
}

interface Status {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities2;
  source: string;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
}

interface Entities2 {
  hashtags: any[];
  symbols: any[];
  user_mentions: Usermention[];
  urls: Url[];
}

interface Usermention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

interface Entities {
  description: Description;
}

interface Description {
  urls: Url[];
}

interface Url {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}
export interface Data {
  name: string;
  screen_name: string;
  followers: number;
  src?: StaticImageData;
  url?: string;
}
export const urlList = [
  "https://twitter.com/Fantom_Nation",
  "https://twitter.com/BNBNation_",
  "https://twitter.com/PolkadotNation",
  "https://twitter.com/AvaxNation",
  "https://twitter.com/Solana_Nation",
  "https://twitter.com/Terra_Nation_",
  "https://twitter.com/celo_nation",
  "https://twitter.com/Ethereum_Nation",
  "https://twitter.com/NearAtlas",
];
