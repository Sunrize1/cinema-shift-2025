import { createSlice } from '@reduxjs/toolkit'
import { fetchFilms } from './thunks'

const initialState = {
  isLoading: true,
  list: [],
}

export const prefix = 'films'
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.list = action.payload
        state.isLoading = false
      })
  },
})

export const filmsReducer = filmsSlice.reducer
