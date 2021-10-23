import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {Heading} from '../../../components';
import {wp} from '../../../constants';

const Link = ({
  title,
  onPress,
  color,
  size,
  center,
  fontFamily,
  textDecorationLine,
  rightComponent,
  leftComponent,
  leftSpace,
  rightSpace,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {leftComponent && leftComponent}
      {leftSpace && <Gap width={leftSpace} />}
      <Heading
        title={title}
        color={color}
        fontSize={size}
        center={center}
        fontFamily={fontFamily}
        textDecorationLine={textDecorationLine}
      />
      {rightSpace && <Gap width={rightSpace} />}
      {rightComponent && rightComponent}
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
