import React from 'react'
import { Link } from 'react-router-dom'

function Branding() {
  return (
    <>
    <div className="container-lg my-4 min-vh-100 cms-container">
        <div className="row mb-5">
          <div class="col-12 d-flex justify-content-evenly">
            <div>
              <img className='img-fluid' src="/assets/logos/woman-idea.svg" alt="" />
            </div>
            <div>
              <img className='img-fluid' src="/assets/logos/bugsy-logo_3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row paragraph-row">
          <div class="col-12 d-flex flex-wrap justify-content-center">
           <p className="mt-4 p-4 shadow rounded paragraph-cms">
           Do you need a logo for your business? Our agency offers comprehensive branding and logo design services. We specialize in creating unique, memorable logos that capture the essence of your business. Our experienced team of designers will work with you to develop a logo that reflects your company's values and mission. Our goal is to help you create a strong, recognizable brand that stands out from the competition.
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
  )
}

export default Branding