import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  Gap,
  InputSearch,
  KeyboardViewGlobal,
  List,
  ModalSort,
} from '../../components';
import {hp, wp} from '../../constants';

const ListTransaksi = ({navigation}) => {
  const [modal, setModal] = useState(false);

  return (
    <KeyboardViewGlobal style={styles.page}>
      <InputSearch onPressSort={() => setModal(true)} />
      <Gap height={hp(1)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List onPress={() => navigation.push('DetailTransaksi')} />
        <List />
      </ScrollView>
      <ModalSort isVisible={modal} onClose={() => setModal(false)} />
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
