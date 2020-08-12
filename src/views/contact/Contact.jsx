import React from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import Footer from "../../_components/page/Footer";
import GoogleMapApi from "../../_components/custom/GoogleMapApi";
import { latLng, mapOptions } from "./Sections/googleMapOptions";
import spinCard1Img from "../../assets/spree/img/spinSide1.jpg";
import spinCard2Img from "../../assets/spree/img/spinSide2.jpg";
import config from "config";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <body className="sidebar-collapse">
      <div class="contact-page">
        <NavBarPublic solidNav={true} />
        <GoogleMapApi
          latLng={latLng}
          apiKey={config.googleMapsAPI}
          mapOptions={mapOptions}
          className="big-map"
        />
        <div class="main main-raised">
          <div class="contact-content">
            <div class="container">
              <h2 class="title">Send us a message</h2>
              <div class="row">
                <div class="col-md-6">
                  <p class="description">
                    For information regarding the Spree Programs, please
                    complete and send the form below. We will contact you within
                    24 hours
                    <br />
                    <br />
                  </p>
                  <form id="contact-form" method="post">
                    <div class="form-group">
                      <label for="name" class="bmd-label-floating">
                        Your name
                      </label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="form-group">
                      <label
                        for="exampleInputEmails"
                        class="bmd-label-floating"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmails"
                      />
                      <span class="bmd-help">
                        We'll never share your email with anyone else.
                      </span>
                    </div>
                    <div class="form-group">
                      <label for="phone" class="bmd-label-floating">
                        Phone
                      </label>
                      <input type="text" class="form-control" id="phone" />
                    </div>
                    <div class="form-group label-floating">
                      <label
                        class="form-control-label bmd-label-floating"
                        for="message"
                      >
                        Your message
                      </label>
                      <textarea
                        class="form-control"
                        rows="6"
                        id="message"
                      ></textarea>
                    </div>
                    <div class="submit text-center">
                      <input
                        type="submit"
                        class="btn btn-primary btn-raised btn-round"
                        value="Contact Us"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-4 ml-auto">
                  <div class="info info-horizontal">
                    <div class="icon icon-primary">
                      <i class="material-icons">phone</i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Give us a ring</h4>
                      <p>
                        Spree Programs <br />
                        spreegym@gmail.com <br />
                        260-403-5342 <br />
                        Mon - Fri, 9:00am - 4:30am
                      </p>
                    </div>
                  </div>
                  <div class="rotating-card-container">
                    <div class="card card-rotate card-background">
                      <div
                        class="front front-background"
                        style={{ backgroundImage: `url('${spinCard1Img}')` }}
                      >
                        <div class="card-body">
                          <h6 class="card-category">Don’t Miss Out!</h6>
                          <a href="#pablo">
                            <h3 class="card-title">Registration Now Open</h3>
                          </a>
                          <h4 class="card-description title">
                            Classes start soon and team size is limited so
                            register now for this upcoming season.
                          </h4>
                        </div>
                      </div>
                      <div
                        class="back back-background"
                        style={{ backgroundImage: `url('${spinCard2Img}')` }}
                      >
                        <div class="card-body">
                          <h5 class="card-title">Register Here</h5>
                          <h4 class="card-description title">
                            Just click here and you will be redirected to the
                            enrollment page.
                          </h4>
                          <div class="footer text-center">
                            <Link
                              to="/enroll"
                              class="btn btn-rose btn-just-icon btn-fill btn-round btn-wd"
                            >
                              <i class="material-icons">check</i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Contact;
