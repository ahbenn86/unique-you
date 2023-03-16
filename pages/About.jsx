import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <>
    <div className='container min-vh-100'>
      <div className='row d-flex justify-content-center flex-lg-row flex-sm-column align-items-center about-section'>
        <div className='col-md-6 mb-5'>
        <img src="/assets/about-us_opt.svg" className="img-fluid ms-sm-2"  alt="" title='#' />
        </div>
        <div className='col-md-6 mt-5 d-flex flex-wrap justify-content-center about-text-container'>
        <p className=''>Unique-You is a web development and branding agency located in Long Island City, New York. Founded in 2023 by certified Full Stack Developer Angelo Bennett. The agency caters to entrepreneurs and businesses of all sizes to provide web development and marketing services all under one roof. Unique-You also provides small grouped workshops to mentor and prepare future developers planning to enter the field of web and software development. You can find the founder <a href='https://www.linkedin.com/in/abennett2/' target="_blank" style={{textDecoration: 'none'}}>here</a> on LinkedIn. Feel free to connect.</p>
        <Link to="/contact">
        <button className='btn btn-primary mt-4'>Contact us</button>
        </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default About