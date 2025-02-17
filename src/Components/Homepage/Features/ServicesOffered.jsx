/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'

function ServicesOffered() {
  return (
    <div>
              {/* Services */}
    <section class="section novi-background section-lg text-center">
    <div class="container">
      <h3 class="text-uppercase">Services We Offer</h3>
      <p><span class="text-width-1">At our agency, we work with various types of services. You can find out more about our properties by browsing our website.</span></p>
      <div class="row row-35 row-xxl-70 offset-top-2">
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-1-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Insurance</Link></h4>
          </article>
        </div>
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-2-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Maintenance</Link></h4>
          </article>
        </div>
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-3-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Negociation</Link></h4>
          </article>
        </div>
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-4-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Management</Link></h4>
          </article>
        </div>
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-4-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Relocation</Link></h4>
          </article>
        </div>
        <div class="col-sm-6 col-lg-3">
           {/* Thumbnail Light */}
          <article class="thumbnail-light"><Link class="thumbnail-light-media" ><img class="thumbnail-light-image" src="Assets/images/service-thumbnail-4-270x300.jpg" alt="" width="270" height="300"/></Link>
            <h4 class="thumbnail-light-title"><Link >Renovation</Link></h4>
          </article>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default ServicesOffered