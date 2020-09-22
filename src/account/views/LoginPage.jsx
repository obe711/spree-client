import React from "react";
import NavBarPublic from "../../_components/page/NavBarPublic";
import loginBG from "../../assets/spree/img/loginBG.jpg";
import { Login } from "../Login";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <body>
      <div
        className="page-header header-filter"
        style={{
          backgroundImage: `url('${loginBG}')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <Login {...props} />
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <nav class="float-left">
            <ul>
              <li>
                <Link to="/">Spree Programs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/enroll">Enroll</Link>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            {new Date().getFullYear()}, made with{" "}
            <i class="material-icons">favorite</i> by
            <Link to="/"> Spree Programs </Link>
            for a better future.
          </div>
        </div>
      </footer>
    </body>
  );
};

export default LoginPage;
