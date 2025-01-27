import { api } from '../instance'

export function getPokemons(params) {
  return api.get('pokemon/?limit=151', { ...(params?.options && params.options) })
}
