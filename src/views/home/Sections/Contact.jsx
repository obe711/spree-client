import React from "react";
import contactImg from "../../../assets/spree/img/contactImg.jpg";

const Contact = () => {
  return (
    <div
      class="contactus-1 section-image"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="title">More Info</h2>
            <h5 class="description">
              For information regarding the Spree Programs, please complete and
              send the form below. We will contact you within 24 hours.
            </h5>

            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="material-icons">phone</i>
              </div>
              <div class="description">
                <h4 class="info-title">Give us a ring</h4>
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
          <div class="col-md-5 ml-auto">
            <div class="card card-contact">
              <form id="contact-form" method="post">
                <div class="card-header card-header-raised card-header-primary text-center">
                  <h4 class="card-title">Contact Us</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group label-floating is-empty">
                        <label class="bmd-label-floating">First name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                        ></input>
                        <span class="material-input"></span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group label-floating is-empty">
                        <label class="bmd-label-floating">Last name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                        ></input>
                        <span class="material-input"></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group label-floating is-empty">
                    <label class="bmd-label-floating">Email address</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                    ></input>
                    <span class="material-input"></span>
                  </div>
                  <div class="form-group label-floating is-empty">
                    <label for="exampleMessage1" class="bmd-label-floating">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      class="form-control"
                      id="exampleMessage1"
                      rows="6"
                    ></textarea>
                    <span class="material-input"></span>
                  </div>
                </div>
                <div class="card-footer justify-content-between">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      ></input>
                      I'm not a robot
                      <span class="form-check-sign">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary pull-right">
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
