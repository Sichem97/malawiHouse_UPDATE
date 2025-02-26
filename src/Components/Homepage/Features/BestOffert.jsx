import React from 'react'

function BestOffert() {
  return (
    <div>
        {/* <!-- Best offer--> */}
        <section class="section novi-background section-1 bg-primary-darker text-center" style={{backgroundColor:'hsl(270, 50%, 11%)', height:'50vh'}}>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-lg-7 col-xl-6">
                <h3 class="wow-outer">
                  <span class="wow slideInDown text-uppercase">Best offers</span>
                </h3>
                <p class="heading-subtitle">of September</p>
                <p class="wow-outer offset-top-4">
                  <span class="wow slideInDown" data-wow-delay=".05s">With a variety of accountants available at our company, you can always choose one that fits your corporate requirements.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default BestOffert