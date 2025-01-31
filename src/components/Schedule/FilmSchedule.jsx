import React from "react";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'; 

import {fetchFilmSchedules} from '../../utils/redux/FilmSchedules/thunks'
import { getFilmSchedulesIsLoading, getFilmSchedules } from '../../utils/redux/FilmSchedules/seleсtor';
import { FilmScheduleDate } from "./FilmScheduleDate";

export const FilmSchedule = ({filmId}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getFilmSchedulesIsLoading);
    const schedules = useSelector(getFilmSchedules);
    const [dates, setDates] = useState([]);
    
    useEffect(() => {
        dispatch(fetchFilmSchedules(filmId));
    }, [dispatch, filmId]);

     useEffect(() => {
        if (schedules && schedules.length > 0) {
            const uniqueDates = Array.from(
                new Map(
                    schedules.map(schedule => [
                        schedule.date,
                        { 
                            date: schedule.date, 
                            seances: schedule.seances.map(seance => ({ ...seance, id: uuidv4() })) 
                        }
                    ])
                ).values()
            );
            setDates(uniqueDates);
        } else {
            setDates([]); 
        }
    }, [schedules]);
    
      
    if (isLoading) return <div className="max-w-screen-lg mx-auto">Загрузка...</div>;

    return (
        <div className="w-xl flex flex-col gap-4">
        <h2 className="text-2xl">Расписание</h2>
            <FilmScheduleDate dates = {dates} />
        </div>
    );
}