"use client";

import { Helmet } from "react-helmet";
import { seoMetaData } from "../constants";

const NokaYaAfricaSEO = () => {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <Helmet>
      {/* <title>Noka Ya Africa | African Software Development</title>
    <meta
      name='description'
      content='Discover the latest software development solutions and services at Noka Ya Africa. We specialize in custom software development for businesses and organizations across the African continent.'
    />
    <meta
      name='keywords'
      content='african software development, custom software development, software solutions, software services, african businesses, technology, africa'
    /> */}
      <title>{seoMetaData.title} | African Software Development</title>
      <meta name='description' content={seoMetaData.description} />
      <meta property='og:title' content={seoMetaData.title} />
      <meta property='og:description' content={seoMetaData.description} />
      <meta name='keywords' content={seoMetaData.keywords} />
      <meta property='og:image' content={seoMetaData.image} />
      <meta property='og:url' content={url} />
      <meta name='theme-color' content={seoMetaData.color} />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

export default NokaYaAfricaSEO;
