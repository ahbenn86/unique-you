import React from 'react'

function Success() {
    return (
      <>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6'>
          <img src="/assets/success.svg" className="img-fluid" style={{height: "40rem", width: "40rem" }} alt="" />
          </div>
          <div className='col-md-6'>
          <p><h2>Congratulations!</h2> You've taken the first step to improving your business. Your message has been received and we will respond very soon.</p>
          </div>
        </div>
      </div>
      </>
    )
  }

export default Success