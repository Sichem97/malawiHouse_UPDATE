/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'
import Breadcrumbs from './Features/BreadcrumbsServices'
import Feature from './Features/FeatureServices'
import BestOffert from '../Homepage/Features/BestOffert'
import MarketTrends from './Features/MarketTrends'

function Services() {
  return (

    <div className=''>
      <Breadcrumbs/>
      <Feature/>
      <MarketTrends/>
      <BestOffert/>
      
    </div>
    
  )
}

export default Services