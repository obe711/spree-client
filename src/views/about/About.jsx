import React from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import AboutHeader from "../../_components/page/Headers/AboutHeader";
import Footer from "../../_components/page/Footer";
import Team from "./Sections/Team";
import Contact from "./Sections/Contact";
import Carousel from "../../_components/custom/Carousel/Carousel";

const About = () => {
  return (
    <body className="sidebar-collapse">
      <div className="about-us">
        <NavBarPublic scrollTo={300} />
        <AboutHeader />
        <div class="main main-raised">
          <div class="container">
            <Team />
            <div className="row">
              <div className="mr-auto ml-auto">
                <Carousel className="" />
              </div>
            </div>

            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default About;
