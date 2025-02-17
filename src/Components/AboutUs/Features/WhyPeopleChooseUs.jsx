import React from 'react'

function WhyPeopleChooseUs() {

    const reasons = [
        {
          icon: "linearicons-users2",
          counter: 0,
          title: "National Partners",
          year: "Dec, 2024",
        },
        {
          icon: "linearicons-home-icon3",
          counter: 0,
          title: "Properties",
          year: "Dec, 2024",
        },
        {
          icon: "linearicons-star",
          counter: 0,
          title: "Years of Experience",
          year: "Dec, 2024",
        },
        {
          icon: "linearicons-apartment",
          counter: 0,
          title: "Qualified Brokers",
          year: "Dec, 2024",
        }
      ];
      

  return (
    <div>
        {/* <!-- Advantages and Achievements--> */}
        <section className="section novi-background section-md text-center bg-gray-100">
      <div className="container">
        <h3 className="text-uppercase wow-outer"><span className="wow slideInUp">Why People Choose Us</span></h3>
        <p className="wow-outer"><span className="text-width-1 wow slideInDown"> We offer expertise in the marketing and sale of a wide range of properties, including residential real estate, farms and lifestyle blocks, as well as commercial and industrial properties that we hope may interest you in Malawi.</span></p>
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

export default WhyPeopleChooseUs