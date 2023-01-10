import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { memo } from 'react';
import { changefilteredColors } from '../store/colorsSlice';
import { useAppDispatch } from '../types/hooks';

const inputProps = { 'aria-label': 'colorId', min: '1' };

const InputField = () => {
  const dispatch = useAppDispatch();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    event.preventDefault();
    if (value.length === 0) return dispatch(changefilteredColors(0));
    dispatch(changefilteredColors(+value));
  };
  return (
    <Box component='form' noValidate autoComplete='off'>
      <FormControl sx={{ width: '25ch' }}>
        <InputLabel htmlFor='color-id'>Color Id</InputLabel>
        <OutlinedInput
          placeholder='Enter color ID'
          color='primary'
          type='number'
          inputProps={inputProps}
          name='color-id'
          id='color-id'
          margin='dense'
          onChange={handleInputChange}
        />
        <FormHelperText id='my-helper-text'>
          Input your favourite color ID
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default memo(InputField);
