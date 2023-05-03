import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Websites.css";

function Websites() {
  return (
    <>
      <Helmet>
        <title>
          Website packages | Bundles include web design, seo, and logo
        </title>
        <meta
          name="description"
          content="We are a development agency offering tailored price packages for start-ups to corporate. Our experienced team will create the perfect website for your business."
        />
        <meta
          name="keywords"
          content="unique website packages,website packages,website plans,website bundles,web design packages,website design packages,web development deals,site building deals,site creation packages,online presence packages,website solutions,website design offers"
        />
      </Helmet>
      <div className="container-fluid mt-3">
        <h1
          className="fs-3 fw-light text-center pb-4"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "7px",
            textDecorationThickness: "1px",
          }}
        >
          Website Packages
        </h1>
        <div className="container d-flex flex-lg-row flex-sm-column justify-content-evenly align-items-sm-center align-items-lg-stretch package-container">
          <div className="card mb-sm-4 package-card" style={{ width: "18rem" }}>
            <img
              src="/assets/websites/start-up-2.png"
              className="card-img-top"
              alt="Cartoon team deciding how to launch their start-up."
              width={280}
              height={186}
            />
            <div className="card-body">
              <h5 className="card-title">Start-Up $1,500</h5>
              <ul className="lh-lg">
                <li>Customized website template</li>
                <li>5 pages & 10 content images</li>
                <li>Logo design (if applicable)</li>
                <li>SEO Essentials</li>
              </ul>
              <Link to="/contact">
                <button className="btn btn-primary package-btn">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="card mb-sm-4 package-card" style={{ width: "18rem" }}>
            <img
              src="/assets/websites/semi-pro-2.png"
              className="card-img-top"
              alt="Cartoon team launching their start-up."
              width={280}
              height={186}
            />
            <div className="card-body">
              <h5 className="card-title">Semi-Pro $3,000</h5>
              <ul className="lh-lg">
                <li>Custom designed website</li>
                <li>Logo design (if applicable)</li>
                <li>8 pages & 15 content images</li>
                <li>On-page SEO & Technical SEO</li>
              </ul>
              <Link to="/contact">
                <button className="btn btn-primary package-btn">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="card mb-sm-4 package-card" style={{ width: "18rem" }}>
            <img
              src="/assets/websites/professional-2.png"
              className="card-img-top"
              alt="Professional cartoon team discussing analytics and business decisions."
              width={280}
              height={223}
            />
            <div className="card-body">
              <h5 className="card-title">Professional $5,000</h5>
              <ul>
                <li>Custom designed website</li>
                <li>12 pages & 25 content images</li>
                <li>Logo design (if applicable)</li>
                <li>On-page SEO</li>
                <li>Technical SEO</li>
                <li>Extensive keyword research</li>
                <li>SEO competition analytics</li>
              </ul>
              <Link to="/contact">
                <button className="btn btn-primary mt-2">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Websites;
