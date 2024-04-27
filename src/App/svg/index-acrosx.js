import React from 'react';
import { ReactComponent as AddIcon } from './add_ico.svg';
import { ReactComponent as CloseIcon } from './close_ico.svg';
import { ReactComponent as DoneIcon } from './done_ico.svg';

const iconMap = {
  add: AddIcon,
  close: CloseIcon,
  done: DoneIcon
};

const IcoSvg = (props) => {
  const IcoComponent = iconMap[props.ico];
  const nameIco = `ico-${props.ico}`;

  if (!IcoComponent) {
    return <div>Icono no encontrado</div>;
  }

  return (
      <IcoComponent className={nameIco}/>
  );
};

export { IcoSvg };