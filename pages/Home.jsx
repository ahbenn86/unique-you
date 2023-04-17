import "./Home.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <Helmet>
        <title>Unique You | Website and Brand Development | New York, NY.</title>
        <meta name="description" content="We provide website development, branding, logo design & SEO services. Contact us for a free web analysis report."/>
        <meta name="keywords" content="Squarespace, Wordpress, Website, Development, SEO, Logo, Brand, Design, Workshops"/>
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
              alt="Excited cartoon woman jumping in the air happy that she found the unique you website"
            />
          </div>
          <div className="col-sm-6 d-flex flex-column align-items-center">
            <h1 className="fs-3 fw-light text-center pb-3">
              Welcome to Unique-You!
            </h1>
            <p className="mt-4 p-4 shadow rounded paragraph-home">
              Welcome to <b><span style={{color: 'red'}}>Unique</span> You</b>. An agency that caters to the uniqueness of
              you! Behind every business, there's a unique individual and your
              business has specific needs and a brand that carries its own
              unique identity. Perhaps you haven't yet found that identity and
              aren't sure which direction to go, what to do, or simply looking
              for professional guidance. Maybe you have a product to sell and
              need help creating a logo? Perhaps you have a logo but you need a
              website? Maybe you have a website and you would like it to look
              better. <b><span style={{color: 'red'}}>Unique</span> You</b> is here to solve those problems and much more.
              We offer professional design, branding, and web development
              services to bring your unique idea 💡 to life! We also offer
              non-disclosures so you can rest assured that your product and
              discussions are safe with us.
            </p>
            <Link to="/services">
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
