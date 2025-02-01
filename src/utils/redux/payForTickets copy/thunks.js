import { createAsyncThunk } from '@reduxjs/toolkit';
import { payForTickets } from '../../api/requests/payForTickets';

export const submitPayment = createAsyncThunk(
  'payment/submitPayment',
  async (paymentData) => {
    const response = await payForTickets(paymentData); 
    return response.data;
  }
);