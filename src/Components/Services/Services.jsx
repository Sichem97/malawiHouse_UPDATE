/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Breadcrumbs from './Features/BreadcrumbsServices'
import Feature from './Features/FeatureServices'
import BestOffert from '../Homepage/Features/BestOffert'
import MarketTrends from './Features/MarketTrends'
import OffersPlus from './Features/OfferPlus'

function Services() {
  return (

    <div className=''>
      <Breadcrumbs/>
      <Feature/>
      <MarketTrends/>
      <BestOffert/>
      <OffersPlus/>
    </div>
    
  )
}

export default Services