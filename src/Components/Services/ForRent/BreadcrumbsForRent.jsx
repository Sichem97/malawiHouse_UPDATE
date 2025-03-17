import React from 'react'
import { Link } from 'react-router'

function BreadcrumbsForRent() {
  return (
    <div>
              {/* Breadcrumbs  */}
      <section class="section novi-background breadcrumbs-custom bg-image context-dark" style={{}}>
        <div class="breadcrumbs-custom-inner">
          <div class="container breadcrumbs-custom-container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Services</h6>
              <h2 class="text-uppercase breadcrumbs-custom-title">For Rent</h2>
            </div>

            <ul class="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li class="active">Services</li>
              <li class="active">For Rent</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BreadcrumbsForRent