import { createSlice } from '@reduxjs/toolkit/dist';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { ColorState } from '../types/main';
import { RootState } from './store';

const getCurPage = () => {
  const curPage = window.location.pathname.includes('/page')
    ? +window.location.pathname.slice(-1)
    : 1;
  return curPage;
};

interface ColorsState {
  colors: ColorState[] | null;
  filteredColors: ColorState | null;
  currentPage: number;
}

const initialState: ColorsState = {
  colors: null,
  filteredColors: null,
  currentPage: getCurPage(),
};

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    saveColors: (state, { payload }: PayloadAction<null | ColorState[]>) => {
      if (payload) state.colors = payload;
    },
    changeCurPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    changefilteredColors: (state, { payload }: PayloadAction<number>) => {
      if (payload === 0) state.filteredColors = null;
      else {
        const foundElement = state.colors?.find(
          (color) => color.id === payload
        );
        if (foundElement) state.filteredColors = foundElement;
        else state.filteredColors = null;
      }
    },
  },
});
export const colorsValue = (state: RootState) => state.colors;
export const curPageValue = (state: RootState) => state.currentPage;
export const filteredColors = (state: RootState) => state.filteredColors;
export const { saveColors, changeCurPage, changefilteredColors } =
  colorsSlice.actions;
export default colorsSlice.reducer;
