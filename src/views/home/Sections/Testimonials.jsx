import React from "react";
import testImg1 from "../../../assets/spree/img/test1.jpg";
import testImg2 from "../../../assets/img/faces/card-profile2-square.jpg";
import testImg3 from "../../../assets/img/faces/card-profile4-square.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto text-center">
            <h2 className="title">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img className="img" src={testImg1} alt="profile"></img>
                </a>
              </div>
              <div className="card-body ">
                <h4 className="card-title">Erika Hand</h4>
                <h6 className="card-category text-muted">Parent</h6>
                <h5 className="card-description">
                  &quot;Coach Judy and the Spree team welcomed my daughter with
                  open arms. She expressed interest while in pre-k and initially
                  it was not offered for her age level, she was only 4 at the
                  time. As fate would have it, Spree became available a couple
                  weeks later for her to join. Coach Judy and her team were
                  excellent in facilitating support and guidance.&quot;
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img className="img" src={testImg2} alt="profile"></img>
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Tina Thompson</h4>
                <h6 className="card-category text-muted">
                  Marketing @ Apple Inc.
                </h6>
                <h5 className="card-description">
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
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img className="img" src={testImg3} alt="profile"></img>
                </a>
              </div>
              <div className="card-body ">
                <h4 className="card-title">Gina West</h4>
                <h6 className="card-category text-muted">CFO @ Apple Inc.</h6>
                <h5 className="card-description">
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
