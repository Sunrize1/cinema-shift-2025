import React from "react";
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

export const FilmScheduleDateCell = ({ date, isActive, onClick }) => { 
    const newDate = parse(date, "dd.MM.yy", new Date());

    return (
        <div
            className={`rounded-3xl p-1 flex justify-center items-center cursor-pointer ${
                isActive ? "bg-white" : ""
            }`}
            onClick={onClick}
        >
            <p>{format(newDate, "EEEEEE, d MMM", { locale: ru })}</p>
        </div>
    );
};