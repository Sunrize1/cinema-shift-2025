import React from "react";

import {Star} from "../Other/Star";
import { api } from "../../utils/api/instance";


export const FilmCard = ({ film }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {

        if(film.userRatings.imdb/2 >= i) {
            stars.push(<Star key={i} fill={true} />);
        } else {
            stars.push(<Star key={i} fill={false} />);
        }

      }


    return (
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden relative">
      <div className="relative">
        <img
        className="w-full h-56 object-cover"
        src={`${api.defaults.baseURL + film.img}`}
        alt="Movie Poster"
        />
        <div className="absolute bottom-2 right-2 flex flex-row justify-end gap-1 m-1 flex-wrap-reverse">
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
      <div className="flex gap-2 flex-col p-4">
        <div>
        <h2 className="mt-2 text-lg">{film.name}</h2>
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
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-purple-700">
        Подробнее
        </button>
      </div>
      </div>
    );
  };
  