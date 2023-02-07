import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="service-head-container">
              <img
                src="/assets/services/service-head.svg"
                style={{ width: "20rem", height: "20rem" }}
                alt="#"
                className="img-fluid service-head"
              />
              <img
                src="/assets/services/wheel-4.png"
                className="img-fluid"
                id="wheel-4"
                style={{ width: "5.5rem", height: "5.5rem" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="p-5">
              <div className="image-container d-flex justify-content-evenly mb-5">
                <Link to="/squarespace">
                  <img
                    src="/assets/services/squarespace-logo-vector.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt=""
                  />
                </Link>
                <Link to="/branding">
                  <img
                    src="/assets/services/smile-brand.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt=""
                  />
                </Link>
                <Link to="/seo">
                  <img
                    src="/assets/services/seo.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt=""
                  />
                </Link>
                <Link to="/workshops">
                  <img
                    src="/assets/services/workshop.svg"
                    className="img-fluid"
                    style={{ width: "12rem", height: "12rem" }}
                    alt=""
                    title="https://pngtree.com/so/Network"
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
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/smile-brand.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/seo.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/services/workshop.svg"
                      style={{ width: "12rem", height: "12rem" }}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <p>
                We offer a host of different services from regular website
                maintenance and enhancements to one-on-one{" "}
                <Link to="/workshops" style={{ textDecoration: "none" }}>
                  workshops
                </Link>
                . We can enhance your current Squarespace or WordPress website
                or create your very first website from the ground up along with
                creating the logo for your brand and ensuring that your business
                is found within search results such as Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

<a href="https://pngtree.com/so/Network">Network png from pngtree.com/</a>;
