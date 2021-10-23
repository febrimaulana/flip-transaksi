import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors, fonts, hp} from '../../../constants';
import Gap from '../Gap';
import Heading from '../Heading';

const Button = ({
  title,
  onPress,
  onLongPress,
  textColor,
  backgroundColor,
  disabled,
  rigthComponent,
  leftComponent,
  fontSize,
  fontFamily,
  noRadius,
  spaceRight,
  spaceLeft,
  isLoading,
  textTransform,
}) => {
  if (isLoading) {
    return (
      <View
        style={{
          ...styles.button(backgroundColor, noRadius),
          ...styles.loading,
        }}>
        <ActivityIndicator size="small" color={colors.white} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.button(backgroundColor, noRadius)}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}>
      {leftComponent ? leftComponent : <Gap />}
      {spaceLeft && <Gap width={spaceLeft} />}
      <Heading
        title={title}
        color={textColor ? textColor : colors.white}
        fontSize={fontSize || hp(1.5)}
        fontFamily={fontFamily || fonts.semiBold}
        textTransform={textTransform}
      />
      {spaceRight && <Gap width={spaceRight} />}
      {rigthComponent ? rigthComponent : <Gap />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (backgroundColor, noRadius) => ({
    backgroundColor: backgroundColor || colors.green,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: noRadius ? 0 : 10,
    flexDirection: 'row',
  }),
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
