/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'

function PropertyInTrends() {
  return (
    <section class="section novi-background section-md text-center">
    <div class="container">
      <h3 class="text-uppercase font-weight-bold wow-outer"><span class="wow slideInDown">Popular properties</span></h3>
      <div class="row row-lg-50 row-35 offset-top-2">
        <div class="col-md-6 wow-outer">
          {/* <!-- Post Modern--> */}

          <article class="post-modern wow slideInLeft">
            <a class="post-modern-media" href="#">
              <img src="Assets/images/grid-blog-1-571x353.jpg" alt="" width="571" height="353"/>
            </a>

            <h4 class="post-modern-title">
              <a class="post-modern-title" href="#">Mzuzu</a>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <a class="button-winona" href="#">Mkw 1.500.000</a>
              </li>
              <li>30 Sq. Ft.</li>
              <li>3 Bedrooms</li>
            </ul>
            <p>A comfortable residential property located in a quiet and cozy area.</p>
          </article>
        </div>

        <div class="col-md-6 wow-outer">
          {/* <!-- Post Modern--> */}
          <article class="post-modern wow slideInLeft">
            <a class="post-modern-media" href="#">
              <img src="Assets/images/grid-blog-2-571x353.jpg" alt="" width="571" height="353"/>
            </a>
            
            <h4 class="post-modern-title">
              <a class="post-modern-title" href="#">Area 5, Blantyre</a>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <a class="button-winona" href="#">Mkw 300.000 / Month</a>
              </li>
              <li>40 Sq. Ft.</li>
              <li>2 Bedrooms</li>
            </ul>
            <p>Perfect for those who love both city life and the countryside.</p>
          </article>
        </div>
        <div class="col-md-6 wow-outer">
          {/* <!-- Post Modern--> */}

          <article class="post-modern wow slideInLeft">
            <a class="post-modern-media" href="#">
              <img src="Assets/images/grid-blog-3-571x353.jpg" alt="" width="571" height="353"/>
            </a>

            <h4 class="post-modern-title">
              <a class="post-modern-title" href="#">Kanengo, Lilongwe</a>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <a class="button-winona" href="#">Mkw 180.000 / Month</a>
              </li>
              <li>50 Sq. Ft.</li>
              <li>4 Bedrooms</li>
            </ul>
            <p>Located in 5 mins from downtown, this property is great for anyone.</p>
          </article>
        </div>
        <div class="col-md-6 wow-outer">
          {/* <!-- Post Modern--> */}
          <article class="post-modern wow slideInLeft">
            <a class="post-modern-media" href="#">
              <img src="Assets/images/grid-blog-4-571x353.jpg" alt="" width="571" height="353"/>
            </a>
            <h4 class="post-modern-title">
              <a class="post-modern-title" href="#">Dowa, Lilongwe</a>
            </h4>
            <ul class="post-modern-meta">
              <li>
                <a class="button-winona" href="#">Mkw 2.700.000</a>
              </li>
              <li>90 Sq. Ft.</li>
              <li>2 Bedrooms</li>
            </ul>
            <p>A luxury mansion for people who enjoy the high-end amenities.</p>
          </article>
        </div>


        <div class="col-md-12 wow-outer">
          <Link class="button button-primary button-winona button-md" to="/Services">view More properties</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PropertyInTrends