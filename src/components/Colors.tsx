// import { Divider } from '@mui/material';
// import  from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import {
  colorsValue,
  curPageValue,
  filteredColors,
} from '../store/colorsSlice';
import { useAppSelector } from '../types/hooks';
import { ColorState } from '../types/main';
import { RESULTS_PER_PAGE } from '../util/config';
import Color from './Color';

// import useFetchData from '../hooks/use-fetchData';

const Colors = () => {
  const colors = useAppSelector(colorsValue);
  const filtered = useAppSelector(filteredColors);
  const currentPage = useAppSelector(curPageValue);
  const [curColors, setCurColors] = useState(colors?.slice(0, 5));

  useEffect(() => {
    const colorsPerPage = () => {
      if (colors?.length) {
        const start = (currentPage - 1) * RESULTS_PER_PAGE;
        const end = currentPage * RESULTS_PER_PAGE;
        setCurColors(colors.slice(start, end));
      }
    };
    colorsPerPage();
  }, [currentPage, colors]);

  if (!colors) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {filtered ? (
        <Color color={filtered} />
      ) : (
        curColors &&
        curColors.map((color: ColorState) => (
          <Color color={color} key={color.id} />
        ))
      )}
    </>
  );
};

export default Colors;
