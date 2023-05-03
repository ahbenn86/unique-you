import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Branding.css";

function Branding() {
  return (
    <>
      <Helmet>
        <title>
          Brand design | Get your unique logo with any of our packages
        </title>
        <meta
          name="description"
          content="We create unique, memorable logos and branding that help your business stand out from the crowd. Let us help you make a lasting impression."
        />
        <meta
          name="keywords"
          content="logo designer,brand design,2023 logo design,3d logo design,affordable logo design,brand identity designer,brand logo,brand logo design,business logo,commercial logo,company logo design,creative logo design,logo and brand design,logo and branding,logo and website design,logo designer near me,logo ecommerce,medical logo design,squarespace logo,unique logo,unique logo design,restaurant logo design,wellness logo design,massage logo design,medical logo design,hire someone to design logo"
        />
      </Helmet>
      <div className="container-lg min-vh-100">
        <h1
          className="fs-4 fw-light text-center pb-3 mb-3 h1-brand"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "7px",
            textDecorationThickness: "1px",
          }}
        >
          Brand Design
        </h1>
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid"
                src="/assets/branding/woman-idea-2.svg"
                alt="Cartoon woman having a bright idea on how to design your logo."
                width={180}
                height={280}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/branding/bugsy-logo.png"
                alt="An example of a unique you brand and logo design."
                width={400}
                height={146}
              />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center section-2-branding">
            <p className="p-4 shadow rounded paragraph-cms">
              Do you need a logo for your business? Our agency offers
              comprehensive branding and logo design services. We specialize in
              creating unique, memorable logos that capture the essence of your
              business. Our experienced team of designers will work with you to
              develop a logo that reflects your company's values and mission.
              Our goal is to help you create a strong, recognizable brand that
              stands out from the competition. Your own unique logo is included
              with the purchase of any of our{" "}
              <Link to="/website-packages" style={{textDecoration: "none"}}>website packages</Link>.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary mt-2" to="/services">
                Contact Us
              </button>
            </Link>
            <Link to="/website-packages">
                  <button className="btn btn-primary mt-2 btn-2">
                    Website Packages
                  </button>
                </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
