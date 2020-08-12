import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { fetchWrapper } from "@/_helpers";
import config from "config";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    <img src={`${config.apiUrl}/imgs/slider/${index}`} />
    <p className="legend">Legend Img name {index}</p>
  </div>
);

const createCarouselCardImage = (index, options = {}) => (
  <div class="card card-blog key={index}">
    <div class="card-header card-header-image img-spree-gradient">
      <a href="#pablo">
        <img src={`${config.apiUrl}/imgs/slider/${index}`} alt="" />
      </a>
    </div>
    <div class="card-body">
      <h6 class="card-category text-warning"> </h6>
      <h4 class="card-title">
        <a href="#pablo" className="legend"></a>
      </h4>
    </div>
  </div>
);

const SpreeCarousel = () => {
  const [SpreeCarousel, setSpreeCarousel] = useState({ props: "" });

  useEffect(() => {
    fetchWrapper.get(`${config.apiUrl}/media`).then((res) => {
      //const files = res.files;

      const baseChildren = (
        <div>{[...res.files].map(createCarouselCardImage)}</div>
      );

      setSpreeCarousel(baseChildren);
    });
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      //transitionTime={10}
      interval={5000}
      autoPlay={true}
      width="100%"
      dynamicHeight={true}
      //className="col-md-10"
    >
      {SpreeCarousel.props.children}
    </Carousel>
  );
};

export default SpreeCarousel;
