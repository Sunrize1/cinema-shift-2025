import { createSlice } from '@reduxjs/toolkit'
import { fetchFilmSchedules } from './thunks'

const initialState = {
  isLoading: true,
  activeDate: null, 
  activeTime: null,
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
  }, reducers: {
    setActiveDate(state, action) {
      state.activeDate = action.payload;
    },
    setActiveTime(state, action) {
      state.activeTime = action.payload;
    },
  }
})
export const {setActiveDate, setActiveTime} = filmSchedulesSlice.actions;

export const filmSchedulesReducer = filmSchedulesSlice.reducer
