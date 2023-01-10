import { Pagination } from '@mui/material';
import { memo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import { changeCurPage, curPageValue } from '../store/colorsSlice';
import { useAppDispatch, useAppSelector } from '../types/hooks';

const RootLayout = () => {
  const navigate = useNavigate();
  const curPage = useAppSelector(curPageValue);
  const dispatch = useAppDispatch();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changeCurPage(value));
    navigate(`/page=${value}`);
  };

  return (
    <>
      <div className='inputField'>
        <InputField />
        {/* <Input
          type='number'
          color='primary'
          inputProps={ariaLabel}
          placeholder='Enter color id'
        /> */}
      </div>
      <main>
        <Outlet />
      </main>
      <Pagination
        count={3}
        page={curPage}
        shape='rounded'
        className='pagination'
        onChange={handlePageChange}
      />
    </>
  );
};

export default memo(RootLayout);
