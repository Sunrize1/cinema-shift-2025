import { createAsyncThunk } from '@reduxjs/toolkit'

import { getFilms } from '../../api/requests'

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const response = await getFilms()
  return response.data.films
})
