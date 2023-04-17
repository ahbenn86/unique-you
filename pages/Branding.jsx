import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Branding.css";

function Branding() {
  return (
    <>
      <Helmet>
        <title>Branding & Logo Design | Web Development | New York, NY.</title>
        <meta
          name="description"
          content="We create unique, memorable logos and branding that help your business stand out from the crowd. Let us help you make a lasting impression."
        />
        <meta
          name="keywords"
          content="Unique, Logo, Design, Branding, Website, Development"
        />
      </Helmet>
      <div className="container-lg my-4 min-vh-100">
        <h1 className="fs-3 fw-light text-center pb-3 mb-3">Brand Design</h1>
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid"
                src="/assets/logos/woman-idea.svg"
                alt="Woman at unique you having a bright idea on how to design your logo."
                width={200}
                height={300}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/logos/bugsy-logo_3.png"
                alt="An example of a unique you brand and logo design."
                width={500}
                height={246}
              />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <p className="p-4 shadow rounded paragraph-cms">
              Do you need a logo for your business? Our agency offers
              comprehensive branding and logo design services. We specialize in
              creating unique, memorable logos that capture the essence of your
              business. Our experienced team of designers will work with you to
              develop a logo that reflects your company's values and mission.
              Our goal is to help you create a strong, recognizable brand that
              stands out from the competition.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary mt-2" to="/services">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
