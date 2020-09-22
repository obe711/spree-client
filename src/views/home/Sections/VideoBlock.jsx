import React from "react";
import { Player, ControlBar } from "video-react";

const sources = {
  warrior: "http://localhost:4000/vid/warior.mp4",
};

const VideoBlock = () => {
  return (
    <div className="container mb-5 ">
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto text-center">
          <h2 className="title">Spring Preformance</h2>
        </div>
      </div>
      <div className="row">
        <Player
          aspectRatio={"auto"}
          fluid={false}
          width={950}
          muted={true}
          autoPlay={true}
          playsInline
          poster="/assets/poster.png"
          src={sources.warrior}
        >
          <ControlBar autoHide={true} disableDefaultControls />
        </Player>
      </div>
    </div>
  );
};

export default VideoBlock;
