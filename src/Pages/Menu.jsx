import React from 'react'

function Menu() {
  return (
    <div>
      {/* Menu Section */}
      <div className='container-fluid' style={{ padding: "3% 10%" }}>
        <div style={{ border: "10px solid #7cb342", borderRadius: "12px" }}>
          <div className='row align-items-center '>

            {/* Image Column */}
            <div className='col-12 col-md-6'>
              <img src="https://matchamochicafe.com/cdn/shop/files/menu_heic.webp?v=1743093371&width=750" alt="matcha" style={{ width: "100%", height: "auto", border: "5px solid #7cb342" }}
              />
            </div>

            {/* Text Column */}
            <div className='col-12 col-md-6 p-4'>
              <h2 className='mb-5' style={{ color: "#1b5e20" }}>🍵 Our Matcha Menu</h2>

              <p style={{ color: "#558b2f" }}>Discover the art of matcha in every sip. From creamy Matcha Lattes to refreshing Iced Matcha Coolers, each drink is made with ceremonial-grade green tea, whisked to perfection.</p>
              <p style={{ color: "#558b2f" }}>Indulge in classic favorites or explore modern twists like Matcha Lemonade and Vanilla Matcha Frappe – crafted to energize your day, calm your mind, and delight your taste buds.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <h1 className="" style={{ color: "#1b5e20" }}>Menu</h1>
        <div
          className="mx-auto my-3"
          style={{ width: "100px", height: "4px", backgroundColor: "#7cb342" }}
        ></div>

        <div className="row mt-5">
          {/* Breakfast & Starts */}
          <div className="col-md-6 mb-5">
            <h2 className="h3" style={{ color: "#1b5e20" }}>Matcha Drinks</h2>
            <div
              className="mx-auto my-3"
              style={{ width: "100px", height: "4px", backgroundColor: "#7cb342" }}
            ></div>

            {/* Menu Item 1 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Classic Matcha Latte</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 320</span>
              </div>
              <p className=" small mt-2" style={{ color: "#558b2f" }}>
                Smooth Japanese matcha whisked with milk, lightly sweetened.
              </p>
            </div>

            {/* Menu Item 2 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Iced Matcha Lemonade</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 280</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Refreshing lemonade blended with matcha for a citrusy twist.
              </p>
            </div>

            {/* Menu Item 3 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Vanilla Matcha Frappe</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 350</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Creamy vanilla frappe infused with premium matcha powder.
              </p>
            </div>

            {/* Menu Item 4 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Coconut Matcha Latte</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 370</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                A tropical blend of matcha with coconut milk, served hot or iced.
              </p>
            </div>

            {/* Menu Item 5 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Strawberry Matcha</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 400</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Layered strawberry purée with creamy matcha milk.
              </p>
            </div>

            {/* Menu Item 6 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Matcha Espresso Fusion</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 450</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Layered matcha latte topped with a shot of espresso.</p>
            </div>


          </div>

          {/* Main Course */}
          <div className="col-md-6 mb-5">
            <h2 className="h3" style={{ color: "#1b5e20" }}>Main Course</h2>
            <div
              className="mx-auto my-3"
              style={{ width: "100px", height: "4px", backgroundColor: "#7cb342" }}
            ></div>

            {/* Menu Item 1 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Matcha Mochi</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 250</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Chewy rice cakes dusted with matcha powder.
              </p>
            </div>

            {/* Menu Item 2 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Japanese Cheesecake</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 400</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Light and fluffy cheesecake to balance the matcha flavor.</p>
            </div>

            {/* Menu Item 3 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Almond Biscotti</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 180</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Crunchy biscotti, perfect for dipping into matcha lattes.</p>
            </div>

            {/* Menu Item 4 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Taiyaki</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 320</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Fish-shaped pastry filled with custard or red bean paste.</p>
            </div>

            {/* Menu Item 5 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Fruit Tart</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 350</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Fresh seasonal fruits with custard base.</p>
            </div>
            {/* Menu Item 6 */}
            <div className="mt-4 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0" style={{ color: "#2e7d32" }}>Dorayaki</h5>
                <span className="fw-bold" style={{ color: "#558b2f" }}>₨ 280</span>
              </div>
              <p className="small mt-2" style={{ color: "#558b2f" }}>
                Soft pancakes filled with sweet red bean paste.</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Menu
