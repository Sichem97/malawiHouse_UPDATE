/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'

function OffersPlus() {

  const datas = [
    {
      image: "Assets/Special/Offers/Insurance.png",
      title: "Insurance",
    },
    {
      image: "Assets/Special/Offers/Maintenance.png",
      title: "Maintenance",
    },
    {
      image: "Assets/Special/Offers/Management.png",
      title: "Management",
    },
    {
      image: "Assets/Special/Offers/Negotiation.png",
      title: "Negotiation",
    },
    {
      image: "Assets/Special/Offers/Relocation.png",
      title: "Relocation",
    },
    {
      image: "Assets/Special/Offers/Renovation.png",
      title: "Renovation",
    },
  ];

  return (
    <div>
              {/* Services */}
    <section class="section novi-background section-lg text-center">
    <div class="container">
      <h3 class="text-uppercase">Additionnal Services</h3>
      <p><span class="text-width-1">With various types of services. find out and request our offered services</span></p>
      <div class="row row-35 row-xxl-70 offset-top-2">

        {datas.map((data, index) => (
            <div class="col-sm-6 col-lg-3">
              {/* Thumbnail Light */}
              <article class="thumbnail-light">
                <Link to='/Contacts' class="thumbnail-light-media" >
                  <img class="thumbnail-light-image" src={data.image} alt="" style={{width:"270px",height:"200px"}}/>
                </Link>
                <h4 class="thumbnail-light-title">
                  <Link to='/Contacts'>{data.title}</Link>
                </h4>
              </article>
            </div>
        ))}
      </div>
    </div>
    </section>
    </div>
  )
}

export default OffersPlus