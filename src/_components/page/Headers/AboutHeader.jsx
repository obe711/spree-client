import React from "react";
import HeaderImg from "../../../assets/spree/img/bg9.jpg";
import LazyHero from "react-lazy-hero";

const AboutHeader = () => {
  return (
    <LazyHero
      imageSrc={HeaderImg}
      className="page-header header-small"
      opacity={0.5}
      color="#000000"
      parallaxOffset={100}
    >
      <h1 class="title">About Spree Programs</h1>
    </LazyHero>
  );
};

export default AboutHeader;
