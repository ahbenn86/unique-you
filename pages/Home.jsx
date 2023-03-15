import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container my-5 min-vh-100 home-container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="/assets/home/red-cmp-square-1.svg"
              className="img-fluid  red-square my-5"
              alt="#"
            />
            <img
              src="/assets/home/jumping-woman.svg"
              className="img-fluid jumping-woman  mx-5"
              alt="#"
            />
          </div>
          <div className="col-sm-6 d-flex flex-column align-items-center">
            <h1 className="fs-3 fw-light text-center pb-3">
              Welcome to Unique-You!
            </h1>
            <p className="mt-4 p-4 shadow rounded paragraph-home">
              Welcome to Unique You. An agency that caters to the uniqueness of
              you! Behind every business, there's a unique individual and your
              business has specific needs and a brand that carries its own
              unique identity. Perhaps you haven't yet found that identity and
              aren't sure which direction to go, what to do, or simply looking
              for professional guidance. Maybe you have a product to sell and
              need help creating a logo? Perhaps you have a logo but you need a
              website? Maybe you have a website and you would like it to look
              better. Unique You is here to solve those problems and much more.
              We offer professional design, branding, and web development
              services to bring your unique idea 💡 to life! We also offer
              non-disclosures so you can rest assured that your product and
              discussions are safe with us.
            </p>
            <Link to="/services">
              <button className="btn btn-outline-primary mt-2" to="/services">
                See our services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
