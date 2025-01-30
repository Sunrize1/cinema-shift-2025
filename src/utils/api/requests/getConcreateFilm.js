import { api } from '../instance'

export function getConcreateFilm(filmId) {
  return api.get(`cinema/film/${filmId}`)
}
