import Head from "next/head";
import * as React from "react";
interface SeoData {
  title: string;
  description: string;
  url: string;
}
export interface SeoProps {
  data: SeoData;
}

export function Seo({ data }: SeoProps) {
  const { title, description, url } = data;
  return (
    <Head>
      <title>SkyChain</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content="/skychain_thumbnail.jpg" />
    </Head>
  );
}
