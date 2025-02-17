import React from 'react'

function MarketTrends() {

    const reasons = [
        {
          icon: "linearicons-smile",
          counter: 0,
          title: "Satisfied Customer",
          year: "Dec, 2024"
        },
        {
          icon: "linearicons-home-icon3",
          counter: 0,
          title: "Properties Posted",
          year: "Dec, 2024"
        },
        {
          icon: "linearicons-star",
          counter: 0,
          title: "Properties In Trends",
          year: "Dec, 2024"
        },
        {
          icon: "linearicons-cog",
          counter: 0,
          title: "Properties Maintened",
          year: "Dec, 2024"

        }
      ];
      

  return (
    <div>
        {/* Advantages and Achievements */}
        <section className="section novi-background section-md text-center bg-gray-100">
      <div className="container">
        <h3 className="text-uppercase wow-outer"><span className="wow slideInUp">Real Estate Market Trends</span></h3>
        <p className="wow-outer"><span className="text-width-1 wow slideInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p>
        <div className="row row-50">
          {reasons.map((reason, index) => (
            <div key={index} className="col-6 col-md-3 wow-outer">
              <article className="counter-minimal wow slideInUp" data-wow-delay=".1s">
                <div className={`counter-minimal-icon box-chloe__icon novi-icon ${reason.icon}`}></div>
                <div className="counter-minimal-main">
                  <div className="counter">{reason.counter}</div>
                </div>
                <h5 className="counter-minimal-title">{reason.title}</h5>
                <h5 className="counter-minimal-title">{reason.year}</h5>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default MarketTrends