import React from "react";
import './Wordpress.css'
import { Link } from "react-router-dom";

function Wordpress() {
  return (
    <>
      <div className="container-lg my-5 min-vh-100 cms-container">
        <div className="row mb-5">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img className='img-fluid' src="/assets/wordpress-logo.svg" alt="" />
            </div>
            <div>
              <img
                className="img-fluid"
                src="/assets/cms-business-woman.png"
                alt=""
              />
            </div>
            <div>
              <img className='img-fluid' src="/assets/Squarespace-Logo.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
            {/* <div className="p-backdrop"></div> */}
           <p className="mt-4 p-4 shadow rounded paragraph-cms">
           Do you have a WordPress site that you need help designing? We can create the perfect WordPress website for you that will allow you to later edit as you see fit. Utilizing the latest plugins and templates to deliver a beautifully crafted website with a touch of custom flair. We also offer original customization from start to finish to display the <Link to="/contact" style={{textDecoration: 'none'}}>uniqueness</Link> of you and your business.
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
export default Wordpress;