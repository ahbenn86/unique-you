import React from "react";
import "./Wordpress.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Wordpress() {
  return (
    <>
      <Helmet>
        <title>
          Wordpress and Squarespace | Web Development | New York, NY.
        </title>
        <meta
          name="description"
          content="We can build you a custom WordPress or Squarespace website and teach you how to later change, edit, and add content to your site yourself."
        />
        <meta
          name="keywords"
          content="Wordpress, Squarespace, Unique, Website, Development"
        />
      </Helmet>
      <div className="container-lg my-5 min-vh-100 cms-container">
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid"
                src="/assets/wordpress-logo.svg"
                alt="wordpress logo"
                width={350}
                height={197}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/cms-business-woman.png"
                alt="Woman showing you the different cms options of wordpress or squarespace"
                width={140}
                height={272}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/Squarespace-Logo.svg"
                alt="squarespace logo"
                width={340}
                height={192}
              />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <p className="p-4 shadow rounded paragraph-cms">
              Do you have a WordPress site that you need help designing? We can
              create the perfect WordPress website for you that will allow you
              to later edit as you see fit. Utilizing the latest plugins and
              templates to deliver a beautifully crafted website with a touch of
              custom flair. We also offer original customization from start to
              finish to display the{" "}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                uniqueness of you
              </Link>{" "}
               and your business.
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
export default Wordpress;
