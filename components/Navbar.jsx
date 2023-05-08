import React from 'react'
import {NavLink} from 'react-router-dom'
import HeaderImage from '/assets/header/header-image-2.svg'
import '/components/Navbar.css'

function Navbar() {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container-fluid d-flex flex-lg-column justify-content-evenly">
            <img width={950} height={115} src={HeaderImage} className="img-fluid header-image" alt="unique you header logo" id='header-logo'/>
              <button className="navbar-toggler" id="toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <NavLink to="/">
      <i className="fa-solid fa-house font-home-ico" role="home page button"></i>
      </NavLink>
      <ul className="navbar-nav ms-lg-5 mt-2 mb-2 mb-lg-0 container-fluid d-flex">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/website-services" style={{color: "black"}}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/website-designs" style={{color: "black"}}>Our Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/wordpress-development" style={{color: "black"}}>Wordpress</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/seo-services" style={{color: "black"}}>SEO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logo-design" style={{color: "black"}}>Brand Design</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" style={{color: "black"}}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar