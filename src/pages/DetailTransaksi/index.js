import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonIconOnly, Gap, Heading, Line, Link} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';
import {showInfoToas} from '../../utils';

const DetailTransaksi = ({navigation}) => {
  const onCopy = () => {
    Clipboard.setString('1234081286071968');
    showInfoToas('ID TRANSAKSI', 'FTJANSJASJA BERHASIL DI SALIN');
  };

  return (
    <View style={styles.page}>
      <Gap height={hp(2)} />
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <Heading title="ID TRANSAKSI: #FTJANSJASJA" fontFamily={fonts.bold} />
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
            <Heading title="Permata" fontFamily={fonts.bold} fontSize={hp(2)} />
            <Icon
              name="arrow-forward-outline"
              color={colors.black}
              size={wp(6)}
            />
            <Heading title="BNI" fontFamily={fonts.bold} fontSize={hp(2)} />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading title="FEBRI MAULANA" fontFamily={fonts.bold} />
            <Heading title="031395548" />
          </View>
          <View style={styles.contentDesc}>
            <Heading title="NOMINAL" fontFamily={fonts.bold} />
            <Heading title="Rp10.028" />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading title="BERITA TRANSFER" fontFamily={fonts.bold} />
            <Heading title="Coba mbangking yey" />
          </View>
          <View style={styles.contentDesc}>
            <Heading title="KODE UNIK" fontFamily={fonts.bold} />
            <Heading title="50" />
          </View>
        </View>
        <Gap height={hp(1)} />
        <View style={styles.conatinerText}>
          <View style={styles.contentText}>
            <Heading title="WAKTU DIBUAT" fontFamily={fonts.bold} />
            <Heading title="8 April 2020" />
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
