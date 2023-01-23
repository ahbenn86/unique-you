import React from 'react'
import '/components/Navbar.css'

function Navbar() {
  return (
    <div id="my-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid d-flex flex-lg-column justify-content-evenly">
    <img src="/assets/header-image.svg" className="img-fluid header-image" alt="#" id='header-image'/>
    <button className="navbar-toggler" id="toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid d-flex justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Squarespace</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SEO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brand Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar