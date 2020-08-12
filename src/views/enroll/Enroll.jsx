import React, { useRef } from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import Footer from "../../_components/page/Footer";
import enrollBG from "../../assets/spree/img/enrollBG.jpg";
import SelectDropDown from "../../_components/common/SelectDropDown";
import Datetime from "react-datetime";
import { addDashes } from "../../_helpers/fixPhone";


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
    console.log(formEntries);
  };

  return (
    <body className="sidebar-collapse">
    <div className="signup-page">
      <NavBarPublic scrollTo={100} />
      <div
        class="page-header header-filter"
        filter-color="purple"
        style={{
          backgroundImage: `url('${enrollBG}')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
              <div class="card card-signup">
                <h2 class="card-title text-center">Registration Form</h2>
                <div class="card-body">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Child's Name"
                            name="student"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
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
                      <div class="col-md-3">
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
                      <div class="col-md-7">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            name="address"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                            name="city"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Zip"
                            name="zip"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mother's Name"
                            name="mother"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            class="form-control"
                            placeholder="Daytime Phone"
                            name="motherDayPhone"
                            onBlur={(e) => addDashes(e)}
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="tel"
                            class="form-control"
                            placeholder="Home Phone"
                            name="motherHomePhone"
                            onBlur={(e) => addDashes(e)}
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="motherEmail"
                          />
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Father's Name"
                            name="father"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="tel"
                            class="form-control"
                            placeholder="Daytime Phone"
                            name="fatherDayPhone"
                            onBlur={(e) => addDashes(e)}
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="tel"
                            class="form-control"
                            placeholder="Home Phone"
                            name="fatherHomePhone"
                            onBlur={(e) => addDashes(e)}
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group bmd-form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="fatherEmail"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group bmd-form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Parents and/or Guardians whom child may be released to"
                            name="trusted"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group label-floating bmd-form-group is-filled">
                          <label
                            class="form-control-label bmd-label-floating mb-3"
                            for="issues"
                          >
                            Please list any information that would assist in the
                            safety and enjoyment in the program
                          </label>
                          <textarea
                            class="form-control mt-4"
                            rows="5"
                            id="issues"
                            name="issues"
                            ref={issuesRef}
                          ></textarea>
                        </div>
                      </div>
                      <label>T-shirt size:</label>
                      <div class="col-md-6">
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize1"
                              value="XS"
                            />
                            XS (4-5)
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize2"
                              value="SM"
                            />
                            (SM) 6-8
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize3"
                              value="M"
                            />
                            (M) 10-12
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize4"
                              value="L"
                            />
                            (L) 14-16
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize5"
                              value="Adult-S"
                            />
                            Adult-S
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize6"
                              value="Adult-M"
                            />
                            Adult-M
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="tshirtSize"
                              id="tshirtSize7"
                              value="Adult-LG"
                            />
                            Adult-LG
                            <span class="circle">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-5">
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
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <button class="btn btn-primary btn-round">
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
