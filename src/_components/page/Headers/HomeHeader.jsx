import React from "react";
import LazyHero from "react-lazy-hero";
import HeaderImg from "../../../assets/spree/img/bg8.jpg";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <LazyHero
      imageSrc={HeaderImg}
      className="page-header"
      opacity={0.5}
      color="#000000"
      parallaxOffset={100}
    >
      <h1 className="title">Spree Programs</h1>
      <h4 className="text-white">
        Quality "In-House" programs designed exclusively for preschool through
        highschool, since 1990
      </h4>
      <br />
      <Link to="/enroll" class="btn btn-primary btn-raised btn-lg">
        Enroll Today
      </Link>
    </LazyHero>
  );
};

export default HomeHeader;
