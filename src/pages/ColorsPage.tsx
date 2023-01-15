import { Box, Grid, List } from '@mui/material';
import { useEffect } from 'react';
import Colors from '../components/Colors';
import { colorsValue, saveColors } from '../store/colorsSlice';
import { useAppDispatch, useAppSelector } from '../types/hooks';
import { getColors } from '../util/getColors';

const ColorsPage = () => {
  // const loaderData = useLoaderData();
  const colors = useAppSelector(colorsValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (colors !== null) return;
    const fetchData = async () => {
      const { data } = await getColors();
      dispatch(saveColors(data));
    };
    fetchData();
  }, [colors, dispatch]);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }} className='colors'>
      <Grid container>
        <Grid item xs={12} md={12}>
          <List className='colors__list'>
            <Colors />
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColorsPage;

// export const loader: Params = ({ params }) => {
//   if (params.pageNum) {
//     const page = params?.pageNum.slice(-1);
//     if (page === 1 || 2) return getColors(page);
//   }
//   return getColors(1);
// };
