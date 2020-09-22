import React, { useRef } from "react";
import contactImg from "../../../assets/spree/img/contactImg.jpg";
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
    history.push("/about");
  }

  return (
    <div
      className="contactus-1 section-image"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="title">More Info</h2>
            <h5 className="description">
              For information regarding the Spree Programs, please complete and
              send the form below. We will contact you within 24 hours.
            </h5>

            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <i className="material-icons">phone</i>
              </div>
              <div className="description">
                <h4 className="info-title">Give us a ring</h4>
                <p>
                  {" "}
                  Spree Programs
                  <br /> spreegym@gmail.com
                  <br /> 260-403-5342
                  <br /> Mon - Fri, 9:00am - 4:30am
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="card card-contact">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="card-header card-header-raised card-header-primary text-center">
                  <h4 className="card-title">Contact Us</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group label-floating is-empty">
                        <label className="bmd-label-floating">Your name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          ref={nameRef}
                        ></input>
                        <span className="material-input"></span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group label-floating is-empty">
                        <label className="bmd-label-floating">
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          ref={phoneRef}
                        ></input>
                        <span className="material-input"></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="bmd-label-floating">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      ref={emailRef}
                    ></input>
                    <span className="material-input"></span>
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label for="exampleMessage1" className="bmd-label-floating">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="exampleMessage1"
                      rows="6"
                      ref={messageRef}
                    ></textarea>
                    <span className="material-input"></span>
                  </div>
                </div>
                <div className="card-footer justify-content-between">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      ></input>
                      I'm not a robot
                      <span className="form-check-sign">
                        <span className="check"></span>
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary pull-right">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
