import "./Home.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Unique You | Website and Brand Development | New York, NY.
        </title>
        <meta
          name="description"
          content="We specialize in custom website development, logo design & SEO services. We'll create a unique online presence that will drive traffic and increase visibility."
        />
        <meta
          name="keywords"
          content="custom website development,custom website development services,ecommerce website development agency,web design company near me,web design company new york,web design new york,web development companies,web development new york,website design and development,website developers near me,website development agency,website development new york,website development new york,unique website development"
        />
      </Helmet>
      <div className="container my-5 min-vh-100 home-container">
        <div className="row">
          <div className="col-sm-6">
            <img
              width={327}
              height={312}
              src="/assets/home/red-cmp-square-1.svg"
              className="img-fluid  red-square my-5"
              alt=""
            />
            <img
              width={227}
              height={379}
              src="/assets/home/jumping-woman.svg"
              className="img-fluid jumping-woman  mx-5"
              alt="Excited cartoon woman jumping in the air happy that she found the unique you website."
            />
          </div>
          <div className="col-sm-6 d-flex flex-column align-items-center">
            <h1 className="fs-2 fw-light text-center pb-3">
              Welcome to Unique-You!
            </h1>
            <h2 className="fs-5 fw-light text-center">Excelling your web development and branding needs</h2>
            <p className="mt-4 p-4 shadow rounded paragraph-home">
              <b>
                <span style={{ color: "red" }}>Unique</span> You
              </b> is an agency that caters to the uniqueness of you and your business. Behind every
              business, there's a unique individual and your business has
              specific needs and a brand that carries its own unique identity.
              Perhaps you haven't yet found that identity and aren't sure which
              direction to go, what to do, or simply looking for professional
              guidance. Maybe you have a product to sell and need help creating
              a logo. Perhaps you have a logo but you need a website? Maybe you
              have a website and you would like it to look better.{" "}
              <b>
                <span style={{ color: "red" }}>Unique</span> You
              </b>{" "}
              is here to solve those problems and much more. We offer
              professional design, branding, and web development services to
              bring your unique idea 💡 to life! We also offer non-disclosures
              so you can rest assured that your product and discussions are safe
              with us.
            </p>
            <Link to="/website-services">
              <button className="btn btn-primary mt-2" to="/services">
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
