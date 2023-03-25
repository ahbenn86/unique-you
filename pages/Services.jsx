import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Squarespace | Wordpress | SEO | New York, NY.</title>
        <meta
          name="description"
          content="Have your website created by Unique You including your brand and logo design plus SEO practices to have your business found by your favorite search engine."
        />
        <meta
          name="keywords"
          content="Squarespace, Wordpress, Website, Build, SEO, Logo, Brand, Design, Workshops"
        />
      </Helmet>
      <div className="container my-3 min-vh-100 .paragraph-services">
        <div className="row">
          <div className="col-lg-3">
            <div className="service-head-container">
              <img
                src="/assets/services/service-head.svg"
                style={{ width: "20rem", height: "20rem" }}
                alt="Blue human head with spinning wheel thinking of all the web development services it can offer you"
                className="img-fluid service-head"
                width={306}
                height={320}
              />
              <img
                src="/assets/services/wheel-4.svg"
                className="img-fluid"
                id="wheel-4"
                style={{ width: "5.5rem", height: "5.5rem" }}
                alt=""
                width={88}
                height={88}
              />
            </div>
          </div>
          <div className="col-lg-9 row">
            <h1 className="fs-3 fw-light text-center">Our services</h1>
            <div className="p-2">
              <div className="image-container d-flex justify-content-evenly mb-5">
                <Link to="/wordpress">
                  <img
                    src="/assets/wordpress-logo.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt="Wordpress logo"
                    width={192}
                    height={192}
                  />
                </Link>
                <Link to="/branding">
                  <img
                    src="/assets/services/smile-brand.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt="Smile brand logo"
                    width={192}
                    height={192}
                  />
                </Link>
                <Link to="/seo">
                  <img
                    src="/assets/services/seo_opt.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt="Description of different SEO services offered by Unique You"
                    width={192}
                    height={192}
                  />
                </Link>
                <Link to="/workshops">
                  <img
                    src="/assets/services/workshop.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt="Depiction of development workshops being offered by Unique You"
                    width={192}
                    height={192}
                  />
                </Link>
              </div>
              <div id="#" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mb-5">
                  <div className="carousel-item active">
                    <img
                      src="/assets/services/squarespace-logo-vector.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="Squarespace logo"
                      width={192}
                      height={192}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/smile-brand.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="Smile brand logo"
                      width={192}
                      height={192}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/seo_opt.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="Description of different SEO services offered by Unique You"
                      width={192}
                      height={192}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/workshop.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="Depiction of development workshops being offered by Unique You"
                      width={192}
                      height={192}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <p className="mt-4 p-4 shadow rounded paragraph-services">
                  We offer a host of different services from regular website
                  maintenance and enhancements to one-on-one{" "}
                  <Link to="/workshops" style={{ textDecoration: "none" }}>
                    workshops
                  </Link>
                  . We can enhance your current{" "}
                  <a
                    href="https://www.squarespace.com/"
                    className="external-link"
                    target="_blank"
                  >
                    Squarespace
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wordpress.com/"
                    className="external-link"
                    target="_blank"
                  >
                    WordPress
                  </a>{" "}
                  website or create your very first website from the ground up
                  along with creating the logo for your brand and ensuring that
                  your business is found within search results such as Google.
                </p>
                <Link to="/contact">
                  <button
                    className="btn btn-outline-primary mt-2"
                    to="/services"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

<a href="https://pngtree.com/so/Network">Network png from pngtree.com/</a>;
