import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Gap, InputSearch, KeyboardViewGlobal, List} from '../../components';
import {hp, wp} from '../../constants';

const ListTransaksi = () => {
  return (
    <KeyboardViewGlobal style={styles.page}>
      <InputSearch />
      <Gap height={hp(1)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List />
        <List />
      </ScrollView>
    </KeyboardViewGlobal>
  );
};

export default ListTransaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: wp(2),
  },
});
