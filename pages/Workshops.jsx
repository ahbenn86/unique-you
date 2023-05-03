import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Workshops.css';

function Workshops() {
  return (
    <>
      <Helmet>
        <title>Web development training | Experience our workshop first!</title>
        <meta
          name="description"
          content="Thinking of becoming a developer? Our intimate small-grouped workshops will teach and guide you through the fundamentals of HTML, CSS, and JavaScript."
        />
        <meta
          name="keywords"
          content="unique workshops,web development training,web development course,web development tutorials,web development classes,web development seminar,html workshop,css workshop,javascript workshop,front-end development workshop,back-end development workshop"
        />
      </Helmet>
      <div className="container-lg my-4 min-vh-100">
        <h1 className="fs-3 fw-light text-center pb-3 mb-3" style={{
            textDecoration: "underline",
            textUnderlineOffset: "7px",
            textDecorationThickness: "1px",
          }}>Our Workshops</h1>
        <div className="row">
          <div class="col-12 d-flex justify-content-evenly">       
              <video autoPlay loop muted
              src="/assets/online-learning.mp4"
              style={{width: "500px", height: "280px"}}
              alt="Woman taking part in unique you online learning web development workshop"
              ></video>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            <p className="p-4 shadow rounded paragraph-cms">
              Are you interested in learning web development and programming?
              Our intimate small-grouped workshops will teach and guide you
              through the fundamentals of HTML, CSS, and JavaScript. This
              workshop is perfect for anyone thinking of getting into the field
              of web development or software engineering. In this workshop, you
              will also learn key skill traits of the field such as
              problem-solving and error handling. By the end of this workshop,
              you will have built an entire project using all 3 languages which
              you can then present to your future Bootcamp, add to a resume or
              just show off to your friends and family. <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact us
              </Link> to
              receive the full workshop breakdown of topics covered along with our 
              workshop newsletter.
            </p>
            <Link to="/contact">
              <button className="btn btn-outline-primary mt-2" to="/services">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workshops;
