import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Seo.css";

function Seo() {
  return (
    <>
      <Helmet>
        <title>SEO | Web Development | New York, NY.</title>
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
        <h1 className="fs-3 fw-light text-center pb-3 mb-3">SEO</h1>
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid seo-guy"
                src="/assets/seo/SEO-guy.svg"
                alt=""
                width={214}
                height={223}
              />
            </div>
            <div>
              <img
                className="img-fluid seo-gif"
                src="/assets/seo/SEO.gif"
                alt=""
                width={500}
                height={342}
                style={{ width: "350px", height: "217.75px" }}
              />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <p className="p-4 shadow rounded paragraph-cms">
            Search Engine Optimization (SEO) is an invaluable service for businesses looking to increase their online visibility. SEO helps websites rank higher in search engine results, making them more likely to be seen by potential customers. SEO services can include keyword research, content optimization, link building, and more. With the help of our experienced SEO team, you can improve your website's ranking and reach a larger audience. <b><span style={{color: 'red'}}>Unique</span> You</b> will help your business stay ahead of the competition by ensuring your website is up-to-date with the latest trends and technologies. Investing in SEO services can help your business gain more customers and increase profits. If you're looking to take your business to the next level, contact us and ask about our SEO services today!
            </p>
            <Link to="/contact">
              <button className="btn btn-outline-primary mt-2" to="/services">
                Contact Us
              </button>
            </Link>
            <a href="https://angelounique-you-us-uni-key.mdbgo.io/" target="_blank">
              <button className="btn mt-2 ms-3 bg-danger text-white seo-btn" to="/services">
                See our Keyword Extractor
                </button>
              </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seo;
