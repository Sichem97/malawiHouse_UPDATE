import React from 'react'
import { Link } from 'react-router';

function AboutUs() {

  const teamMembers = [
    {
      image: "Assets/Profile/profile2.png",
      name: "Sichem Mulumba",
      position: "Founder",
      phone: "1-800-1324-567",
      description: "Ms. Sichem founded our company in 2024 with a vision to help guests and residents of the Malawi to easily find and buy or rent real estate in Malawi."
    },
    {
      image: "Assets/Profile/profile4.png",
      name: "Memory N.",
      position: "CEO",
      phone: "1-800-1324-567",
      description: "Memory has been in marketing for the past 3 years. She has excellent knowledge about the local market both residential and commercial."
    },
    {
      image: "Assets/Profile/profile3.png",
      name: "Jhon Yotcheb",
      position: "Software Engineer & Web-Develloper",
      phone: "1-800-1324-567",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque incidunt expedita assumenda hic provident, reprehenderit officiis atque eum maxime et!"
    },
    {
      image: "Assets/Profile/profile1.png",
      name: "Priscilla K.",
      position: "Marketing",
      phone: "1-800-1324-567",
      description: "Priscilla's goal is to provide clients with the highest level of marketing expertise and customer service to help them reach their uppermost real estate goals."
    }
  ];
  

  return (
    <section className="section novi-background section-lg text-center bg-gray-100">
      <div className="container">
        <h3 className="text-uppercase wow-outer"><span className="wow slideInUp">Our Team</span></h3>
        <div className="row row-lg-50 row-35 row-xxl-70 justify-content-center justify-content-lg-start">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-10 col-lg-6 wow-outer">
              <article className="profile-creative wow slideInLeft">
                <figure className="profile-creative-figure">
                  <img className="profile-creative-image" src={member.image} alt="" width="270" height="273" />
                </figure>
                <div className="profile-creative-main">
                  <h5 className="profile-creative-title">
                    <Link>{member.name}</Link>
                  </h5>
                  <p className="profile-creative-position">{member.position}</p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon novi-icon icon-md mdi mdi-phone"></span>
                      <Link>{member.phone}</Link>
                    </div>
                  </div>
                  <p>{member.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs