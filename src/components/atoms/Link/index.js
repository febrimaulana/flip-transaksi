import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Heading} from '../../../components';

const Link = ({
  title,
  onPress,
  color,
  size,
  center,
  fontFamily,
  textDecorationLine,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Heading
        title={title}
        color={color}
        fontSize={size}
        center={center}
        fontFamily={fontFamily}
        textDecorationLine={textDecorationLine}
      />
    </TouchableOpacity>
  );
};

export default Link;
