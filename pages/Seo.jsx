import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Seo.css";

function Seo() {
  return (
    <>
      <Helmet>
        <title>
          Seo services | Increase traffic & visibility to your website
        </title>
        <meta
          name="description"
          content="Get the most out of your online presence with our keyword research, content optimization, link building, and more. Contact us today to learn more!"
        />
        <meta
          name="keywords"
          content="seo agency new york,professional seo services,affordable local seo services,free seo consultation,affordable seo,local seo services,affordable seo company,affordable seo packages,affordable seo services,seo companies near me,seo services,seo services new york,small business seo services,local seo for small business,seo agency near me,search engine marketing,services seo,unique seo"
        />
      </Helmet>
      <div className="container-lg my-4 min-vh-100">
        <h1
          className="fs-3 fw-light text-center pb-3 mb-3"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            textDecorationThickness: "1px",
          }}
        >
          Seo Services
        </h1>
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img
                className="img-fluid seo-guy"
                src="/assets/seo/seo-guy-2.svg"
                alt="Cartoon man pointing up in the direction that your website traffic will climb."
                width={214}
                height={223}
              />
            </div>
            <div>
              <img
                className="img-fluid seo-gif"
                src="/assets/seo/seo-2.gif"
                alt="Animation of working services."
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
              Search Engine Optimization (SEO) is an invaluable service for
              businesses looking to increase their online visibility. SEO helps
              websites rank higher in search engine results, making them more
              likely to be seen by potential customers. SEO services can include
              keyword research, content optimization, link building, and more.
              With the help of our experienced SEO team, you can improve your
              website's ranking and reach a larger audience.{" "}
              <b>
                <span style={{ color: "red" }}>Unique</span> You
              </b>{" "}
              will help your business stay ahead of the competition by ensuring{" "}
              <Link to="/website-packages" style={{ textDecoration: "none" }}>
                your website
              </Link>{" "}
              is up-to-date with the latest trends and technologies. Investing
              in SEO services can help your business gain more customers and
              increase profits. If you're looking to take your business to the
              next level,{" "}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                contact us
              </Link>{" "}
              and ask about our SEO services today!
            </p>
            <Link to="/contact">
              <button className="btn btn-primary mt-2">Contact Us</button>
            </Link>
            <a
              href="https://angelounique-you-us-uni-key.mdbgo.io/"
              target="_blank"
            >
              {/* <button className="btn mt-2 ms-3 bg-danger text-white seo-btn">
                See our Keyword Extractor
              </button> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seo;
