import React, { useState, useEffect } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker, DateCalendar,TimeClock } from '@mui/x-date-pickers';
import dayjs from "dayjs"


//import TimePicker from "react-time-picker";

const Reminder = ({isChecked, setIsChecked, time, onTimeChange}) => {
  
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
         
      };

   

  return (
    <>
      <div className="container text-center mt-2 mb-2 mr-2 ">
        <div>
          <span className=" ">Would you like to be reminded?</span>
        </div>
     </div>
        <div className="container text-center mt-2 mb-2 mr-2 flex-row">
          <label className="test switch mt-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>

          <span className="datePick">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
    {isChecked && <DateTimePicker
    defaultValue={dayjs('2022-04-17T15:30')}
      value={time}
      onChange={onTimeChange}/>}
  </LocalizationProvider>
          {/* {isChecked &&  <TimePicker onChange={onTimeChange} value={time} />} */}
          </span>
        </div>
      
    </>
  );
};

export default Reminder;
