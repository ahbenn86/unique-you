import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='container'>
      <div className='row d-flex align-items-center'>
        <div className='col-md-6'>
        <img src="/assets/under-construction.svg" className="img-fluid" style={{height: "40rem", width: "40rem" }} alt="" title='#' />
        </div>
        <div className='col-md-6'>
        <p>This page is under construction. More about us and who we are coming soon. In the meantime send us a message. Thank you!</p>
        <Link to="/contact">
        <button className='btn btn-primary'>Contact us</button>
        </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default About