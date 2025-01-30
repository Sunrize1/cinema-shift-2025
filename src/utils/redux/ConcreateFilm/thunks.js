import { createAsyncThunk } from '@reduxjs/toolkit'

import { getConcreateFilm } from '../../api/requests'

export const fetchConcreateFilm = createAsyncThunk('concreateFilm/fetchConcreateFilm', async (filmId) => {
  const response = await getConcreateFilm(filmId)
  return response.data.film
})
