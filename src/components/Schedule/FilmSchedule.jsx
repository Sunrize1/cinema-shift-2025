import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFilmSchedules } from '../../utils/redux/FilmSchedules/thunks';
import { getFilmSchedulesIsLoading, getFilmSchedules } from '../../utils/redux/FilmSchedules/seleсtor';
import { FilmScheduleDate } from "./FilmScheduleDate";

export const FilmSchedule = ({ filmId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getFilmSchedulesIsLoading);

  useEffect(() => {
    dispatch(fetchFilmSchedules(filmId));
  }, [dispatch, filmId]);

  if (isLoading) return <div className="max-w-screen-lg mx-auto">Загрузка...</div>;

  return (
    <div className="w-xl flex flex-col gap-4">
      <h2 className="text-2xl">Расписание</h2>
      <FilmScheduleDate />
    </div>
  );
};