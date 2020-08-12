import React, { useState, useEffect } from "react";
import whiteLogo from "../../assets/spree/img/logoWhite2.png";
import colorLogo from "../../assets/spree/img/logoColor2.png";
import { Link } from "react-router-dom";
import { accountService } from "@/_services";
import { Role } from "@/_helpers";

const NavBarPublic = ({ solidNav, scrollTo = 500 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAction, setOpenAction] = useState("");

  const handleSelect = () => {
    console.log(user);
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

  const user = accountService.userValue;
  const [scrollPosition, setSrollPosition] = useState(0);
  const [navMenuVisable, setNavMenuVisable] = useState(false);
  const [navAbsolute, setNavAbsolute] = useState(false);
  const [toggled, setToggled] = useState(false);

  //Header
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  const handleToggler = () => {
    let htmlTag = document.getElementsByTagName("html")[0];
    let bodyTag = document.getElementsByTagName("body")[0];

    if (navMenuVisable) {
      let bodyClick = document.getElementById("bodyClick");
      htmlTag.classList.remove("nav-open");
      setNavMenuVisable(false);
      bodyClick.remove();

      setTimeout(function () {
        setToggled(false);
      }, 550);

      htmlTag.classList.remove("nav-open-absolute");
    } else {
      setTimeout(function () {
        setToggled(true);
      }, 580);
      let bodyClick = document.createElement("div");
      bodyClick.setAttribute("id", "bodyClick");
      bodyClick.addEventListener("click", () => {
        htmlTag.classList.remove("nav-open");
        if (navAbsolute) {
          htmlTag.classList.remove("nav-open-absolute");
        }
        setNavMenuVisable(false);
        document.getElementById("bodyClick").remove();
        setTimeout(function () {
          setToggled(false);
        }, 550);
      });
      bodyTag.append(bodyClick);

      if (navAbsolute) {
        htmlTag.classList.add("nav-open-absolute");
      }

      htmlTag.classList.add("nav-open");

      setNavMenuVisable(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Dropdowns

  return (
    <nav
      class={`navbar navbar-color-on-scroll fixed-top navbar-expand-lg ${
        !solidNav && scrollPosition < scrollTo ? "navbar-transparent" : ""
      }`}
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <Link to="/" class="navbar-brand">
            <div class="logo-big">
              <img src={whiteLogo} class="img-fluid" alt="Spree Programs"></img>
            </div>
            <div class="logo-small">
              <img src={colorLogo} class="img-fluid" alt="Spree Programs"></img>
            </div>
          </Link>
          <button
            class={`navbar-toggler ${toggled ? "toggled" : ""}`}
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => handleToggler()}
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                <i class="material-icons">home</i>Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                <i class="material-icons">account_balance</i>About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link">
                <i class="material-icons">call</i>Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/store" class="nav-link">
                <i class="material-icons">shopping_basket</i>Store
              </Link>
            </li>
            {user && (
              <li
                class={`dropdown nav-item ${
                  isOpen ? "show" : ""
                } ${openAction}`}
              >
                <Link
                  onClick={() => {
                    handleSelect();
                  }}
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i class="material-icons">account_circle</i> {user.firstName}
                </Link>
                <div
                  class={`dropdown-menu dropdown-with-icons ${
                    isOpen ? "show" : ""
                  } ${openAction}`}
                >
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  {user.role === Role.Admin && (
                    <Link to="/admin" className="dropdown-item">
                      Admin
                    </Link>
                  )}
                  <Link
                    onClick={accountService.logout}
                    className="nav-item nav-link"
                  >
                    Logout
                  </Link>
                </div>
              </li>
            )}

            <li class="button-container nav-item iframe-extern">
              <Link to="/enroll" class="btn btn-rose btn-round btn-block">
                <i class="material-icons">assignment</i> Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPublic;
