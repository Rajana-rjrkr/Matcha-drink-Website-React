import React from 'react'
import bgImage from '../assets/Media/matcha3.jpg'
function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className='container-fluid First' style={{ width: "100%", overflow: "hidden", minHeight: "100vh", backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center", color: "white", position: "relative" }}>
        {/* Overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }} />
        <h1 className='text-center' style={{ position: "relative", zIndex: 2, fontSize: "clamp(2rem, 5vw, 4rem)" }}>The Green Whisk</h1>
      </div>

      {/* About Section */}
      <div className='container-fluid' style={{ padding: "6% 10%" }}>
        <div style={{ border: "10px solid #7cb342", borderRadius: "12px" }}>
          <div className='row align-items-center '>

            {/* Image Column */}
            <div className='col-12 col-md-6'>
              <img src="https://matchamochicafe.com/cdn/shop/files/DSCF1943.webp?v=1743676579&width=750" alt="matcha" style={{ width: "100%", height: "auto", border: "5px solid #7cb342" }}
              />
            </div>

            {/* Text Column */}
            <div className='col-12 col-md-6 p-4'>
              <h2 className='mb-5' style={{ color: "#1b5e20" }}>🌿 About Us</h2>
              <p className='fw-bold' style={{ color: "#1b5e20" }}>Welcome to The Green Whisk – Sip the Green Goodness</p>
              <p style={{ color: "#558b2f" }}>At The Green Whisk, we believe every cup tells a story. Our journey began with asimple passion: sharing the ancient Japanese tradition of matcha with today’sworld. Handpicked from the lush tea gardens of Uji, Kyoto, our ceremonial-gradematcha brings you purity, balance, and a boost of natural energy.</p>
              <p style={{ color: "#558b2f" }}>We’re more than just a drink shop — we’re a community for those who seek wellness,mindfulness, and a moment of calm in the middle of busy days. Every sip is craftedwith care, blending modern flavors with the timeless essence of green tea.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage