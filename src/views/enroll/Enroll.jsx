import React, { useRef } from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import Footer from "../../_components/page/Footer";
import enrollBG from "../../assets/spree/img/enrollBG.jpg";
import SelectDropDown from "../../_components/common/SelectDropDown";
import Datetime from "react-datetime";
import { addDashes } from "../../_helpers/fixPhone";
import { enrollService } from "@/_services";

const Enroll = () => {
  const formRef = useRef();
  const issuesRef = useRef();
  const today = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Text Inputs
    const formTextInputs = [...formRef.current.elements].filter((element) => {
      return (
        element.type === "text" ||
        element.type === "tel" ||
        element.type === "email"
      );
    });

    const formTextEntries = formTextInputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.name]: input.value,
      };
    }, {});

    //Radio Inputs
    const formRadioInputs = [...formRef.current.elements].filter((element) => {
      return element.type === "radio" && element.checked === true;
    });

    const formRadioEntries = formRadioInputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.name]: input.value,
      };
    }, {});

    const formSelectInputs = [...formRef.current.elements].filter((element) => {
      console.log(element);
      return element.classList.contains("selectpicker");
    });

    const formSelectEntries = formSelectInputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.name]: input.value,
      };
    }, {});

    const formEntries = {
      issues: issuesRef.current.value,
      ...formRadioEntries,
      ...formTextEntries,
      ...formSelectEntries,
    };
    //console.log(formEntries);
    enrollService.saveEnrollment(formEntries);
  };

  return (
    <body className="sidebar-collapse">
      <div className="signup-page">
        <NavBarPublic scrollTo={100} />
        <div
          className="page-header header-filter"
          filter-color="purple"
          style={{
            backgroundImage: `url('${enrollBG}')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">Registration Form</h2>
                  <div className="card-body">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Child's Name"
                              name="student"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <Datetime
                              inputProps={{
                                placeholder: "Date of Birth",
                                name: "dob",
                                required: true,
                              }}
                              viewDate={
                                new Date(
                                  `${today.getFullYear() - 15}-${
                                    today.getMonth() + 1
                                  }-${today.getDate()}`
                                )
                              }
                              timeFormat={false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <SelectDropDown
                            name="grade"
                            options={[
                              {
                                label: "Pre-School",
                                value: "1",
                              },
                              {
                                label: "K - 3rd",
                                value: "2",
                              },
                              {
                                label: "4th - 8th",
                                value: "3",
                              },
                              {
                                label: "High School",
                                value: "4",
                              },
                            ]}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address"
                              name="address"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                              name="city"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Zip"
                              name="zip"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mother's Name"
                              name="mother"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="tel"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              className="form-control"
                              placeholder="Daytime Phone"
                              name="motherDayPhone"
                              onBlur={(e) => addDashes(e)}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Home Phone"
                              name="motherHomePhone"
                              onBlur={(e) => addDashes(e)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              name="motherEmail"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Father's Name"
                              name="father"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Daytime Phone"
                              name="fatherDayPhone"
                              onBlur={(e) => addDashes(e)}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Home Phone"
                              name="fatherHomePhone"
                              onBlur={(e) => addDashes(e)}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group bmd-form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              name="fatherEmail"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group bmd-form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Parents and/or Guardians whom child may be released to"
                              name="trusted"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group label-floating bmd-form-group is-filled">
                            <label
                              className="form-control-label bmd-label-floating mb-3"
                              for="issues"
                            >
                              Please list any information that would assist in
                              the safety and enjoyment in the program
                            </label>
                            <textarea
                              className="form-control mt-4"
                              rows="5"
                              id="issues"
                              name="issues"
                              ref={issuesRef}
                            ></textarea>
                          </div>
                        </div>
                        <label>T-shirt size:</label>
                        <div className="col-md-6">
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize1"
                                value="XS"
                              />
                              XS (4-5)
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize2"
                                value="SM"
                              />
                              (SM) 6-8
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize3"
                                value="M"
                              />
                              (M) 10-12
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize4"
                                value="L"
                              />
                              (L) 14-16
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize5"
                                value="Adult-S"
                              />
                              Adult-S
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize6"
                                value="Adult-M"
                              />
                              Adult-M
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="tshirtSize"
                                id="tshirtSize7"
                                value="Adult-LG"
                              />
                              Adult-LG
                              <span className="circle">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <label for="programSelect">Program to Enroll: </label>

                          <SelectDropDown
                            name="program"
                            options={[
                              {
                                label: "Tiny Twirlers",
                                value: "Tiny Twirlers",
                              },
                              {
                                label: "Twirling Team",
                                value: "Twirling Team",
                              },
                              {
                                label: "Color Guard",
                                value: "Color Guard",
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <button className="btn btn-primary btn-round">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Enroll;
