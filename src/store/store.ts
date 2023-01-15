// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import colorsSlice from './colorsSlice';

// export const store = configureStore({
//   reducer: colorsSlice,
//   devTools: true,
//   middleware: [thunk],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import colorsSlice from './colorsSlice';
// import userReducer from '../features/users/userSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: colorsSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
