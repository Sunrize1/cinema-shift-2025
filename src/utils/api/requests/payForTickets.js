import { api } from '../instance';

export function payForTickets(paymentData) {
  return api.post('cinema/payment', paymentData); 
}