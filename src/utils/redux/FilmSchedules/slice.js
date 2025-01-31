import { createSlice } from '@reduxjs/toolkit'
import { fetchFilmSchedules } from './thunks'

const initialState = {
  isLoading: true,
  schedules: [],
}

export const prefix = 'filmSchedules'
const filmSchedulesSlice = createSlice({
  name: 'filmSchedules',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmSchedules.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchFilmSchedules.fulfilled, (state, action) => {
        state.schedules = action.payload
        state.isLoading = false
      })
  },
})

export const filmSchedulesReducer = filmSchedulesSlice.reducer
