import React from "react";
import { useNavigate } from "react-router-dom";

import {Star} from "../Other/Star";
import { Button } from "../Other/Button";
import { api } from "../../utils/api/instance";
import {ROUTES} from "../../utils/constants/router";
import { FilmTitle } from "../Other/FilmTitle";


export const FilmCard = ({ film, isDetailed = false }) => {
    const navigate = useNavigate();
    const stars = [];

    for (let i = 1; i <= 5; i++) {

        if(film.userRatings.imdb/2 >= i) {
            stars.push(<Star key={i} fill={true} />);
        } else {
            stars.push(<Star key={i} fill={false} />);
        }

      }

      const handleButtonClick = () => {
        navigate(ROUTES.FILM_INFO.replace(':filmId', film.id));
      };


  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden relative flex 
      ${isDetailed 
        ? 'flex-row h-75' 
        : 'flex-col max-w-xs h-104'}`}>
      <div className="relative">
        <img
          className={`w-full ${isDetailed ? '' : 'h-56'} object-cover`}
          src={`${api.defaults.baseURL + film.img}`}
          alt="Movie Poster"
        />
        <div className="absolute bottom-2 right-2 flex flex-row justify-end gap-1 flex-wrap-reverse">
          {film.genres.map((genre, index) => (
            <span
              key={index}
              className="text-sm text-black bg-gray-100 px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-1 flex-col px-4 py-1">
        <div >
          {isDetailed 
            ? <FilmTitle className="text-4xl" ageLimit={film.ageRating} title={film.name} >{film.name}</FilmTitle> 
            : <FilmTitle className="mt-2 text-md" ageLimit={film.ageRating} title={film.name} ></FilmTitle>}
          <p className="text-gray-600 text-sm">Фильм</p>
        </div>
        <div className="flex flex-col items-left mt-2">
          <div className="flex">
            {stars}
          </div>
          <span className="text-gray-600 text-sm">
            {`Kinopoisk - ${film.userRatings.kinopoisk}`}
          </span>
        </div>
        {isDetailed ? (<div className="mt-4">
          <p className="text-gray-700">{film.description}</p>
        </div>)
          : <Button onClick={handleButtonClick}>Подробнее</Button>}
      </div>
    </div>
    );
  };
