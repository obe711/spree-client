import React from "react";
import { Link } from "react-router-dom";
import { accountService } from "@/_services";

const Footer = () => {
  const user = accountService.userValue;
  return (
    <footer class="footer footer-default">
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
            {false && (
              <li>
                <Link to="/store">Store</Link>
              </li>
            )}

            <li>
              <Link to="/enroll">Enroll</Link>
            </li>
            {user && (
              <li>
                <Link onClick={accountService.logout}>Logout</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
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
  );
};

export default Footer;
