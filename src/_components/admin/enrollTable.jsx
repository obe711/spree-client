import React, { useState, useRef, useEffect } from "react";
import ReactTable from "react-table-v6";
import moment from "moment";
import SelectDropDownControlled from "../common/SelectDropDownControlled";

const gradeOptions = [
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
];

const tShirtOptions = [
  {
    label: "XS (4-5)",
    value: "XS",
  },
  {
    label: "(SM) 6-8",
    value: "SM",
  },
  {
    label: "(M) 10-12",
    value: "M",
  },
  {
    label: "(L) 14-16",
    value: "L",
  },
  {
    label: "Adult-S",
    value: "Adult-S",
  },
  {
    label: "Adult-M",
    value: "Adult-M",
  },
  {
    label: "Adult-LG",
    value: "Adult-LG",
  },
];

const programOptions = [
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
];

const EnrollTable = (props) => {
  const studentRef = useRef();
  const parentsRef = useRef();
  const addressRef = useRef();
  const [activeTab, setActiveTab] = useState({});
  const [expanded, setExpanded] = useState({});
  const [editable, setEditable] = useState();

  const columns = [
    {
      Header: "id",
      accessor: "_id",
      show: false,
    },
    {
      Header: "Unseen",
      accessor: "unseen",
      show: false,
    },
    {
      Header: "Student",
      accessor: "student",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {row.value}
        </span>
      ),
    },
    {
      Header: "Program",
      accessor: "program",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {row.value}
        </span>
      ),
    },
    {
      Header: "Grade",
      accessor: "grade",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {selectHelper("grade", row.value)}
        </span>
      ),
    },
    {
      Header: "Date",
      accessor: "created_on",
      className: "text-center",
      Cell: (row) => (
        <span className={row.original.unseen ? "font-weight-bold" : ""}>
          {moment(row.value).calendar()}
        </span>
      ),
    },
  ];

  useEffect(() => {
    if (editable) {
      const editRow = props.data.find((record) => record._id === editable);
      [studentRef, parentsRef, addressRef].map((formRef) => {
        return fillForm(formRef, editRow);
      });
    }
  }, [editable]);

  function fillForm(formRes, editRow) {
    const formInputs = [...formRes.current.elements].filter((element) => {
      return (
        element.type === "text" ||
        element.type === "date" ||
        element.classList.contains("selectpicker")
      );
    });
    formInputs.map((input) => {
      if (input.type === "date") {
        return (input.value = moment(editRow[input.name]).format("YYYY-MM-DD"));
      } else if (input.classList.contains("selectpicker")) {
        input.parentElement.getElementsByClassName(
          "filter-option-inner-inner"
        )[0].innerText = selectHelper(input.name, editRow[input.name]);

        input.children[0].value = editRow[input.name];

        return (input.children[0].value = editRow[input.name]);
      } else {
        return (input.value = editRow[input.name]);
      }
    });
  }

  function selectHelper(name, value) {
    let dataObj;

    switch (name) {
      case "grade":
        dataObj = [...gradeOptions].find((opt) => {
          if (opt.value == value) {
            return true;
          }
        });
        return dataObj.label;
      case "tshirtSize":
        dataObj = [...tShirtOptions].find((opt) => {
          if (opt.value == value) {
            return true;
          }
        });
        return dataObj.label;
      case "program":
        dataObj = [...programOptions].find((opt) => {
          if (opt.value == value) {
            return true;
          }
        });
        return dataObj.label;
      default:
        return value;
    }
  }

  return (
    <ReactTable
      className="-highlight"
      data={props.data}
      columns={columns}
      defaultPageSize={10}
      expanded={expanded}
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: (e, handleOriginal) => {
            setExpanded((expanded) => {
              return {
                ...expanded,
                [rowInfo.index]: !expanded[rowInfo.index],
              };
            });

            if (!rowInfo.isExpanded) {
              //if (expanded[rowInfo.index]) {
              setActiveTab((activeTab) => {
                return {
                  ...activeTab,
                  [rowInfo.original._id]: "student",
                };
              });
            }

            if (handleOriginal) {
              handleOriginal();
            }
          },
        };
      }}
      SubComponent={(row) => {
        return (
          <React.Fragment>
            <div className="px-5 py-3">
              <div className="card card-nav-tabs ">
                <div className="card-header card-header-rose">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab[row.original._id] &&
                              activeTab[row.original._id] === "student"
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setActiveTab((activeTab) => {
                                return {
                                  ...activeTab,
                                  [row.original._id]: "student",
                                };
                              })
                            }
                          >
                            Student
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab[row.original._id] &&
                              activeTab[row.original._id] === "parents"
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setActiveTab((activeTab) => {
                                return {
                                  ...activeTab,
                                  [row.original._id]: "parents",
                                };
                              })
                            }
                          >
                            Parents
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab[row.original._id] &&
                              activeTab[row.original._id] === "address"
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setActiveTab((activeTab) => {
                                return {
                                  ...activeTab,
                                  [row.original._id]: "address",
                                };
                              })
                            }
                          >
                            Address
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${
                              activeTab[row.original._id] &&
                              activeTab[row.original._id] === "account"
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setActiveTab((activeTab) => {
                                return {
                                  ...activeTab,
                                  [row.original._id]: "account",
                                };
                              })
                            }
                          >
                            Account
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content ">
                    <div
                      id="student"
                      className={`tab-pane ${
                        activeTab[row.original._id] &&
                        activeTab[row.original._id] === "student"
                          ? "active"
                          : ""
                      }`}
                    >
                      {editable === row.original._id && (
                        <React.Fragment>
                          <form
                            ref={studentRef}
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputName">Student Name</label>
                                <input
                                  type="text"
                                  name="student"
                                  className="form-control"
                                  id="inputName"
                                  placeholder="Student Name"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputIssues">Special</label>
                                <input
                                  type="text"
                                  name="issues"
                                  className="form-control"
                                  id="inputIssues"
                                  placeholder="Special"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputDob">DOB</label>
                                <input
                                  type="date"
                                  name="dob"
                                  className="form-control"
                                  id="inputDob"
                                  placeholder="DOB"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputTrusted">
                                  Approved Pickup
                                </label>
                                <input
                                  type="text"
                                  name="trusted"
                                  className="form-control"
                                  id="inputTrusted"
                                  placeholder="Approved Pickup"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputGrade">Grade</label>
                                <SelectDropDownControlled
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
                              <div className="form-group col-md-6">
                                <label htmlFor="inputTshirtSize">T-Shirt</label>
                                <SelectDropDownControlled
                                  name="tshirtSize"
                                  options={[
                                    {
                                      label: "XS (4-5)",
                                      value: "XS",
                                    },
                                    {
                                      label: "(SM) 6-8",
                                      value: "SM",
                                    },
                                    {
                                      label: "(M) 10-12",
                                      value: "M",
                                    },
                                    {
                                      label: "(L) 14-16",
                                      value: "L",
                                    },
                                    {
                                      label: "Adult-S",
                                      value: "Adult-S",
                                    },
                                    {
                                      label: "Adult-M",
                                      value: "Adult-M",
                                    },
                                    {
                                      label: "Adult-LG",
                                      value: "Adult-LG",
                                    },
                                  ]}
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6"></div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputProgram">Program</label>
                                <SelectDropDownControlled
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
                              <div className="col-md-12 text-right">
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-success"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Save</span>
                                  )}
                                </button>
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-danger"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Cancel</span>
                                  )}
                                </button>
                              </div>
                            </div>
                          </form>
                        </React.Fragment>
                      )}
                      {editable !== row.original._id && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col">
                              <h5>
                                Name:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.student}
                                </span>
                              </h5>
                              <h5>
                                DOB:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {moment(row.original.dob).format(
                                    "MM-DD-YYYY"
                                  )}
                                </span>
                              </h5>
                              <h5>
                                Grade:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.grade}
                                </span>
                              </h5>
                              <h5>
                                Age:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {moment().diff(
                                    moment(row.original.dob),
                                    "years"
                                  )}
                                </span>
                              </h5>
                            </div>
                            <div className="col">
                              <h4>
                                Special:{" "}
                                <span className="font-weight-bold">
                                  {row.original.issues}
                                </span>
                              </h4>
                              <h5>
                                T-Shirt:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.tshirtSize}
                                </span>
                              </h5>
                              <h5>
                                Program:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.program}
                                </span>
                              </h5>
                              <h5>
                                Approved Pickup:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.trusted}
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-right">
                              <button
                                onClick={() => setEditable(row.original._id)}
                                //onClick={() =>
                                //  handleEditable(row.original, "student")
                                //}
                                className="btn btn-sm btn-primary"
                                //disabled={row.original.isToggling}
                              >
                                {row.original.isLoading ? (
                                  <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                  <span>Edit</span>
                                )}
                              </button>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                    <div
                      id="parents"
                      className={`tab-pane ${
                        activeTab[row.original._id] &&
                        activeTab[row.original._id] === "parents"
                          ? "active"
                          : ""
                      }`}
                    >
                      {" "}
                      {editable === row.original._id && (
                        <React.Fragment>
                          <form
                            ref={parentsRef}
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputMother">Mother</label>
                                <input
                                  type="text"
                                  name="mother"
                                  className="form-control"
                                  id="inputMother"
                                  placeholder="Mother Name"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputFather">Father</label>
                                <input
                                  type="text"
                                  name="father"
                                  className="form-control"
                                  id="inputFather"
                                  placeholder="Father Name"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputMotherDayPhone">
                                  Day Phone
                                </label>
                                <input
                                  type="text"
                                  name="motherDayPhone"
                                  className="form-control"
                                  id="inputMotherDayPhone"
                                  placeholder="Day Phone"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputFatherDayPhone">
                                  Day Phone
                                </label>
                                <input
                                  type="text"
                                  name="fatherDayPhone"
                                  className="form-control"
                                  id="inputFatherDayPhone"
                                  placeholder="Day Phone"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputMotherHomePhone">
                                  Home Phone
                                </label>
                                <input
                                  type="text"
                                  name="motherHomePhone"
                                  className="form-control"
                                  id="inputMotherHomePhone"
                                  placeholder="Home Phone"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputFatherHomePhone">
                                  Home Phone
                                </label>
                                <input
                                  type="text"
                                  name="fatherHomePhone"
                                  className="form-control"
                                  id="inputFatherHomePhone"
                                  placeholder="Home Phone"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputMotherEmail">Email</label>
                                <input
                                  type="text"
                                  name="motherEmail"
                                  className="form-control"
                                  id="inputMotherEmail"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputFatherEmail">Email</label>
                                <input
                                  type="text"
                                  name="fatherEmail"
                                  className="form-control"
                                  id="inputFatherEmail"
                                  placeholder="Email"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12 text-right">
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-success"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Save</span>
                                  )}
                                </button>
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-danger"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Cancel</span>
                                  )}
                                </button>
                              </div>
                            </div>
                          </form>
                        </React.Fragment>
                      )}
                      {editable !== row.original._id && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col">
                              <h5>
                                Mother:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.mother}
                                </span>
                              </h5>
                              <h5>
                                Day Phone:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.motherDayPhone}
                                </span>
                              </h5>
                              <h5>
                                Home Phone:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.motherHomePhone}
                                </span>
                              </h5>
                              <h5>
                                Email:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.motherEmail}
                                </span>
                              </h5>
                            </div>
                            <div className="col">
                              <h5>
                                Father:{" "}
                                <span className="font-weight-bold">
                                  {row.original.father}
                                </span>
                              </h5>
                              <h5>
                                Day Phone:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.fatherDayPhone}
                                </span>
                              </h5>
                              <h5>
                                Home Phone:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.fatherHomePhone}
                                </span>
                              </h5>
                              <h5>
                                Email:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.fatherEmail}
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-right">
                              <button
                                onClick={() => setEditable(row.original._id)}
                                className="btn btn-sm btn-primary"
                                //disabled={row.original.isToggling}
                              >
                                {row.original.isLoading ? (
                                  <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                  <span>Edit</span>
                                )}
                              </button>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>

                    <div
                      id="address"
                      className={`tab-pane ${
                        activeTab[row.original._id] &&
                        activeTab[row.original._id] === "address"
                          ? "active"
                          : ""
                      }`}
                    >
                      {editable === row.original._id && (
                        <React.Fragment>
                          <form
                            ref={addressRef}
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  className="form-control"
                                  id="inputAddress"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input
                                  type="text"
                                  name="city"
                                  className="form-control"
                                  id="inputCity"
                                  placeholder="City"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputState">State</label>
                                <input
                                  type="text"
                                  name="state"
                                  className="form-control"
                                  id="inputState"
                                  placeholder="State"
                                />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputZip">Zip</label>
                                <input
                                  type="text"
                                  name="zip"
                                  className="form-control"
                                  id="inputZip"
                                  placeholder="Zip"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12 text-right">
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-success"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Save</span>
                                  )}
                                </button>
                                <button
                                  onClick={() => setEditable("")}
                                  className="btn btn-sm btn-danger"
                                  //disabled={row.original.isToggling}
                                >
                                  {row.original.isLoading ? (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  ) : (
                                    <span>Cancel</span>
                                  )}
                                </button>
                              </div>
                            </div>
                          </form>
                        </React.Fragment>
                      )}
                      {editable !== row.original._id && (
                        <React.Fragment>
                          <div className="row">
                            <div className="col">
                              <h5>
                                Address:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.address}
                                </span>
                              </h5>
                              <h5>
                                City:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.city}
                                </span>
                              </h5>
                              <h5>
                                State:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.state}
                                </span>
                              </h5>
                              <h5>
                                Zip:{" "}
                                <span className="font-weight-bold">
                                  {" "}
                                  {row.original.zip}
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 text-right">
                              <button
                                onClick={() => setEditable(row.original._id)}
                                //onClick={() =>
                                //  handleEditable(row.original, "student")
                                //}
                                className="btn btn-sm btn-primary"
                                //disabled={row.original.isToggling}
                              >
                                {row.original.isLoading ? (
                                  <span className="spinner-border spinner-border-sm"></span>
                                ) : (
                                  <span>Edit</span>
                                )}
                              </button>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                    <div
                      id="program"
                      className={`tab-pane ${
                        activeTab[row.original._id] &&
                        activeTab[row.original._id] === "account"
                          ? "active"
                          : ""
                      }`}
                    >
                      <p>Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    />
  );
};

export default EnrollTable;
