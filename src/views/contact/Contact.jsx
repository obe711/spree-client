import React, { useRef } from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import Footer from "../../_components/page/Footer";
import GoogleMapApi from "../../_components/custom/GoogleMapApi";
import { latLng, mapOptions } from "./Sections/googleMapOptions";
import spinCard1Img from "../../assets/spree/img/spinSide1.jpg";
import spinCard2Img from "../../assets/spree/img/spinSide2.jpg";
import config from "config";
import { Link } from "react-router-dom";
import { contactService } from "@/_services";
import { history } from "@/_helpers";

const Contact = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    contactService.saveMessage({
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    });
    window.scrollTo(0, 0);
    history.push("/");
  }

  return (
    <body className="sidebar-collapse">
      <div className="contact-page">
        <NavBarPublic solidNav={true} />
        <GoogleMapApi
          latLng={latLng}
          apiKey={config.googleMapsAPI}
          mapOptions={mapOptions}
          className="big-map"
        />
        <div className="main main-raised">
          <div className="contact-content">
            <div className="container">
              <h2 className="title">Send us a message</h2>
              <div className="row">
                <div className="col-md-6">
                  <p className="description">
                    For information regarding the Spree Programs, please
                    complete and send the form below. We will contact you within
                    24 hours
                    <br />
                    <br />
                  </p>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="name" className="bmd-label-floating">
                        Your name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        ref={nameRef}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        for="exampleInputEmails"
                        className="bmd-label-floating"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmails"
                        ref={emailRef}
                      />
                      <span className="bmd-help">
                        We'll never share your email with anyone else.
                      </span>
                    </div>
                    <div className="form-group">
                      <label for="phone" className="bmd-label-floating">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        ref={phoneRef}
                      />
                    </div>
                    <div className="form-group label-floating">
                      <label
                        className="form-control-label bmd-label-floating"
                        for="message"
                      >
                        Your message
                      </label>
                      <textarea
                        className="form-control"
                        rows="6"
                        id="message"
                        ref={messageRef}
                      ></textarea>
                    </div>
                    <div className="submit text-center">
                      <input
                        type="submit"
                        className="btn btn-primary btn-raised btn-round"
                        value="Contact Us"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-4 ml-auto">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="material-icons">phone</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Spree Programs <br />
                        spreegym@gmail.com <br />
                        260-403-5342 <br />
                        Mon - Fri, 9:00am - 4:30am
                      </p>
                    </div>
                  </div>
                  <div className="rotating-card-container">
                    <div className="card card-rotate card-background">
                      <div
                        className="front front-background"
                        style={{ backgroundImage: `url('${spinCard1Img}')` }}
                      >
                        <div className="card-body">
                          <h6 className="card-category">Don’t Miss Out!</h6>
                          <a href="#pablo">
                            <h3 className="card-title">
                              Registration Now Open
                            </h3>
                          </a>
                          <h4 className="card-description title">
                            classes start soon and team size is limited so
                            register now for this upcoming season.
                          </h4>
                        </div>
                      </div>
                      <div
                        className="back back-background"
                        style={{ backgroundImage: `url('${spinCard2Img}')` }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">Register Here</h5>
                          <h4 className="card-description title">
                            Just click here and you will be redirected to the
                            enrollment page.
                          </h4>
                          <div className="footer text-center">
                            <Link
                              to="/enroll"
                              className="btn btn-rose btn-just-icon btn-fill btn-round btn-wd"
                            >
                              <i className="material-icons">check</i>
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
