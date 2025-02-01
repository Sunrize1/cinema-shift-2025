import { createSlice } from '@reduxjs/toolkit';

import { submitPayment } from './thunks';

const initialState = {
  payment: {
    filmId: '',
    person: {},
    debitCard: {},
    seance: {
      date: '',
      time: '',
    },
    tickets: [],
  },
  currentStep: 1,
  loading: false,
  error: null,
  success: false,
  order: null, 
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updatePaymentData(state, action) {
      state.payment = { ...state.payment, ...action.payload };
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    resetPaymentData() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.order = action.payload.order;
      })
      .addCase(submitPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.reason || action.error.message;
      });
  },
});

export const { updatePaymentData, setCurrentStep, resetPaymentData } = paymentSlice.actions;
export const paymentReducer =  paymentSlice.reducer;
