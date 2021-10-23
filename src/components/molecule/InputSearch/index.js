import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Gap, Link} from '../..';

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={hp(3)} color={colors.silver} />
      <Gap width={wp(1)} />
      <TextInput
        style={styles.input}
        placeholder="Cari nama, bank, atau nominal"
        placeholderTextColor={colors.silver}
      />
      <Link
        title="URUTKAN"
        color={colors.orange}
        fontFamily={fonts.semiBold}
        size={hp(1.7)}
        rightComponent={
          <Icon
            name="chevron-down-outline"
            color={colors.orange}
            size={hp(3)}
          />
        }
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: hp(1),
    borderRadius: wp(2),
  },
  input: {
    flex: 1,
    paddingVertical: hp(1),
    fontFamily: fonts.regular,
    color: colors.black,
  },
});
