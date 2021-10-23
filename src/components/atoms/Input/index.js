import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, fonts, wp} from '../../../constants';

const Input = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  multiline,
  numberOfLines,
  textAlignVertical,
  height,
  autoCapitalize,
  keyboardType,
}) => {
  return (
    <TextInput
      style={styles.input(height)}
      placeholder={placeholder}
      onChangeText={onChangeText}
      allowFontScaling={false}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={colors.gray}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={textAlignVertical}
      autoCapitalize={autoCapitalize || 'none'}
      keyboardType={keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: height => ({
    backgroundColor: colors.mercury,
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    padding: wp(3.5),
    color: colors.black,
    fontFamily: fonts.light,
    height: height,
  }),
});
