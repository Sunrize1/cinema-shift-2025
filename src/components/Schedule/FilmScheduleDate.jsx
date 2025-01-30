import React, { useState, useEffect} from "react";

import { FilmScheduleDateCell } from "./FilmScheduleDateCell";
import { FilmScheduleDateTimes } from "./FilmScheduleDateTimes";

export const FilmScheduleDate = ({ dates, index }) => {
    const [activeDate, setActiveDate] = useState({});

    useEffect(() => {
        if (dates && dates.length > 0) {
            setActiveDate(dates[0]);
        } else {
            setActiveDate({});
        }
    }, [dates]);


    const handleDateClick = (date) => {
        setActiveDate(date);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-0.5 justify-between w-xl bg-gray-200 h-13 p-0.5 rounded-full">
            {dates.map((dateObj) => (
                <FilmScheduleDateCell
                    key={dateObj.date}
                    date={dateObj.date}
                    isActive={dateObj.date === activeDate.date}
                    onClick={() => handleDateClick(dateObj)}
                />
            ))}
        </div>
        <FilmScheduleDateTimes seances={activeDate.seances} />
        </div> 
    );
};