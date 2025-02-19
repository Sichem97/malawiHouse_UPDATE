/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router';

const HomeSlider = () => {

    const slides = [
        {
          image: "Assets/Image/HomeSlider.jpg",
          title: "Offering Diverse",
          subtitle: "Properties",
          description: "malawiHouses provides you with lots of great properties throughout Malawi so that you could easily choose your dream property.",
          button: "View Properties"
        },
        {
          image: "Assets/Image/HomeSlider2.jpg",
          title: "Easily",
          subtitle: "Rent & Sale",
          description: "With the help of our services and property management solutions, you can rent or sell any house or apartment.",
          button: "View properties"
        },
        {
          image: "Assets/Image/HomeSlider.webp",
          title: "More Than 1 Years of",
          subtitle: "Experience",
          description: "Founded in 2024, our company is a team of renowned property management and real estate experts always ready to help you.",
          button: "View properties"
        }
      ];
      

  return (
    <section className="section swiper-container swiper-slider swiper-slider-minimal" data-loop="true" data-slide-effect="fade" data-autoplay="4759" data-simulate-touch="true">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide" data-slide-bg={slide.image}>
            <div className="container">
              
              <div className="jumbotron-classic-content">

                <div className="wow-outer">
                  <div className="title-docor-text font-weight-bold title-decorated text-uppercase wow slideInLeft text-white">{slide.title}</div>
                </div>

                <h1 className="text-uppercase text-white font-weight-bold wow-outer">
                    <span className="wow slideInDown" data-wow-delay=".2s">{slide.subtitle}</span>
                </h1>
                
                <p className="text-white wow-outer">
                    <span className="wow slideInDown" data-wow-delay=".35s">{slide.description}</span>
                </p>

                <div className="wow-outer button-outer">
                    <Link className="button button-md button-primary button-winona wow slideInDown" to="Services" data-wow-delay=".4s">{slide.button}</Link>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination-outer container">
        <div className="swiper-pagination swiper-pagination-modern swiper-pagination-marked" data-index-bullet="true"></div>
      </div>
    </section>
  );
};

export default HomeSlider;
