import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./About.css";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Web development and branding | New York, NY.</title>
        <meta
          name="description"
          content="We are a web development and branding agency in Long Island City, New York. We provide web development and marketing services to businesses of all sizes."
        />
        <meta
          name="keywords"
          content="unique you,professional website design,branding solutions,responsive web design,digital marketing strategies,seo optimization,user experience design,custom logo design,content management systems,social media integration,mobile app development"
        />
      </Helmet>
      <div className="container min-vh-100">
        <h1 className="fs-3 fw-light text-center">About Us</h1>
        <div className="row d-flex justify-content-center flex-lg-row flex-sm-column align-items-center about-section">
          <div className="col-md-6 mb-5">
            <img
              src="/assets/about-us_opt.svg"
              className="img-fluid ms-sm-2"
              alt="Depiction of the unique you team ready to assist you with all your web development and branding needs."
              width={332}
              height={248}
            />
          </div>
          <div className="col-md-6  d-flex flex-wrap justify-content-center about-text-container">
            <p className="p-4 shadow rounded paragraph-cms">
            <b><span style={{color: 'red'}}>Unique</span> You</b> is a web development and branding agency located in
              Long Island City, New York. Founded in 2023 by certified Full
              Stack Developer Angelo Bennett. The agency caters to entrepreneurs
              and businesses of all sizes to provide web development and
              marketing services all under one roof. <b><span style={{color: 'red'}}>Unique</span> You</b> also provides
              small grouped workshops to mentor and prepare future developers
              planning to enter the field of web and software development. You
              can find the founder{" "}
              <a
                href="https://www.linkedin.com/in/abennett2/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                here
              </a>{" "}
              on LinkedIn. Feel free to connect.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary mt-4 mb-4">Contact us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
