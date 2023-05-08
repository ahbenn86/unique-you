import React from "react";
import "./Wordpress.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Wordpress() {
  return (
    <>
      <Helmet>
        <title>
          WordPress Developer | Get your unique and customized website
        </title>
        <meta
          name="description"
          content="We can build you a custom WordPress or Squarespace website and teach you how to later change, edit, and add content to your site yourself."
        />
        <meta
          name="keywords"
          content="wordpress website development,wordpress website development company,wordpress website developer,wordpress website development services,wordpress website design and development,wordpress website developers,wordpress website development agency,squarespace developer,squarespace website designer,wordpress designer,wordpress development services,wordpress website designer,hire wordpress developer,wordpress web designer,unique wordpress,unique squarespace"
        />
      </Helmet>
      <h1
        className="fs-4 fw-light text-center"
        style={{
          textDecoration: "underline",
          textUnderlineOffset: "5px",
          textDecorationThickness: "1px",
        }}
      >
        WordPress Development
      </h1>
      <div className="container-lg my-5 min-vh-100 cms-container">
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid"
                src="/assets/wordpress/wordpress-logo.png"
                alt="wordpress logo"
                width={350}
                height={197}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/wordpress/business-woman.png"
                alt="Woman showing you the different cms options of wordpress or squarespace."
                width={140}
                height={272}
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/wordpress/squarespace-logo.png"
                alt="squarespace logo"
                width={340}
                height={192}
              />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center section-2-wordpress">
            <p className="p-4 shadow rounded paragraph-cms">
              Do you have a WordPress site that you need help designing? We can
              create the perfect WordPress website for you that will allow you
              to later edit as you see fit. Utilizing the latest plugins and
              templates to deliver a beautifully crafted website with a touch of
              custom flair. We also offer{" "}
              <Link to="/website-packages" style={{ textDecoration: "none" }}>
                original customization
              </Link>{" "}
              from start to finish to display the uniqueness of you and your
              business.
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
export default Wordpress;
