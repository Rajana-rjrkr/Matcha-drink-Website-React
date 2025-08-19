import React from 'react'

function Location() {
  return (
    <div>
      {/* About Section */}
      <div className='container-fluid' style={{ padding: "6% 10%" }}>
        <div style={{ border: "10px solid #7cb342", borderRadius: "12px" }}>
          <div className='row align-items-center '>

            <iframe
              title="Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62863.16120689629!2d76.36451087817365!3d10.021185035463226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b05035901eb%3A0xca7de6f850b3d694!2sPallikkara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1755462995265!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Text Column */}
            <div className='col-12 col-md-6 'style={{padding:"5%"}}>
              <h2 className='mb-5' style={{ color: "#1b5e20" }}>🌿 Where to find us</h2>
              <p className='fw-bold' style={{ color: "#1b5e20" }}>Address :</p>
              <p style={{ color: "#558b2f" }}>123 Serenity Lane, Sakura Plaza, Pallikkara</p>
              <p style={{ color: "#558b2f" }}>Kochi, Kerala – 682001, India</p>

              <p className='fw-bold' style={{ color: "#1b5e20" }}>Contact :</p>
              <p style={{ color: "#558b2f" }}>+91 98765 43210</p>

              <p className='fw-bold' style={{ color: "#1b5e20" }}>Opening Hours :</p>
              <p style={{ color: "#558b2f" }}>Mon - Thur : 11:00 - 19:00</p>
              <p style={{ color: "#558b2f" }}>Fri - Sun : 10:00 - 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
