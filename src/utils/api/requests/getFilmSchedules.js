import { api } from '../instance'

export function getFilmSchedules(filmId) {
  return api.get(`/cinema/film/${filmId}/schedule`)
}
