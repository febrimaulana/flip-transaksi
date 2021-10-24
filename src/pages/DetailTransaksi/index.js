import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonIconOnly, Gap, Heading, Line, Link} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';
import {formatDate, formatRupiah, showInfoToas} from '../../utils';

const DetailTransaksi = ({navigation, route}) => {
  const {
    id,
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    account_number,
    amount,
    remark,
    unique_code,
    created_at,
  } = route.params;
  console.log('====================================');
  console.log(route.params);
  console.log('====================================');
  const onCopy = () => {
    Clipboard.setString(id);
    showInfoToas('ID TRANSAKSI', `${id} BERHASIL DI SALIN`);
  };

  return (
    <View style={styles.page}>
      <Gap height={hp(2)} />
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <Heading title={`ID TRANSAKSI: #${id}`} fontFamily={fonts.bold} />
          <Gap width={wp(2)} />
          <ButtonIconOnly
            icon={
              <Icon name="copy-outline" size={hp(2.5)} color={colors.orange} />
            }
            onPress={onCopy}
          />
        </View>
        <Gap height={hp(1)} />
        <Line />
        <Gap height={hp(3)} />
        <View style={styles.contentTextSpace}>
          <Heading title="DETAIL TRANSAKSI" fontFamily={fonts.bold} />
          <Link
            title="Tutup"
            color={colors.orange}
            fontFamily={fonts.semiBold}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Gap height={hp(3)} />
        <Line />
        <Gap height={hp(1)} />
        <View style={styles.content}>
          <View style={styles.contentTextSpace}>
            <Heading
              title={sender_bank}
              fontFamily={fonts.bold}
              fontSize={hp(2)}
              textTransform="uppercase"
            />
            <Icon
              name="arrow-forward-outline"
              color={colors.black}
              size={wp(6)}
            />
            <Heading
              title={beneficiary_bank}
              fontFamily={fonts.bold}
              fontSize={hp(2)}
              textTransform="uppercase"
            />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading
              title={beneficiary_name}
              fontFamily={fonts.bold}
              textTransform="uppercase"
            />
            <Heading title={account_number} />
          </View>
          <View style={styles.contentDesc}>
            <Heading title="NOMINAL" fontFamily={fonts.bold} />
            <Heading title={formatRupiah(amount)} />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading title="BERITA TRANSFER" fontFamily={fonts.bold} />
            <Heading title={remark} />
          </View>
          <View style={styles.contentDesc}>
            <Heading title="KODE UNIK" fontFamily={fonts.bold} />
            <Heading title={unique_code} />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading title="WAKTU DIBUAT" fontFamily={fonts.bold} />
            <Heading title={formatDate(created_at)} />
          </View>
        </View>
        <Gap height={hp(3)} />
      </View>
    </View>
  );
};

export default DetailTransaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(3),
  },
  contentTextSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conatinerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
  },
  contentText: {
    flex: 1,
  },
  contentDesc: {
    width: wp(25),
  },
});
