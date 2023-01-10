import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import colorsSlice from './colorsSlice';

export const store = configureStore({
  reducer: colorsSlice,
  devTools: true,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
