import React, { useState } from 'react';

const Dropdown1 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='Dropdown1-adjst'>
      <p id='DropDown1-Head'>Department {selectedOption}</p>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option> New Ventures</option>
        <option value="option1">All Departments</option>
        <option value="option2">Engineering</option>
        <option value="option3">Information Technology</option>
        <option value="option4">Cyber Security</option>
        <option value="option5">Advance Networking</option>
        <option value="option6">Computer Hardware</option>
      </select>

    </div>
  );
};

export default Dropdown1;
