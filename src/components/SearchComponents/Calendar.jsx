import { useState } from "react";
import styled from "styled-components";
import { add } from "date-fns";
import DatePicker from "react-datepicker";
// import { DateRangePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const minSelectableDate = new Date();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      monthsShown={2}
      minDate={add(startDate, { days: 14 })}
    />
  );
};

export default Calendar;
