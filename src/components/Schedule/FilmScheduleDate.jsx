import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


import { setActiveDate } from '../../utils/redux/FilmSchedules/slice';
import { getActiveDate, getUniqueDates } from '../../utils/redux/FilmSchedules/seleсtor';
import { FilmScheduleDateCell } from "./FilmScheduleDateCell";
import { FilmScheduleDateTimes } from "./FilmScheduleDateTimes";

export const FilmScheduleDate = () => {
  const dispatch = useDispatch();
  const uniqueDates = useSelector(getUniqueDates);
  const activeDate = useSelector(getActiveDate);


  useEffect(() => {
    if (uniqueDates && uniqueDates.length > 0 && !activeDate) {
      dispatch(setActiveDate(uniqueDates[0]));
    }
  }, [uniqueDates, activeDate, dispatch]);

  const handleDateClick = (date) => {
    dispatch(setActiveDate(date));
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-0.5 justify-between w-xl bg-gray-200 h-13 p-0.5 rounded-full">
        {uniqueDates.map((dateObj) => (
          <FilmScheduleDateCell
            key={dateObj.date}
            date={dateObj.date}
            isActive={dateObj.date === activeDate?.date}
            onClick={() => handleDateClick(dateObj)}
          />
        ))}
      </div>
      <FilmScheduleDateTimes />
    </div>
  );
};