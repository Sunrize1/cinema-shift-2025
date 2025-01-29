import { api } from '../instance'

export function getFilms() {
  return api.get('cinema/today')
}
