import React from "react";
import twirlingImg from "../../../assets/spree/img/twirlingProgram.jpg";
import colorGuardImg from "../../../assets/spree/img/colorguardProgram.jpg";
import showTeamImg from "../../../assets/spree/img/showteamProgram.jpg";

const Programs = () => {
  return (
    <div className="main main-raised">
      <div className="container">
        <div className="cd-section" id="programs">
          <div className="projects-2" id="projects-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto text-center">
                  <h2 className="title">Open Enrollment</h2>
                  <h5 className="description">
                    Join Fort Wayne's Premier Baton Twirling & Color Guard
                    Program. Classes Starting Soon.
                  </h5>
                  <div className="section-space"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-plain">
                    <a href="/" target="_blank">
                      <div className="card-header card-header-image">
                        <img src={twirlingImg} alt="Twirling"></img>
                      </div>
                    </a>
                    <div className="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 className="card-title">Twirling Team</h4>
                      </a>
                      <h6 className="card-category">More Info</h6>
                      <p className="card-description">
                        Something about Twirling Teams...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-plain">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <div className="card-header card-header-image">
                        <img src={showTeamImg} alt="Show Teams" />
                      </div>
                    </a>
                    <div className="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 className="card-title">Show Teams</h4>
                      </a>
                      <h6 className="card-category">More Info</h6>
                      <p className="card-description">
                        Something about Show Teams....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-plain">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <div className="card-header card-header-image">
                        <img src={colorGuardImg} alt="Color Guard" />
                      </div>
                    </a>
                    <div className="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 className="card-title">Color Guard</h4>
                      </a>
                      <h6 className="card-category">More Info</h6>
                      <p className="card-description">
                        Something about Color Guard....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
