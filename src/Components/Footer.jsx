import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import Button from '@mui/material/Button';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="container-fluid p-4 text-white" style={{ backgroundColor: "#7cb342" }}>
        <div className="row gy-4">

          {/* Brand Section */}
          <div className="col-12 col-md-4" style={{ fontFamily: "Libertinus Sans" }}>
            <h1>The Green Whisk</h1>
            <p>🌿 The Green Whisk – Serving authentic matcha drinks crafted with care.
              A sip of wellness, mindfulness, and natural energy in every cup.
              Blending ancient Japanese tradition with modern flavors you’ll love.
              Your daily dose of calm, focus, and green goodness.</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4">
            <h1>Quick Links</h1>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Menu</li>
              <li>Location</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-4">
            <h1>Contact Us</h1>
            <form>
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-stretch">
                <input
                  type="text"
                  className="form-control mb-2 mb-sm-0 me-sm-2"
                  placeholder="Enter Your Email"
                />
                <Button variant="outlined" className="text-light" style={{ borderColor: "white" }}>
                  Send
                </Button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="d-flex justify-content-start justify-content-sm-between align-items-center mt-4 gap-3">
              <IoLogoFacebook className="fs-3" />
              <AiFillInstagram className="fs-3" />
              <FaLinkedin className="fs-3" />
              <FaSquareXTwitter className="fs-3" />
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Footer
