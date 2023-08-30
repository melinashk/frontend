import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.css'

const DateOfBirth = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date | null) => {
    setStartDate(date || new Date());
  };

  return (
    <div className="input-field-container">
      <label>Date of Birth</label>
      <DatePicker
        className='input-field'
        selected={startDate}
        onChange={handleDateChange}
      />  
    </div>
  );
};

export default DateOfBirth;


