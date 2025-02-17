import React from 'react'

function Feature() {
  return (
    <section class="section novi-background section-lg bg-gray-100">
    <div class="container">
      <div class="row row-30">
        <div class="col-sm-6 col-lg-4 wow-outer">
          
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-chloe__icon novi-icon linearicons-user wow fadeIn"></div>
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown">Qualified Employees</h4>
              <p class="wow fadeInUpSmall">Our team consists of more than 20 qualified and experienced real estate brokers and property managers ready to help you.</p>
            </div>
          </article>
        </div>
        <div class="col-sm-6 col-lg-4 wow-outer">
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-chloe__icon novi-icon linearicons-bubble-text wow fadeIn" data-wow-delay=".1s"></div>
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".1s">Free Consultations</h4>
              <p class="wow fadeInUpSmall" data-wow-delay=".1s">Our acquaintance with a client always begins with a free consultation to find out what kind of property they are looking for.</p>
            </div>
          </article>
        </div>
        <div class="col-sm-6 col-lg-4 wow-outer">
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-chloe__icon novi-icon linearicons-star wow fadeIn" data-wow-delay=".2s"></div>
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".2s">100% Guaranteed</h4>
              <p class="wow fadeInUpSmall" data-wow-delay=".2s">All the results that you get from our realtors are 100% guaranteed to offer you the best choice of properties throughout Malawi.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feature