import { createAsyncThunk } from '@reduxjs/toolkit'

import { getFilmSchedules } from '../../api/requests'

export const fetchFilmSchedules = createAsyncThunk('filmSchedules/fetchFilmSchedules', async (filmId) => {
  const response = await getFilmSchedules(filmId);
  return response.data.schedules;
})
