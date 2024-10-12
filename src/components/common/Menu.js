import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Menu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" to="/" onClick={scrollToTop}>
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
