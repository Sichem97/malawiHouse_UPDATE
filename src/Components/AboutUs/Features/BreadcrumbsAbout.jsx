import React from 'react'

function BreadcrumbsAbout() {
  return (
    <div>
        {/* <!-- Breadcrumbs --> */}
      <section class="section novi-background breadcrumbs-custom bg-image context-dark" style={{}}>
        <div class="breadcrumbs-custom-inner">
          <div class="container breadcrumbs-custom-container">
            <div class="breadcrumbs-custom-main">
              <h6 class="breadcrumbs-custom-subtitle title-decorated">About us</h6>
              <h2 class="text-uppercase breadcrumbs-custom-title">About us</h2>
            </div>
            <ul class="breadcrumbs-custom-path">
              <li><a href="index.html">Home</a></li>
              <li class="active">About us</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BreadcrumbsAbout