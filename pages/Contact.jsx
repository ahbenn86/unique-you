import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="container vh-100">
        <h3 className="text-center text-muted pt-4 lh-2">
          How can we help your business ?
        </h3>
        <div className="mx-auto contact-form-container shadow-sm rounded p-4 fs-5 text-muted">
          <form action="https://formsubmit.co/14aa5b3b47339c397339ab7b23cf47eb" method="POST">
            {/* Honeypot */}
            <input type="text" name="_honey" style={{display: "none"}}/>
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="http://unique-you.us/success"/>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full name
              </label>
              <input type="text" name="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Contact number
              </label>
              <input type="tel" name="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                required
              />
              <div id="emailHelp" className="form-text fs-6">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2" htmlFor="time">
                When can we reach you?
              </label>
              <select
                className="form-select"
                id="time"
                aria-label="Best time to contact"
                name="select"
              >
                <option value="M">Morning</option>
                <option value="A">Afternoon</option>
                <option value="E">Evening</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="mb-3" htmlFor="query">
                What would you like to ask us?
              </label>
              <textarea
                placeholder="Type message here"
                className="form-control"
                name="message"
                id="query"
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="contact-btn btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
