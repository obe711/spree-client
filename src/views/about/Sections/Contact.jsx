import React, { useRef } from "react";
import SelectDropDown from "../../../_components/common/SelectDropDown";

const Contact = () => {
  const selectRef = useRef();

  return (
    <div class="about-contact">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <h2 class="text-center title">Want more information?</h2>
          <h4 class="text-center description">
            If you would like more information about Spree Programs please fill
            in your name, email and the program you’re interested in and we will
            be happy to reach out.
          </h4>
          <form class="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="name" class="bmd-label-floating">
                    Your name
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="email" class="bmd-label-floating">
                    Your Email
                  </label>
                  <input type="email" class="form-control" />
                </div>
              </div>
              <div class="col-md-4">
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
            <div class="row">
              <div class="col-md-4 ml-auto mr-auto text-center">
                <button
                  class="btn btn-primary btn-round"
                  onClick={() => console.log(selectRef.current.value)}
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
