import React from 'react'

function WhoWeAre() {
  return ( 
    <div>
    {/* Who We Are */}
      <section class="section novi-background section-lg" style={{}}>
        <div class="container">
          <div class="row row-50 justify-content-center justify-content-lg-between flex-lg-row-reverse">
            <div class="col-md-10 col-lg-6 col-xl-5">
            <h3 class="text-uppercase">Who We Are</h3> <hr />
            <p style={{textAlign:'justify'}}>Malawi Houses is your one-stop solution for all real estate needs in Malawi. Whether you're looking to buy, sell, or rent properties, we've got you covered. Our services extend beyond just transactions; we also offer property insurance, management, relocation, renovation, and maintenance. Our mission is to make your real estate journey seamless and enjoyable.</p>
              <br />
            <h3 class="text-uppercase">Mission</h3> <hr />
            <p id='p' style={{textAlign:'justify'}}>Making properties transactions and management frictionless and secure. We strive to provide a comprehensive suite of services that empower our clients to achieve their real estate goals efficiently and effectively.</p>
            </div>
            <div class="col-md-10 col-lg-6 col-xl-6">
              <img class="img-responsive" src="Assets/images/assets/Logo/logo2.png" alt="" style={{width:"570px",height:"388px"}}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre