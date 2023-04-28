import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="container-fluid sticky-bottom d-flex align-items-center footer"
      style={{ minHeight: "9vh" }}
    >
      <img
        width={73}
        height={65}
        className="image-fluid small-logo"
        src="/assets/footer/small-logo.svg"
        alt="#"
      />
      <div className="container-fluid d-flex flex-md-column align-items-center">
        <nav className="container-fluid  d-flex justify-content-evenly footer-nav w-50">
          <li>
            <NavLink to="/about" aria-current="page">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/website-services" aria-current="page">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/wordpress-development" aria-current="page">
              Wordpress
            </NavLink>
          </li>
          <li>
            <NavLink to="/seo-services" aria-current="page">
              SEO
            </NavLink>
          </li>
          <li>
            <NavLink to="/logo-design" aria-current="page">
              Brand Design
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" aria-current="page">
              Contact
            </NavLink>
          </li>
        </nav>
        <div className="container d-flex justify-content-center align-items-center">
          <span
            className="mt-sm-3 "
            style={{ color: "white", fontSize: "smaller" }}
          >
            Unique You © ™ 2023
          </span>
          <Link to="/credits" className="credits ">
            <span>
              Image Credits
            </span>
          </Link>
        </div>
      </div>
      <img
        className="image-fluid footer-symbol"
        src="/assets/footer/footer-symbol.svg"
        alt="#"
        width={58} 
        height={62}
      />
      <div className="btn-group dropup">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="/assets/footer/footer-symbol-2.svg" alt="" width={18} height={18}/>
        </button>
        <ul className="dropdown-menu">
          <li>
            <NavLink
              to="/about"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/website-services"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wordpress-development"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              Wordpress
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/seo-services"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              SEO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logo-design"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              Brand Design
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              aria-current="page"
              className="btn-grp-link ps-2"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
