import React from 'react'
import {NavLink} from 'react-router-dom'
import '/components/Navbar.css'

function Navbar() {
  return (
    <div id="my-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid d-flex flex-lg-column justify-content-evenly">
    {/* <NavLink to="/"> */}
    <img src="/assets/header-image.svg" className="img-fluid header-image" alt="unique you header logo" id='header-image'/>
    {/* </NavLink> */}
    <button className="navbar-toggler" id="toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <NavLink to="/">
      <i className="fa-solid fa-house font-home-ico"></i>
      </NavLink>
      <ul className="navbar-nav ms-lg-5 mt-2 mb-2 mb-lg-0 container-fluid d-flex">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/our-work">Our Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/squarespace">Squarespace</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/seo">SEO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/branding">Brand Design</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar