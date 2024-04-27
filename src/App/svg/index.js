import React from 'react';
import addIcon from './add_ico.svg';
import closeIcon from './close_ico.svg';
import doneIcon from './done_ico.svg';

const iconMap = {
  add: addIcon,
  close: closeIcon,
  done: doneIcon
};

const IcoSvg = (props) => {
  if (!iconMap[props.ico]) {
    return <div>Icono no encontrado</div>;
  }

  const IconComponent = iconMap[props.ico];

  return (
      <img src={IconComponent} alt="Icono" />
  );
};

export { IcoSvg };