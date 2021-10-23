import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {hp} from '../../../constants';

const ImageCustom = ({image, width, height, borderRadius, center}) => {
  return (
    <Image
      source={image}
      style={styles.image(width, height, borderRadius, center)}
    />
  );
};

export default ImageCustom;

const styles = StyleSheet.create({
  image: (width, height, borderRadius, center) => ({
    width: width || hp(30),
    height: height || hp(30),
    borderRadius: borderRadius ? borderRadius : hp(0),
    resizeMode: borderRadius ? 'cover' : 'contain',
    alignSelf: center ? 'center' : 'flex-start',
  }),
});
