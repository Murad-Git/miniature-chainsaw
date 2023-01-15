import reducer, {
  ColorsState,
  changeCurPage,
  changefilteredColors,
  getCurPage,
  saveColors,
} from '../store/colorsSlice';
import { colorsList } from '../util/data';
import { getColors } from '../util/getColors';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    colors: null,
    filteredColors: null,
    currentPage: getCurPage(),
  });
});

test('should handle a changeCurPage being changed to 2', () => {
  const previousState: ColorsState = {
    colors: null,
    filteredColors: null,
    currentPage: getCurPage(),
  };

  expect(reducer(previousState, changeCurPage(2))).toEqual({
    colors: null,
    filteredColors: null,
    currentPage: 2,
  });
});

test('should handle a filteredColors being added 0 color', () => {
  const previousState: ColorsState = {
    colors: null,
    filteredColors: null,
    currentPage: 2,
  };

  expect(reducer(previousState, changefilteredColors(0))).toEqual({
    colors: null,
    filteredColors: null,
    currentPage: 2,
  });
});
test('should handle saveColors being added some new colors', async () => {
  const previousState: ColorsState = {
    colors: null,
    filteredColors: null,
    currentPage: 2,
  };
  const fetchData = async () => {
    const { data } = await getColors();
    return data;
  };
  const data = await fetchData();
  expect(reducer(previousState, saveColors(data))).toEqual({
    colors: colorsList,
    filteredColors: null,
    currentPage: 2,
  });
});
