import React from 'react'
import './header.css'
import { Link } from 'react-router'


function Header() {
  return (
      <header class="section novi-background page-header">

        {/* <!-- RD Navbar--> */}
        <div class="rd-navbar-wrap">

          <nav class="rd-navbar rd-navbar-corporate" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-lg-stick-up="true" data-lg-stick-up-offset="118px" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xl-stick-up="true" data-xl-stick-up-offset="118px" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-stick-up-offset="118px" data-xxl-stick-up="true">

            <div class="rd-navbar-aside-outer">
              <div class="rd-navbar-aside">
                {/* <!-- RD Navbar Panel--> */}
                <div class="rd-navbar-panel">
                  {/* <!-- RD Navbar Toggle--> */}
                  <button class="rd-navbar-toggle" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"><span></span></button>
                  {/* <!-- RD Navbar Brand--> */}
                  <Link class="rd-navbar-brand" to="/">
                    <img src="Assets/Logo/logo2.png" alt="logo_picture" width="90" height="44" srcset="Assets/Logo/logo2.png 2x"/>
                  </Link>
                </div>
                <div class="rd-navbar-collapse">

                  <button class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle="#rd-navbar-collapse-content-1">
                    <span></span>
                  </button>

                  <div class="rd-navbar-collapse-content" id="rd-navbar-collapse-content-1">
                    <article class="unit align-items-center">

                      <div class="unit-left">
                        {/* <span class="icon novi-icon icon-md icon-modern mdi mdi-phone"></span> */}
                      </div>
                      
                      <div class="unit-body">
                        <ul class="list-0">
                          <li><Link class="link-default">1-800-1234-567</Link></li>
                        </ul>
                      </div>
                    </article>

                    <article class="unit align-items-center">
                      <div class="unit-left">
                        {/* <span class="icon novi-icon icon-md icon-modern mdi mdi-map-marker"></span> */}
                      </div>

                      <div class="unit-body">
                        <Link class="link-default">2130 Devil Street Lilongo, Malawi</Link>
                      </div>
                    </article>
                    {/* <a class="button button-gray-bordered button-winona" href="#">Request a call</a> */}
                  </div>
                </div>
              </div>
            </div>

            <div class="rd-navbar-main-outer">
              <div class="rd-navbar-main">
                <div class="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-1">
                  {/* <!-- RD Navbar Nav--> */}
                  <ul class="rd-navbar-nav">
                    <li class="rd-nav-item active"><Link class="rd-nav-link" to="/">Home</Link>
                    </li>
                    <li class="rd-nav-item"><Link class="rd-nav-link" to="/Services">Services</Link>
                    </li>
                    <li class="rd-nav-item"><Link class="rd-nav-link" to="/Blog">Blog</Link>
                    </li>
                    <li class="rd-nav-item"><Link class="rd-nav-link" to="/About">About Us</Link>
                    </li>
                    <li class="rd-nav-item"><Link class="rd-nav-link" to="/Contacts">Contacts</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </header>
  )
}

export default Header