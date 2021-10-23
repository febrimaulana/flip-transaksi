import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../constants';

const Line = ({borderWidth, borderColor}) => {
  return <View style={styles.line(borderWidth, borderColor)} />;
};

export default Line;

const styles = StyleSheet.create({
  line: (borderWidth, borderColor) => ({
    borderWidth: borderWidth || 0.6,
    borderColor: borderColor || colors.border,
  }),
});
