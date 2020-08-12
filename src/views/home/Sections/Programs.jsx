import React from "react";
import twirlingImg from "../../../assets/spree/img/twirlingProgram.jpg";
import colorGuardImg from "../../../assets/spree/img/colorguardProgram.jpg";
import showTeamImg from "../../../assets/spree/img/showteamProgram.jpg";

const Programs = () => {
  return (
    <div class="main main-raised">
      <div class="container">
        <div class="cd-section" id="programs">
          <div class="projects-2" id="projects-2">
            <div class="container">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <h2 class="title">Open Enrollment</h2>
                  <h5 class="description">
                    Join Fort Wayne's Premier Baton Twirling & Color Guard
                    Program. Classes Starting Soon.
                  </h5>
                  <div class="section-space"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card card-plain">
                    <a href="/" target="_blank">
                      <div class="card-header card-header-image">
                        <img src={twirlingImg} alt="Twirling"></img>
                      </div>
                    </a>
                    <div class="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 class="card-title">Twirling Team</h4>
                      </a>
                      <h6 class="card-category">More Info</h6>
                      <p class="card-description">
                        Something about Twirling Teams...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-plain">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <div class="card-header card-header-image">
                        <img src={showTeamImg} alt="Show Teams" />
                      </div>
                    </a>
                    <div class="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 class="card-title">Show Teams</h4>
                      </a>
                      <h6 class="card-category">More Info</h6>
                      <p class="card-description">
                        Something about Show Teams....
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-plain">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <div class="card-header card-header-image">
                        <img src={colorGuardImg} alt="Color Guard" />
                      </div>
                    </a>
                    <div class="card-body">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        <h4 class="card-title">Color Guard</h4>
                      </a>
                      <h6 class="card-category">More Info</h6>
                      <p class="card-description">
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
