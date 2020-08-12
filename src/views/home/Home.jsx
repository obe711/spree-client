import React from "react";

import NavBarPublic from "../../_components/page/NavBarPublic";
import HomeHeader from "../../_components/page/Headers/HomeHeader";
import Programs from "./Sections/Programs";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "../../_components/page/Footer";
import VideoBlock from "./Sections/VideoBlock";

const Home = () => {
  return (
    <body className="sidebar-collapse">
      <div className="landing-page">
        <NavBarPublic />
        <HomeHeader />
        <Programs />
        <Testimonials />
        <div className="row text-center">
            <div className="mr-auto ml-auto m-3" >
            <VideoBlock style={{shadowBox: "5px 10px 10px 10px #9c27b0"}}/>
            </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </body>
  );
};

export default Home;
