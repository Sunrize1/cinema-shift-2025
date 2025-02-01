import { configureStore } from '@reduxjs/toolkit'

import { prefix as filmsPrefix, filmsReducer } from './Films/slice'
import { prefix as concreateFilmPrefix, concreateFilmReducer } from './ConcreateFilm/slice'
import { prefix as filmSchedulesPrefix, filmSchedulesReducer } from './FilmSchedules/slice'
import { paymentReducer } from './payForTickets copy/slice'

export const store = configureStore({
  reducer: {
    [filmsPrefix]: filmsReducer,
    [concreateFilmPrefix]: concreateFilmReducer,
    [filmSchedulesPrefix]: filmSchedulesReducer,
    payment: paymentReducer
  }
})
