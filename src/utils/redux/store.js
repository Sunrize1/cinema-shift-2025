import { configureStore } from '@reduxjs/toolkit'

import { prefix as filmsPrefix, filmsReducer } from './Films/slice'

export const store = configureStore({
  reducer: { [filmsPrefix]: filmsReducer },
})
