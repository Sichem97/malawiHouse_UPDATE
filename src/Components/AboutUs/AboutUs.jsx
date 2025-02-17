import React from 'react'

function AboutUs() {

  const teamMembers = [
    {
      image: "Assets/images/team-1-270x273.jpg",
      name: "Sichem Mulumba",
      position: "Founder",
      phone: "1-800-1324-567",
      description: "Ms. Sichem founded our company in 2024 with a vision to help guests and residents of the Malawi to easily find and buy or rent real estate in Malawi."
    },
    {
      image: "Assets/images/team-2-270x273.jpg",
      name: "Memory N.",
      position: "CEO",
      phone: "1-800-1324-567",
      description: "Memory has been in marketing for the past 3 years. She has excellent knowledge about the local market both residential and commercial."
    },
    {
      image: "Assets/images/team-3-270x273.jpg",
      name: "Jhon Yotcheb",
      position: "Web-developer",
      phone: "1-800-1324-567",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque incidunt expedita assumenda hic provident, reprehenderit officiis atque eum maxime et!"
    },
    {
      image: "Assets/images/team-4-270x273.jpg",
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
                    <a href="#">{member.name}</a>
                  </h5>
                  <p className="profile-creative-position">{member.position}</p>
                  <div className="profile-creative-contacts">
                    <div className="object-inline">
                      <span className="icon novi-icon icon-md mdi mdi-phone"></span>
                      <a href="tel:#">{member.phone}</a>
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