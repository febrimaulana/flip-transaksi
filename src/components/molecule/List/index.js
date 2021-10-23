import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonOutline, Gap, Heading, Button} from '../..';
import {colors, fonts, hp, wp} from '../../../constants';
import {formatDate, formatRupiah} from '../../../utils';
import {Dot} from '../../../components';

const List = ({
  onPress,
  senderBank,
  beneficiaryBank,
  beneficiaryName,
  amount,
  createdAt,
  completedAt,
  status,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.contentTextBank}>
          <Heading
            title={senderBank}
            color={colors.black}
            fontFamily={fonts.bold}
            fontSize={hp(2)}
            textTransform="uppercase"
          />
          <Icon name="arrow-forward" color={colors.black} size={wp(5)} />
          <Heading
            title={beneficiaryBank}
            color={colors.black}
            fontFamily={fonts.bold}
            textTransform="uppercase"
          />
        </View>
        <Heading
          title={beneficiaryName}
          fontFamily={fonts.semiBold}
          textTransform="uppercase"
        />
        <View style={styles.contentTextPrice}>
          <Heading
            title={formatRupiah(amount)}
            fontFamily={fonts.medium}
            fontSize={hp(1.5)}
          />
          <Gap width={wp(1)} />
          <Dot />
          <Gap width={wp(1)} />
          <Heading
            title={formatDate(status === 'SUCCESS' ? completedAt : createdAt)}
            fontFamily={fonts.semiBold}
            fontSize={hp(1.5)}
          />
        </View>
      </View>
      {status === 'SUCCESS' ? (
        <Button title="Berhasil" />
      ) : (
        <ButtonOutline title="Pengecekan" />
      )}
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
