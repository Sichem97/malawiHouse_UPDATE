/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'
import './footer.css'

function Footer() {
  return (
    <section className='footerSection'>
      <footer class="footerSection novi-background footer-advanced bg-gray-700">
        <div class="footer-advanced-main">
          <div class="container">
            <div class="row row-50">

              <div class="col-lg-4">
                <h5 class="font-weight-bold text-uppercase text-white">About Us</h5>
                <p class="footer-advanced-text">malawiHouses is the largest full-service real estate and property management company.</p>
              </div>

              <div class="col-sm-7 col-md-5 col-lg-4">
                <h5 class="font-weight-bold text-uppercase text-white">Recent Blog Posts</h5>
                {/* Post Inline */}
                <article class="post-inline">
                  <p class="post-inline-title"><Link>Real Estate Guide: 7 Important Tips for Buying a Home</Link></p>
                  <ul class="post-inline-meta">
                    <li>by Sichem Mulumba</li>
                    <li><Link>2 days ago</Link></li>
                  </ul>
                </article>
              </div>

              <div class="col-sm-7 col-md-5 col-lg-4">
              <h5 class="font-weight-bold text-uppercase text-white">Open Hours</h5>
              {/* Post Inline */}
              <article class="post-inline">
                <p class="post-inline-title"><Link>Monday - Friday</Link></p>
                <ul class="post-inline-meta">
                  <li>8 AM - 4 PM</li>
                </ul>
                
                <p class="post-inline-title"><Link>Saterday</Link></p>
                <ul class="post-inline-meta">
                  <li>8 AM - 12 PM</li>
                </ul>
              </article>
              </div>


            </div>
          </div>
        </div>

        <div class="footer-advanced-aside">
          <div class="container">
            <div class="footer-advanced-layout">
              <div>
              <a class="brand" href="index.html">
              <img src="Assets/images/assets/Logo/logo2.png" alt="" width="115" height="34" srcset="Assets/images/assets/Logo/logo2.png"/>
              </a> <br />
              <ul class="foter-social-links list-inline list-inline-md">
                <li><Link class="icon novi-icon icon-sm link-default mdi mdi-facebook"></Link></li>
                <li><Link class="icon novi-icon icon-sm link-default mdi mdi-twitter"></Link></li>
                {/* <li><a class="icon novi-icon icon-sm link-default mdi mdi-instagram" href=""></a></li> */}
                {/* <li><a class="icon novi-icon icon-sm link-default mdi mdi-google" href=""></a></li> */}
                <li><Link class="icon novi-icon icon-sm link-default mdi mdi-linkedin"></Link></li>
              </ul>
              </div>
              <div>
                {/* <!-- Rights--> */}
              <p class="rights">© {new Date().getFullYear()}. All Rights Reserved. Design by <Link>Pillar of Africa</Link></p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer