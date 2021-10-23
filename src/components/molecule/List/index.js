import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonOutline, Gap, Heading} from '../..';
import {colors, fonts, hp, wp} from '../../../constants';

const List = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.contentTextBank}>
          <Heading
            title="Permata"
            color={colors.black}
            fontFamily={fonts.bold}
            fontSize={hp(2)}
          />
          <Icon name="arrow-forward" color={colors.black} size={wp(5)} />
          <Heading title="BNI" color={colors.black} fontFamily={fonts.bold} />
        </View>
        <Heading title="FEBRI MAULANA YUNUS" fontFamily={fonts.semiBold} />
        <View style={styles.contentTextPrice}>
          <Heading title="Rp10.028" fontFamily={fonts.medium} />
          <Gap width={wp(1)} />
          <Heading title="•" fontFamily={fonts.medium} fontSize={hp(3)} />
          <Gap width={wp(1)} />
          <Heading title="8 April 2020" fontFamily={fonts.semiBold} />
        </View>
      </View>
      <ButtonOutline title="Pengecekan" />
      {/* <Button title="Berhasil" /> */}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: hp(2),
    borderRadius: hp(1),
    borderLeftWidth: wp(2.5),
    borderLeftColor: colors.orange2,
    marginVertical: hp(0.5),
  },
  contentTextBank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTextPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
