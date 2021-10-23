import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts, hp} from '../../../constants';

const Heading = ({
  title,
  fontSize,
  color,
  numberOfLines = 0,
  fontFamily,
  center,
  textDecorationLine,
  textTransform,
  textAlign,
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={styles.text(
        fontSize,
        color,
        fontFamily,
        center,
        textDecorationLine,
        textTransform,
        textAlign,
      )}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: (
    fontSize,
    color,
    fontFamily,
    center,
    textDecorationLine,
    textTransform,
    textAlign,
  ) => ({
    fontSize: fontSize || hp(1.7),
    color: color || colors.black,
    fontFamily: fontFamily || fonts.regular,
    textAlign: center ? 'center' : textAlign ? textAlign : 'left',
    textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
    textTransform: textTransform,
  }),
});
