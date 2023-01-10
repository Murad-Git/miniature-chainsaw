import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button, ListItem, ListItemText } from '@mui/material';
import ReactDOM from 'react-dom';
import { ColorState } from '../../types/main';
// import Button from './Button';

interface Props {
  onConfirm: (prev: any) => void;
  color: ColorState;
  // children?: React.ReactNode | React.ReactNode;
  // [];
}

const Backdrop = ({ onConfirm }: { onConfirm: (prev: any) => void }) => {
  return <div className='backdrop' onClick={onConfirm}></div>;
};
const ModalOverlay = ({ onConfirm, color }: Props) => {
  return (
    <div className='modal'>
      <ListItem style={{ backgroundColor: color.color }}>
        <div className='modal__content'>
          <ListItemText
            primary={`ID: ${color.id}`}
            secondary={`color name: ${color.name},
                year: ${color.year}, color: ${color.color}, pantone_value: ${color.pantone_value}`}
          />
          <Button onClick={onConfirm}>
            <CheckBoxIcon fontSize='large' color='action' />
          </Button>
        </div>
      </ListItem>
      {/* <header className='modal__header'>
        <h2>{title}</h2>
      </header>
      <div className='modal__content'>
        <p>{message}</p>
      </div> */}
      {/* <footer className='modal__action'>
        <Button onClick={onConfirm}>Okay</Button>
      </footer> */}
    </div>
  );
};

const ModalWindow = ({ onConfirm, color }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={onConfirm} color={color} />,
        document.getElementById('overlay-root') as Element
      )}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as Element
      )}
    </>
  );
};

export default ModalWindow;
