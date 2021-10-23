import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Gap, Heading, Link} from '../..';
import {colors, hp, wp} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalSort = ({
  isVisible,
  onClose,
  onPressUrutkan,
  onPressAZ,
  onPressZA,
  onPressNewDate,
  onPressOldDate,
}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Gap height={hp(2)} />
        <Link
          onPress={onPressUrutkan}
          title="URUTKAN"
          leftSpace={wp(2)}
          leftComponent={
            <Icon name="radio-button-on" size={hp(3)} color={colors.orange} />
          }
        />
        <Gap height={hp(2)} />
        <Link
          onPress={onPressAZ}
          title="Nama A-Z"
          leftSpace={wp(2)}
          leftComponent={
            <Icon name="radio-button-off" size={hp(3)} color={colors.orange} />
          }
        />
        <Gap height={hp(2)} />
        <Link
          onPress={onPressZA}
          title="Nama Z-A"
          leftSpace={wp(2)}
          leftComponent={
            <Icon name="radio-button-off" size={hp(3)} color={colors.orange} />
          }
        />
        <Gap height={hp(2)} />
        <Link
          onPress={onPressNewDate}
          title="Tanggal Terbaru"
          leftSpace={wp(2)}
          leftComponent={
            <Icon name="radio-button-off" size={hp(3)} color={colors.orange} />
          }
        />
        <Gap height={hp(2)} />
        <Link
          onPress={onPressOldDate}
          title="Tanggal Terlama"
          leftSpace={wp(2)}
          leftComponent={
            <Icon name="radio-button-off" size={hp(3)} color={colors.orange} />
          }
        />
        <Gap height={hp(2)} />
      </View>
    </Modal>
  );
};

export default ModalSort;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: colors.white,
    padding: hp(2),
    marginHorizontal: wp(5),
    borderRadius: wp(2),
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
  },
});
