import React from 'react'
import { Link } from 'react-router'

function BreadcrumbsContact() {
  return (
    <div>
         {/* <!-- Breadcrumbs --> */}
      <section class="section novi-background breadcrumbs-custom bg-image context-dark" style={{}}>
        <div class="breadcrumbs-custom-inner">
          <div class="container breadcrumbs-custom-container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">Contacts</h6>
              <h2 class="text-uppercase breadcrumbs-custom-title">Contacts</h2>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li class="active">Contacts</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BreadcrumbsContact