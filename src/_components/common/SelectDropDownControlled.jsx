import React, { useState } from "react";

const SelectDropDownControlled = ({
  selectedLabel,
  selectedValue,
  innerRef,
  options,
  label,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAction, setOpenAction] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    label: selectedLabel,
    value: selectedValue,
  });

  const handleSelect = () => {
    let prevOpenState = isOpen;
    setIsOpen((isOpen) => !isOpen);
    if (prevOpenState) {
      setOpenAction("hiding");
      setInterval(() => {
        setOpenAction("");
      }, 1000);
    } else {
      setOpenAction("showing");
      setInterval(() => {
        setOpenAction("");
      }, 1000);
    }
  };

  const handleSelectItem = (item) => {
    handleSelect();
    setSelectedItem(item);
  };

  return (
    <div
      className={`dropdown bootstrap-select p-3 dropup ${isOpen ? "show" : ""}`}
    >
      {label && <label>Select Program</label>}

      <select
        name={name}
        className="selectpicker"
        data-style="select-with-transition"
        data-size="7"
        tabIndex="-98"
        ref={innerRef}
      >
        <option value={selectedItem.value}>{selectedItem.label}</option>
      </select>
      <button
        type="button"
        className="btn dropdown-toggle select-with-transition"
        onClick={() => handleSelect()}
        data-toggle="dropdown"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Select Item"
      >
        <div className="filter-option">
          <div className="filter-option-inner">
            <div className="filter-option-inner-inner">
              {selectedItem.label}
            </div>
          </div>{" "}
        </div>
      </button>
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""} ${openAction}`}
        x-placement="top-start"
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "-114px",
          left: "1px",
          willChange: "top, left",
        }}
      >
        <div
          className="inner show"
          role="listbox"
          id="bs-select-1"
          tabIndex="-1"
          style={{ overflowY: "auto" }}
        >
          <ul
            className="dropdown-menu inner show"
            role="presentation"
            style={{ marginTop: "0px", marginBottom: "0px" }}
          >
            {options &&
              options.map((dataItem, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      selectedItem.value === dataItem.value
                        ? "active selected"
                        : ""
                    }`}
                  >
                    <div
                      onClick={() => handleSelectItem(dataItem)}
                      className={`dropdown-item ${
                        selectedItem.value === dataItem.value
                          ? "active selected"
                          : ""
                      }`}
                      tabIndex="0"
                    >
                      <span className="text">{dataItem.label}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectDropDownControlled;
