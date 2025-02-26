/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router'

function PropertyInTrends() {
  const datas = [
    {
      image: "Assets/Home_pub/house(6).png",
      price: "1.500.000",
      city: "Mzuzu",
      area: "",
      detail1:"30 Sq. Ft.",
      detail2:"3 Bedrooms",
      comment:"A comfortable residential property located in a quiet and cozy area."
    },
    {
      image: "Assets/Home_pub/house(4).png",
      price: "Mkw 300.000 / Month",
      city: "Blantyre",
      area: "Area 5",
      detail1:"40 Sq. Ft.",
      detail2:"2 Bedrooms",
      comment:"Perfect for those who love both city life and the countryside."
    },
    {
      image: "Assets/Home_pub/house(5).png",
      price: "180.000 / Month",
      city: "Lilongwe",
      area: "Kanengo",
      detail1:"50 Sq. Ft.",
      detail2:"4 Bedrooms",
      comment:"Located in 5 mins from downtown, this property is great for anyone."
    },
    {
      image: "Assets/Home_pub/house(2).png",
      price: "2.700.000",
      city: "Lilongwe",
      area: "Dowa",
      detail1:"90 Sq. Ft.",
      detail2:"2 Bedrooms",
      comment:"A luxury mansion for people who enjoy the high-end amenities."
    },
  ];

  return (
    <section class="section novi-background section-md text-center">
    <div class="container">
      <h3 class="text-uppercase font-weight-bold wow-outer"><span class="wow slideInDown">Popular properties</span></h3>
      <div class="row row-lg-50 row-35 offset-top-2">

      {datas.map((data, index) => (
          <div class="col-md-6 wow-outer">
            <article class="post-modern wow slideInLeft">
              <Link class="post-modern-media">
                <img src={data.image} alt=""   style={{width:"570px",height:"352px"}}/>
              </Link>
  
              <h4 class="post-modern-title">
                <Link class="post-modern-title">{data.area}, {data.city}</Link>
              </h4>
              
              <ul class="post-modern-meta">
                <li>
                  <Link class="button-winona">Mkw {data.price}</Link>
                </li>
                <li>{data.detail1}</li>
                <li>{data.detail2}</li>
              </ul>
              <p>{data.comment}</p>
            </article>
          </div>
          ))}

        <div class="col-md-12 wow-outer">
          <Link class="button button-primary button-winona button-md" to="/Services">view More properties</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PropertyInTrends