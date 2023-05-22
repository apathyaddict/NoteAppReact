import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers';
import { TimeClock } from '@mui/x-date-pickers';



const Test = () => {



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker />
  </LocalizationProvider>
  )
  
};
export default Test;
