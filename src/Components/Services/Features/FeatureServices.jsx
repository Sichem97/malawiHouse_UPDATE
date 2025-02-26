import React from 'react'
import '../css/services.css'
import { Link } from 'react-router'

function Feature() {
   
  return (
    <div className="">
      <section class="section novi-background section-lg bg-gray-100 our-services">

        <div class="container">
          <div class="row row-30">

            <div class="col-sm-6 col-lg-4 wow-outer">  
              {/* <!-- Box Minimal--> */}
              <Link to=''>
              <article class="item box-minimal">
                <div class="box-minimal-main wow-outer">
                  <div className='showed-content'>
                  <h4 class="box-minimal-title wow slideInDown">Posting Services</h4>
                  </div>
                  <div className='hidden-content'>
                    <p class="wow fadeInUpSmall">Our team assist you to post easily our product</p>
                  </div>
                </div>
              </article>
              </Link>
            </div>

            <div class="col-sm-6 col-lg-4 wow-outer">
              {/* <!-- Box Minimal--> */}
              <Link to='/PostProduct'>
                <article class="item box-minimal">
                  <div class="box-minimal-main wow-outer">
                    <div className='showed-content'>
                      <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".1s">Renting Services</h4>
                    </div>
                    <div className='hidden-content'>
                      <p class="wow fadeInUpSmall" data-wow-delay=".1s">We offer you the best choice of renting properties throughout Malawi.</p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            <div class="col-sm-6 col-lg-4 wow-outer">
              {/* <!-- Box Minimal--> */}
              <Link to='/ForSale'>
                <article class="item box-minimal">
                  <div class="box-minimal-main wow-outer">
                    <div className='showed-content'>
                      <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".2s">Selling Services</h4>
                    </div>
                    <div className='hidden-content'>
                      <p class="wow fadeInUpSmall" data-wow-delay=".2s">We offer from our realtors, 100% guaranteed properties for sale throughout Malawi.</p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature