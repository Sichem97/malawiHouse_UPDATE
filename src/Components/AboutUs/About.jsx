import React from 'react'
import AboutUs from './AboutUs'
import WhyPeopleChooseUs from './Features/WhyPeopleChooseUs'
import WhoWeAre from './Features/WhoWeAre'
import BreadcrumbAbout from './Features/BreadcrumbsAbout'
import Vison from './Features/Vison'

function About() {
  return (
    <div>
    <div class="page">
      
      <BreadcrumbAbout/>
      <WhoWeAre/>
      <WhyPeopleChooseUs/>
      <Vison/>
      <AboutUs/>
    </div>
  </div>
  )
}

export default About