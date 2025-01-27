import { configureStore } from '@reduxjs/toolkit'

import { prefix as pokemonsPrefix, pokemonsReducer } from './pokemons/slice'

export const store = configureStore({
  reducer: { [pokemonsPrefix]: pokemonsReducer },
})
