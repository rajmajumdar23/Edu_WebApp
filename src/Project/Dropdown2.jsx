import React, { useState } from 'react';

const Dropdown2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='Dropdown2-adjst'c style={{marginLeft:'-.5rem'}}>
      <p id='DropDown2-Head'>Location {selectedOption}</p>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option id='drop-word-space'> India</option>
        <option value="1">Andhra Pradesh, Amaravati</option>
        <option value="2">Arunachal Pradesh, Itanagar</option>
        <option value="3">Assam, Dispur</option>
        <option value="4">Bihar, Patna</option>
        <option value="5">Chhattisgarh, Raipur</option>
        <option value="6">Goa, Panaji</option>
        <option value="7">Gujarat, Gandhinagar</option>
        <option value="8">Haryana, Chandigarh</option>
        <option value="9">Himachal Pradesh, Shimla</option>
        <option value="10">Jharkhand, Ranchi</option>
        <option value="11">Karnataka, Bengaluru</option>
        <option value="12">Kerala, Thiruvananthapuram</option>
        <option value="13">Madhya Pradesh, Bhopal</option>
        <option value="14">Maharashtra, Mumbai</option>
        <option value="15">Manipur, Imphal</option>
        <option value="16">Meghalaya, Shillong</option>
        <option value="17">Mizoram, Aizawl</option>
        <option value="18">Nagaland, Kohima</option>
        <option value="19">Odisha, Bhubaneswar</option>
        <option value="20">Punjab, Chandigarh</option>
        <option value="21">Rajasthan, Jaipur</option>
        <option value="22">Sikkim, Gangtok</option>
        <option value="23">Tamil Nadu, Chennai</option>
        <option value="24">Telangana, Hyderabad</option>
        <option value="25">Tripura, Agartala</option>
        <option value="26">Uttar Pradesh, Lucknow</option>
        <option value="27">Uttarakhand, Dehradun</option>
        <option value="28">West Bengal, Kolkata</option>
      </select>
    </div>
  );
};

export default Dropdown2;
