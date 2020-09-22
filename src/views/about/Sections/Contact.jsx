import React, { useRef } from "react";
import SelectDropDown from "../../../_components/common/SelectDropDown";

import { emailLeadService } from "@/_services";
import { history } from "@/_helpers";

const Contact = () => {
  const selectRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailLeadService.saveLead({
      name: nameRef.current.value,
      email: emailRef.current.value,
      item: selectRef.current.value,
    });
    window.scrollTo(0, 0);
    history.push("/");
  }
  return (
    <div className="about-contact">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto">
          <h2 className="text-center title">Want more information?</h2>
          <h4 className="text-center description">
            If you would like more information about Spree Programs please fill
            in your name, email and the program you’re interested in and we will
            be happy to reach out.
          </h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="name" className="bmd-label-floating">
                    Your Name
                  </label>
                  <input type="text" className="form-control" ref={nameRef} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="email" className="bmd-label-floating">
                    Your Email
                  </label>
                  <input type="email" className="form-control" ref={emailRef} />
                </div>
              </div>
              <div className="col-md-4">
                <SelectDropDown
                  innerRef={selectRef}
                  options={[
                    {
                      label: "Twirling Team",
                      value: "Twirling Team",
                    },
                    {
                      label: "Color Guard",
                      value: "Color Guard",
                    },
                    {
                      label: "Show Teams",
                      value: "Show Teams",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ml-auto mr-auto text-center">
                <button
                  className="btn btn-primary btn-round"
                  //onClick={() => console.log(selectRef.current.value)}
                  value="submit"
                >
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
