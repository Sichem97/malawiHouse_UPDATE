import React, { useState } from 'react';


function SearchSold({ onFilterChange }) {
    const [category, setCategory] = useState('none');
  const [district, setDistrict] = useState('none');
  const [amount, setAmount] = useState('none');

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    if (newCategory === 'none') {
      setDistrict('none');
      setAmount('none');
      onFilterChange({
        category: 'none',
        district: 'none',
        amount: 'none',
      });
    } else {
      onFilterChange({
        category: newCategory,
        district,
        amount,
      });
    }
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setDistrict(newDistrict);
    onFilterChange({
      category,
      district: newDistrict,
      amount,
    });
  };

  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    onFilterChange({
      category,
      district,
      amount: newAmount,
    });
  };
  return (
    <section class="section novi-background section-lg bg-gray-100">
    <div class="container">
      <div class="row row-30" style={{}}>
        <div class="col-sm-6 col-lg-4 wow-outer">
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown">Category</h4>
              <p class="wow fadeInUpSmall">
                <select name="category" id="Category" value={category} onChange={handleCategoryChange}>
                    <optgroup>
                    <option value="none">none</option>
                    <option value="Building">Building</option>
                    <option value="Business">Business</option>
                    <option value="Hotel & Motel">Hotel & Motel</option>
                    <option value="House">House</option>
                    <option value="Office">Office</option>
                    <option value="Shop">Shop</option>
                    </optgroup>
                </select>
              </p>
            </div>
          </article>
        </div>
        <div class="col-sm-6 col-lg-4 wow-outer">
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".1s">District</h4>
              <p class="wow fadeInUpSmall" data-wow-delay=".1s">
                <select name="district" id="District" value={district} onChange={handleDistrictChange} disabled={category === 'none'}>
                    <optgroup> 
                        <option value="none">none</option>
                        <option value="Balaka ">Balaka</option>
                        <option value="Blantyre ">Blantyre</option>
                        <option value="Chikhwawa ">Chikhwawa</option>
                        <option value="Chiradzulu ">Chiradzulu</option>
                        <option value="Chitipa">Chitipa</option>
                        <option value="Dedza">Dedza</option>
                        <option value="Dowa">Dowa</option>
                        <option value="Karonga">Karonga</option>
                        <option value="Kasungu">Kasungu</option>
                        <option value="Lilongwe">Lilongwe</option>
                        <option value="Machinga ">Machinga</option>
                        <option value="Mangochi ">Mangochi</option>
                        <option value="Mchinji">Mchinji</option>
                        <option value="Mulanje ">Mulanje</option>
                        <option value="Mwanza ">Mwanza</option>
                        <option value="Mzimba">Mzimba</option>
                        <option value="Neno ">Neno</option>
                        <option value="Nkhata Bay">Nkhata Bay and Likoma</option>
                        <option value="Nkhotakota">Nkhotakota</option>
                        <option value="Nsanje ">Nsanje</option>
                        <option value="Ntcheu">Ntcheu</option>
                        <option value="Ntchisi">Ntchisi</option>
                        <option value="Phalombe ">Phalombe</option>
                        <option value="Rumphi">Rumphi</option>
                        <option value="Salima">Salima</option>
                        <option value="Southern ">Southern</option>
                        <option value="Thyolo ">Thyolo</option>
                        <option value="Zomba ">Zomba</option>
                    </optgroup>
                </select>
              </p>
            </div>
          </article>
        </div>
        <div class="col-sm-6 col-lg-4 wow-outer">
          {/* <!-- Box Minimal--> */}
          <article class="box-minimal">
            <div class="box-minimal-main wow-outer">
              <h4 class="box-minimal-title wow slideInDown" data-wow-delay=".2s">Amount</h4>
              <p class="wow fadeInUpSmall" data-wow-delay=".2s">
                <select name="amount" id="Amount" value={amount} onChange={handleAmountChange} >
                    <optgroup>
                    <option value="none">none</option>
                    <option value="<20000">Below Mk 20,000</option>
                    <option value="20000-49000">Mk 20,000 - Mk 49,000</option>
                    <option value="50000-99000">Mk 50,000 - Mk 99,000</option>
                    <option value="100000-149000">Mk 100,000 - Mk 149,000</option>
                    <option value="150000-199000">Mk 150,000 - Mk 199,000</option>
                    <option value="200000-249000">Mk 200,000 - Mk 249,000</option>
                    <option value="250000-399000">Mk 250,000 - Mk 399,000</option>
                    <option value="400000-449000">Mk 400,000 - Mk 449,000</option>
                    <option value=">449000">Above Mk 450,000</option>
                    </optgroup>
                </select>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SearchSold