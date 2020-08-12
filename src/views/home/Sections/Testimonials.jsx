import React from "react";
import testImg1 from "../../../assets/img/faces/card-profile1-square.jpg";
import testImg2 from "../../../assets/img/faces/card-profile2-square.jpg";
import testImg3 from "../../../assets/img/faces/card-profile4-square.jpg";

const Testimonials = () => {
  return (
    <div class="testimonials-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">Testimonials</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-testimonial card-plain">
              <div class="card-avatar">
                <a href="#pablo">
                  <img class="img" src={testImg1} alt="profile"></img>
                </a>
              </div>
              <div class="card-body ">
                <h4 class="card-title">Mike Andrew</h4>
                <h6 class="card-category text-muted">
                  CEO @ Marketing Digital Ltd.
                </h6>
                <h5 class="card-description">
                  &quot;I speak yell scream directly at the old guard on behalf
                  of the future. I gotta say at that time I&#x2019;d like to
                  meet Kanye I speak yell scream directly at the old guard on
                  behalf of the future.&quot;
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-testimonial card-plain">
              <div class="card-avatar">
                <a href="#pablo">
                  <img class="img" src={testImg2} alt="profile"></img>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">Tina Thompson</h4>
                <h6 class="card-category text-muted">Marketing @ Apple Inc.</h6>
                <h5 class="card-description">
                  &quot;I promise I will never let the people down. I want a
                  better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna
                  for the invite thank you to the whole Vogue team It
                  wasn&#x2019;t any Kanyes I love Rick Owens&#x2019; bed design
                  but the back is too high for the beams and angle of the
                  ceiling&quot;
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-testimonial card-plain">
              <div class="card-avatar">
                <a href="#pablo">
                  <img class="img" src={testImg3} alt="profile"></img>
                </a>
              </div>
              <div class="card-body ">
                <h4 class="card-title">Gina West</h4>
                <h6 class="card-category text-muted">CFO @ Apple Inc.</h6>
                <h5 class="card-description">
                  &quot;I&apos;ve been trying to figure out the bed design for
                  the master bedroom at our Hidden Hills compound... Roy&#xE8;re
                  doesn&apos;t make a Polar bear bed but the Polar bear. This is
                  a very nice testimonial about this company.&quot;
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
