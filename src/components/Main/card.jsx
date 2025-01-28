import React from "react";



export const Card = ({ film }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if(film.userRatings.imdb/2 >= i) {
            stars.push(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4385 2.34752C11.6682 1.88416 12.3318 1.88416 12.5615 2.34752L15.1666 7.60322C15.2578 7.78722 15.4341 7.91476 15.638 7.94426L21.4632 8.78705C21.9768 8.86136 22.1819 9.48975 21.8102 9.85042L17.5951 13.9414C17.4475 14.0846 17.3802 14.291 17.415 14.4932L18.4101 20.2698C18.4978 20.7791 17.9609 21.1675 17.5016 20.927L12.2914 18.1997C12.109 18.1042 11.891 18.1042 11.7086 18.1997L6.49841 20.927C6.03907 21.1675 5.50221 20.7791 5.58993 20.2698L6.585 14.4932C6.61983 14.291 6.5525 14.0846 6.40493 13.9414L2.18977 9.85042C1.81815 9.48975 2.02321 8.86136 2.53678 8.78705L8.36198 7.94426C8.56592 7.91476 8.74221 7.78722 8.83342 7.60322L11.4385 2.34752Z" fill="#FFB219"/>
                </svg>
                );
        } else {
            stars.push(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4385 2.34752C11.6682 1.88416 12.3318 1.88416 12.5615 2.34752L15.1666 7.60322C15.2578 7.78722 15.4341 7.91476 15.638 7.94426L21.4632 8.78705C21.9768 8.86136 22.1819 9.48975 21.8102 9.85042L17.5951 13.9414C17.4475 14.0846 17.3802 14.291 17.415 14.4932L18.4101 20.2698C18.4978 20.7791 17.9609 21.1675 17.5016 20.927L12.2914 18.1997C12.109 18.1042 11.891 18.1042 11.7086 18.1997L6.49841 20.927C6.03907 21.1675 5.50221 20.7791 5.58993 20.2698L6.585 14.4932C6.61983 14.291 6.5525 14.0846 6.40493 13.9414L2.18977 9.85042C1.81815 9.48975 2.02321 8.86136 2.53678 8.78705L8.36198 7.94426C8.56592 7.91476 8.74221 7.78722 8.83342 7.60322L11.4385 2.34752Z" fill="#CED2DA"/>
                </svg>
                );
        }
      }


    return (
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden relative">
        <div className="relative">
          <img
            className="w-full h-56 object-cover"
            src={`https://shift-intensive.ru/api${film.img}`}
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
          <div className="">
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
  