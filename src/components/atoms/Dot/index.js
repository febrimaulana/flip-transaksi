import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, hp} from '../../../constants';

const Dot = ({size}) => {
  return <View style={styles.dot(size)} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: size => ({
    width: size || hp(1),
    height: size || hp(1),
    borderRadius: size ? size / 2 : hp(1) / 2,
    backgroundColor: colors.black,
  }),
});
