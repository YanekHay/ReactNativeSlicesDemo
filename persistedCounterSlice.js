// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const persistedCounterSlice = createSlice({
  name: 'persistedCounter',
  initialState: {
    value: 0,
  },
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = persistedCounterSlice.actions;
export default persistedCounterSlice.reducer;