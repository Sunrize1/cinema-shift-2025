import { createSlice } from '@reduxjs/toolkit'
import { fetchConcreateFilm } from './thunks'

const initialState = {
  isLoading: true,
  film: {},
}

export const prefix = 'concreateFilm'
const concreateFilmSlice = createSlice({
  name: 'concreateFilm',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchConcreateFilm.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchConcreateFilm.fulfilled, (state, action) => {
        state.film = action.payload
        state.isLoading = false
      })
  },
})

export const concreateFilmReducer = concreateFilmSlice.reducer
