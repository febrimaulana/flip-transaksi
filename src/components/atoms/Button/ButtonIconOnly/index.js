import React from 'react';
import {TouchableOpacity} from 'react-native';

const ButtonIconOnly = ({icon, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {icon && icon}
    </TouchableOpacity>
  );
};

export default ButtonIconOnly;
