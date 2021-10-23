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
  ) => ({
    fontSize: fontSize || hp(2),
    color: color || colors.black,
    fontFamily: fontFamily || fonts.regular,
    textAlign: center ? 'center' : 'left',
    textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
    textTransform: textTransform,
  }),
});
