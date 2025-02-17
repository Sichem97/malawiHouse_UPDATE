import React from 'react'
import PropertyInTrends from './Properties/PropertyInTrends'
import Feature from './Features/Feature'
import Testimonies from '../../Components/Testimony/Testimonies'
import HomeSlider from './Slider/HomeSlider'
import ServicesOffered from './Features/ServicesOffered'
import BestOffert from './Features/BestOffert'

function Homepage() {
  return (
    <div>
      <div >
        <HomeSlider/>
        <PropertyInTrends/>
        <Feature/>
        <ServicesOffered/>
        <BestOffert/>
        <Testimonies/>
      </div>
    </div>
  )
}

export default Homepage