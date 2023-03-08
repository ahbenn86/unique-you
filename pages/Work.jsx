import React from 'react'
import './Work.css'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <>
      <div className="bg-light mt-3 page-container">
        <div className='container-lg' >
          <div className='text-center'>
            <h2 style={{fontWeight: 'lighter'}}>View some of our previous projects</h2>
          </div>
            <div className='row my-5 align-items-center justify-content-center justify-content-around'>
              <div className='col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0'>
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{color: 'black'}}>Tournesol</h4>
                    <img src="../assets/card-1.png" class="card-img-top" alt="..."/>
                    <p className="card-text mx-5 text-muted d-none d-lg-block">Brochure website for the French Restaurant <em>Tournesol</em></p>
                    <a href="https://angelounique-you-us-tournesol.mdbgo.io/" target="_blank" className="btn btn-outline-primary btn-sm mt-3">Learn More</a>
                </div>
              </div>
              </div>
              <div className='col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0'>
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{color: 'black'}}>Electric City</h4>
                    <img src="../assets/card-2.png" class="card-img-top" alt="..."/>
                    <p className="card-text mx-5 text-muted d-none d-lg-block">Design concept for the Electronic store <em>Electric City</em>.</p>
                    <a href="https://ahbenn86.github.io/electric-city/" target="_blank" className="btn btn-outline-primary btn-sm mt-3">Learn More</a>
                </div>
              </div>
              </div>
              <div className='col-8 col-lg-4 col-xl-3 mb-sm-5 mb-lg-0'>
              <div className="card">
                <div className="card-body text-center py-4">
                  <h4 className="card-title" style={{color: 'black'}}>Checkmate</h4>
                  <img src="../assets/card-3.png" class="card-img-top" alt="..."/>
                    <p className="card-text mx-5 text-muted d-none d-lg-block">Design concept for an online payment platform <em>Checkmate</em></p>
                    <a href="https://ahbenn86.github.io/checkmate/" target="_blank" className="btn btn-outline-primary btn-sm mt-3">Learn More</a>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work