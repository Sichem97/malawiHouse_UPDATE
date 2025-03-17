import React, { useState } from 'react';
import { Link } from 'react-router';
import SearchSold from './SearchSold';
import SoldData from './Data/SoldData';

function Gallery() {
  // State to manage the filtered data
  const [filteredData, setFilteredData] = useState(SoldData);

  const handleFilterChange = (filter) => {
    const { category, district, amount } = filter;

    // Filter the data based on selected criteria
    const updatedData = SoldData.filter((data) => {
      const matchesCategory = category === 'none' || data.category === category;
      const matchesDistrict = district === 'none' || data.city.includes(district.trim());
      const matchesAmount =
        amount === 'none' ||
        (amount.startsWith('<') && parseFloat(data.price.replace(/\./g, '')) < parseFloat(amount.slice(1))) ||
        (amount.startsWith('>') && parseFloat(data.price.replace(/\./g, '')) > parseFloat(amount.slice(1))) ||
        (amount.includes('-') &&
          parseFloat(data.price.replace(/\./g, '')) >= parseFloat(amount.split('-')[0]) &&
          parseFloat(data.price.replace(/\./g, '')) <= parseFloat(amount.split('-')[1]));

      return matchesCategory && matchesDistrict && matchesAmount;
    });

    setFilteredData(updatedData);
  };

  return (
    <div>
      {/* Services */}
      <section className="section novi-background section-lg text-center">
        <div className="container">
          <h3 className="text-uppercase">Available Properties</h3>
          <p>
            <span className="text-width-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit earum est tenetur, vel modi!
            </span>
          </p>

          {/* Search Component */}
          <SearchSold onFilterChange={handleFilterChange} />

          <div className="row row-35 row-xxl-70 offset-top-2">
            {filteredData.map((data) => (
              <div className="col-sm-6 col-lg-3" key={data.id}>
                {/* Thumbnail Light */}
                <article
                  className="thumbnail-light"
                  style={{ backgroundColor: 'hsl(0, 0.00%, 83.90%)', height: '50vh', borderRadius: '8px' }}
                >
                  <Link className="thumbnail-light-media">
                    <img
                      className="thumbnail-light-image"
                      src={data.image}
                      alt=""
                      style={{ width: '100%', height: '200px' }}
                    />
                  </Link>
                  <h6 className="thumbnail-light-title">
                    <Link className="post-modern-title" style={{}}>
                      {data.area}, {data.city}
                    </Link>
                  </h6>
                  <p className="thumbnail-light-title" style={{ fontSize: '15px' }}>
                    <ul className="post-modern-meta">
                      <li>
                        <Link className="button-winona" style={{ paddingLeft: '1px' }}>
                          Mkw {data.price}
                        </Link>
                      </li>
                      <Link className="button-winona">
                        <li>{data.detail1}</li>
                        <li>{data.detail2}</li>
                      </Link>
                    </ul>
                  </p>
                </article>
              </div>
            ))}
            {filteredData.length === 0 && <p>No properties match your criteria.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
