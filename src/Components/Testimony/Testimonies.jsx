import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';

function Testimonies() {
  window.$ = $;
  window.jQuery = $;
  useEffect(() => {
    $(document).ready(() => {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 731,
        autoplayTimeout: 4268,
        dots: true,
        nav: false,
        margin: 30,
        stagePadding: 0,
        mouseDrag: false
      });
    });
  }, []);

  const testimonials = [
    {
      image: "Assets/Profile/profile2.png",
      name: "Sichem Mulumba",
      caption: "Regular Client",
      text: "I have just bought an apartment in Lilongwe thanks to you and your brokers. Everything went smooth and easy, the price was quite affordable, and I'm sure I will use your services again in the future."
    },
    {
      image: "Assets/Profile/profile4.png",
      name: "Memory N.",
      caption: "Regular Client",
      text: "I have recently sold my rental property on Devil Street via malawiHouses. Everything about the sale was made seamless by your team. You gave me great advice about what was necessary to expedite the sale."
    },
    {
      image: "Assets/Profile/profile1.png",
      name: "Priscilla K.",
      caption: "Regular Client",
      text: "I really appreciate your time and expertise in helping me find and buy my current home in Blantyr, Malawi. Hope we can do business again in the future and I will recommend you to family and friends."
    },
    {
      image: "Assets/Profile/profile3.png",
      name: "Yotcheb J.",
      caption: "Regular Client",
      text: "I have just sold a property with malawiHouses and I can't thank them enough. Their team has great communication skills and they have regularly communicated with me throughout the whole process."
    },
    {
      image: "Assets/Profile/profile2.png",
      name: "Sichem M.",
      caption: "Regular Client",
      text: "Your skilled team helped me make the dream of selling my old property a reality. The sale went smoothly, and I just closed on an ideal new place I am excited to call home. Thank you for your great services!"
    },
    {
      image: "Assets/Profile/profile5.png",
      name: "Memory N.",
      caption: "Regular Client",
      text: "I have to say that malawiHouses has the best brokers we've ever worked with. Their professionalism, personality, attention to detail, responsiveness and ability to close the deal are outstanding!"
    }
  ];
  

  return (
    <section className="section novi-background section-lg text-center">
      <div className="container">
        <h3 className="wow-outer"><span className="wow slideInDown text-uppercase">Testimonials</span></h3>
        {/* <!-- Owl Carousel--> */}
        <div className="owl-carousel wow fadeIn" data-items="1" data-md-items="2" data-lg-items="3" data-dots="true" data-nav="false" data-loop="true" data-autoplay="true" data-autoplay-speed="731" data-autoplay-timeout="4268" data-margin="30" data-stage-padding="0" data-mouse-drag="false">

          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="quote-classic">
              <div className="quote-classic-meta">
                <div className="quote-classic-avatar">
                  <img src={testimonial.image} alt="" width="96" height="96" />
                </div>

                <div className="quote-classic-info">
                  <cite className="quote-classic-cite">{testimonial.name}</cite>
                  <p className="quote-classic-caption"><i>{testimonial.caption}</i></p>
                </div>
              </div>

              <div className="quote-classic-text">
                <p>{testimonial.text}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonies