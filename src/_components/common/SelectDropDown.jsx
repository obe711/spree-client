import React, { useState } from "react";

const SelectDropDown = ({ innerRef, options, label, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAction, setOpenAction] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    label: "Select Item",
    value: "",
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
    <div class={`dropdown bootstrap-select p-3 dropup ${isOpen ? "show" : ""}`}>
      {label && <label>Select Program</label>}

      <select
        name={name}
        class="selectpicker"
        data-style="select-with-transition"
        data-size="7"
        tabIndex="-98"
        ref={innerRef}
      >
        <option value={selectedItem.value} selected>
          {selectedItem.label}
        </option>
      </select>
      <button
        type="button"
        class="btn dropdown-toggle select-with-transition"
        onClick={() => handleSelect()}
        data-toggle="dropdown"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Select Item"
      >
        <div class="filter-option">
          <div class="filter-option-inner">
            <div class="filter-option-inner-inner">{selectedItem.label}</div>
          </div>{" "}
        </div>
      </button>
      <div
        class={`dropdown-menu ${isOpen ? "show" : ""} ${openAction}`}
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
          class="inner show"
          role="listbox"
          id="bs-select-1"
          tabindex="-1"
          style={{ overflowY: "auto" }}
        >
          <ul
            class="dropdown-menu inner show"
            role="presentation"
            style={{ marginTop: "0px", marginBottom: "0px" }}
          >
            {options &&
              options.map((dataItem, idx) => {
                return (
                  <li
                    key={idx}
                    class={`${
                      selectedItem.value === dataItem.value
                        ? "active selected"
                        : ""
                    }`}
                  >
                    <div
                      onClick={() => handleSelectItem(dataItem)}
                      class={`dropdown-item ${
                        selectedItem.value === dataItem.value
                          ? "active selected"
                          : ""
                      }`}
                      tabindex="0"
                    >
                      <span class="text">{dataItem.label}</span>
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

export default SelectDropDown;
