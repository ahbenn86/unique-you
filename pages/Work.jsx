import React from "react";
import "./Work.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Work() {
  return (
    <>
      <Helmet>
        <title>Web designs | Examples of our website development projects</title>
        <meta
          name="description"
          content="View some of our previous projects. From restaurants and retail to e-commerce. We can build, design, or enhance any website for any industry."
        />
        <meta
          name="keywords"
          content="web designs,web development portfolio,web design portfolio,logo design portfolio,squarespace portfolio,wordpress design portfolio,unique website design,restaurant website design,ecommerce website design,wellness website design"
        />
      </Helmet>
      <div className="bg-light mt-3 page-container">
        <div className="container-lg">
          <div className="text-center">
            <h1 className="fs-2 fw-light text-center">
              View some of our previous web designs
            </h1>
          </div>
          <div className="row my-4 align-items-center justify-content-center justify-content-around">
            <div className="col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0 card-col">
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{ color: "black" }}>
                    Tournesol
                  </h4>
                  <img
                    src="../assets/work/card-1_2.png"
                    className="card-img-top"
                    alt="A brand logo image for the French restaurant Tournesol. A website project developed by unique you."
                    width={300}
                    height={300}
                  />
                  <p className="card-text mx-5 text-muted d-none d-lg-block">
                    Brochure website for the French Restaurant{" "}
                    <em>Tournesol</em>
                  </p>
                  <a
                    href="https://angelounique-you-us-tournesol.mdbgo.io/"
                    target="_blank"
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0 card-col">
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{ color: "black" }}>
                    Electric City
                  </h4>
                  <img
                    src="../assets/work/card-2_2.png"
                    className="card-img-top"
                    alt="A brand logo image for a retail store. A website project developed by unique you."
                    width={300}
                    height={300}
                  />
                  <p className="card-text mx-5 text-muted d-none d-lg-block">
                    Design concept for the Electronic store{" "}
                    <em>Electric City</em>.
                  </p>
                  <a
                    href="https://ahbenn86.github.io/electric-city/"
                    target="_blank"
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0 card-col">
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{ color: "black" }}>
                    Checkmate
                  </h4>
                  <img
                    src="../assets/work/card-3_2.png"
                    className="card-img-top"
                    alt="A brand logo image for a digital wallet platform titled Checkmate."
                    width={300}
                    height={300}
                  />
                  <p className="card-text mx-5 text-muted d-none d-lg-block">
                    Design concept for an online payment platform{" "}
                    <em>Checkmate</em>
                  </p>
                  <a
                    href="https://ahbenn86.github.io/checkmate/"
                    target="_blank"
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
