import { Divider, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { ColorState } from '../types/main';
import ModalWindow from './ui/ModalWindow';

const Color = ({ color }: { color: ColorState }) => {
  console.log('render color.tsx');
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    console.log('modal clicked');
    setModal((prev) => !prev);
  };
  return (
    <>
      <div key={color.id} onClick={modalHandler}>
        <ListItem style={{ backgroundColor: color.color }}>
          <ListItemText
            primary={`ID: ${color.id}`}
            secondary={`color name:${color.name},
                year: ${color.year}`}
          />
        </ListItem>
        <Divider variant='middle' />
      </div>
      {modal && <ModalWindow color={color} onConfirm={modalHandler} />}
    </>
  );
};

export default Color;
