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
            <Link class="post-modern-media">
              <img src="Assets/images/grid-blog-1-571x353.jpg" alt="" width="571" height="353"/>
            </Link>

            <h4 class="post-modern-title">
              <Link class="post-modern-title">Mzuzu</Link>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <Link class="button-winona">Mkw 1.500.000</Link>
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
            <Link class="post-modern-media">
              <img src="Assets/Home_pub/house(4).png" alt="" width="571" height="353"/>
            </Link>
            
            <h4 class="post-modern-title">
              <Link class="post-modern-title">Area 5, Blantyre</Link>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <Link class="button-winona">Mkw 300.000 / Month</Link>
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
            <Link class="post-modern-media">
              <img src="Assets/Home_pub/house(4).png" alt="" width="571" height="353"/>
            </Link>

            <h4 class="post-modern-title">
              <Link class="post-modern-title">Kanengo, Lilongwe</Link>
            </h4>
            
            <ul class="post-modern-meta">
              <li>
                <Link class="button-winona">Mkw 180.000 / Month</Link>
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
            <Link class="post-modern-media">
              <img src="Assets/Home_pub/house(4).png" alt="" width="571" height="353"/>
            </Link>
            <h4 class="post-modern-title">
              <Link class="post-modern-title">Dowa, Lilongwe</Link>
            </h4>
            <ul class="post-modern-meta">
              <li>
                <Link class="button-winona">Mkw 2.700.000</Link>
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