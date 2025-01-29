import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FilmCard } from "./FilmCard";
import { getFilmsIsLoading, getFilmsList } from '../../utils/redux/Films/seleсtor'; 
import { fetchFilms } from '../../utils/redux/Films/thunks';

export const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getFilmsIsLoading);
  const list = useSelector(getFilmsList);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  if (isLoading) return <div className="max-w-screen-lg mx-auto">Загрузка...</div>;

  return (
    <main className="max-w-screen-lg mx-auto">
      <h1 className="px-2 py-2 text-3xl font-bold">Афиша</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-4">
        {list.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </main>
  );
};